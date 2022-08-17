import useAxios from "#/hooks/useAxios";
import useToken from "#/hooks/useToken";
import { MutationHook } from "#/types";

import { useMutation } from "@tanstack/react-query";

const useSignOut: MutationHook<void, void> = (options) => {
  const axios = useAxios();
  const { clearToken } = useToken();

  return useMutation(() => axios.post("auth/logout/").then(() => clearToken()), options);
};

export default useSignOut;
