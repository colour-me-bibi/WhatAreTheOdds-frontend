import useAxios from "#/hooks/useAxios";
import { OfferFormData, Offer, MutationHook } from "#/types";

import { useMutation } from "@tanstack/react-query";

const useCreateOffer: MutationHook<Offer, OfferFormData, [marketId: number, contractId: number]> = (
  marketId,
  contractId,
  options,
) => {
  const axios = useAxios();

  return useMutation(
    (offerFormData) =>
      axios
        .post<Offer>(`markets/${marketId}/contracts/${contractId}/offers/`, offerFormData)
        .then(({ data: offer }) => offer),
    options,
  );
};

export default useCreateOffer;
