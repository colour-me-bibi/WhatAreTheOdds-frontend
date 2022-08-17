import { useEffect, useState } from "react";

import useToken from "#/hooks/useToken";

const useIsLoggedIn = () => {
  const { token } = useToken();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(token !== undefined);

  useEffect(() => {
    setIsLoggedIn(token !== undefined);
  }, [token]);

  return isLoggedIn;
};

export default useIsLoggedIn;
