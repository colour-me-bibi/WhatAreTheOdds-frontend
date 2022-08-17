import useAxios from "#/hooks/useAxios";
import { Portfolio, QueryHook } from "#/types";

import { QueryKey, useQuery } from "@tanstack/react-query";

const getPortfolio: QueryHook<Portfolio> = (options) => {
  const axios = useAxios();

  return useQuery(
    ["user", "portfolio"] as QueryKey,
    () => axios.get<Portfolio>("portfolio/").then(({ data: portfolio }) => portfolio),
    options,
  );
};

export default getPortfolio;
