import useAxios from "#/hooks/useAxios";
import { Contract, Market, MarketDetailFormData, MutationHook } from "#/types";

import { useMutation } from "@tanstack/react-query";

const useCreateMarketDetail: MutationHook<Market, MarketDetailFormData> = (options) => {
  return useMutation(async (marketDetailFormData) => {
    const axios = useAxios();
    const { contracts, ...marketFormData } = marketDetailFormData;
    const { data: market } = await axios.post<Market>("markets/", marketFormData);

    try {
      await Promise.all(
        contracts.map((contractFormData) =>
          axios
            .post<Contract>(`markets/${market.id}/contracts/`, {
              ...contractFormData,
              market: market.id,
            })
            .then(console.log),
        ),
      );
    } catch (error) {
      console.log(error, `Attempting to delete market with id ${market.id}...`);

      // TODO maybe this should be a mutation so that it retries a whole bunch
      await axios.delete(`markets/${market.id}/`);
    }

    return market;
  }, options);
};

export default useCreateMarketDetail;
