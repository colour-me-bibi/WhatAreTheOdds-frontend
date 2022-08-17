import useAxios from "#/hooks/useAxios";
import { Market, MarketFormData, MutationHook } from "#/types";

import { useMutation } from "@tanstack/react-query";

const useCreateMarket: MutationHook<Market, MarketFormData> = (options) => {
  const axios = useAxios();

  return useMutation(
    (marketFormData) =>
      axios.post<Market>("markets/", marketFormData).then(({ data: market }) => market),
    options,
  );
};

export default useCreateMarket;
