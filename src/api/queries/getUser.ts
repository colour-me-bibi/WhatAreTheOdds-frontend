import useAxios from "#/hooks/useAxios";
import useIsLoggedIn from "#/hooks/useIsLoggedIn";
import { QueryHook, User } from "#/types";

import { QueryKey, useQuery } from "@tanstack/react-query";

const getUser: QueryHook<User> = (options) => {
  const axios = useAxios();
  const isLoggedIn = useIsLoggedIn();

  return useQuery(
    ["user"] as QueryKey,
    () => axios.get<User>("auth/user/").then(({ data: user }) => user),
    {
      enabled: isLoggedIn,
      ...options,
    },
  );
};

export default getUser;
