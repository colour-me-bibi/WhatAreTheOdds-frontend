import useAxios from "#/hooks/useAxios";
import { MutationHook, UserProfile } from "#/types";

import { useMutation } from "@tanstack/react-query";

const usePurchaseTokens: MutationHook<UserProfile, { tokens: number }> = (options) => {
  const axios = useAxios();

  return useMutation(
    (values) => axios.post("profile/tokens/", values).then(({ data: userProfile }) => userProfile), // TODO change this to just User if I can fix the DRF serializer
    options,
  );
};

export default usePurchaseTokens;
