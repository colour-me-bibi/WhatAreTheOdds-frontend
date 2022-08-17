import useAxios from "#/hooks/useAxios";
import { Market, QueryHook } from "#/types";

import { QueryKey, useQuery } from "@tanstack/react-query";

const getMarket: QueryHook<Market, [marketId: number]> = (marketId, options) => {
  const axios = useAxios();

  return useQuery(
    ["markets", marketId] as QueryKey,
    () => axios.get<Market>(`markets/${marketId}/`).then(({ data: market }) => market),
    options,
  );
};

export default getMarket;
