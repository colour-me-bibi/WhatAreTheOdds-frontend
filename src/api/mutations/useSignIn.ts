import useAxios from "#/hooks/useAxios";
import useToken from "#/hooks/useToken";
import { LoginCredentials, MutationHook } from "#/types";

import { useMutation } from "@tanstack/react-query";

const useSignIn: MutationHook<void, LoginCredentials> = (options) => {
  const axios = useAxios();
  const { setToken } = useToken();

  return useMutation(
    (loginCredentials) =>
      axios
        .post<{ key: string }>("auth/login/", loginCredentials)
        .then(({ data: { key: token } }) => setToken(token)),
    options,
  );
};

export default useSignIn;
