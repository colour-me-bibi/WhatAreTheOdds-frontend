import useAxios from "#/hooks/useAxios";
import { Contract, QueryHook } from "#/types";

import { QueryKey, useQuery } from "@tanstack/react-query";

const getContracts: QueryHook<Contract[], [marketId: number]> = (marketId, options) => {
  const axios = useAxios();

  return useQuery(
    ["markets", marketId, "contracts"] as QueryKey,
    () =>
      axios
        .get<Contract[]>(`markets/${marketId}/contracts/`)
        .then(({ data: contracts }) => contracts),
    options,
  );
};

export default getContracts;
