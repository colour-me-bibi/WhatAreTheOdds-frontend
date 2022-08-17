import useAxios from "#/hooks/useAxios";
import useToken from "#/hooks/useToken";
import { MutationHook, RegisterCredentials } from "#/types";

import { useMutation } from "@tanstack/react-query";

const useSignUp: MutationHook<void, RegisterCredentials> = (options) => {
  const axios = useAxios();
  const { setToken } = useToken();

  return useMutation(
    (registerCredentials) =>
      axios
        .post<{ key: string }>("auth/registration/", registerCredentials)
        .then(({ data: { key: token } }) => setToken(token)),
    options,
  );
};

export default useSignUp;
