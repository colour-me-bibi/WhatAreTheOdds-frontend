import useAxios from "#/hooks/useAxios";
import { Contract, ContractFormData, MutationHook } from "#/types";

import { useMutation } from "@tanstack/react-query";

const useCreateContract: MutationHook<Contract, ContractFormData, [marketId: number]> = (
  marketId,
  options,
) => {
  const axios = useAxios();

  return useMutation(
    (contractFormData) =>
      axios
        .post<Contract>(`markets/${marketId}/contracts/`, contractFormData)
        .then(({ data: contract }) => contract),
    options,
  );
};

export default useCreateContract;
