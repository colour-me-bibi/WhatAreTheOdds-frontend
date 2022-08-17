import useAxios from "#/hooks/useAxios";
import { MutationHook } from "#/types";

import { useMutation } from "@tanstack/react-query";

const useDeleteMarket: MutationHook<void, void, [marketId: number]> = (marketId, options) => {
  const axios = useAxios();

  return useMutation(() => axios.delete(`markets/${marketId}/`), options);
};

export default useDeleteMarket;
