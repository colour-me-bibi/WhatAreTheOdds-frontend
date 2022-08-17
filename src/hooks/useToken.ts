import useLocalStorage from "#/hooks/useLocalStorage";

const useToken = (initialValue?: string) => {
  const [token, setToken, clearToken] = useLocalStorage("token", initialValue);

  return { token, setToken, clearToken };
};

export default useToken;
