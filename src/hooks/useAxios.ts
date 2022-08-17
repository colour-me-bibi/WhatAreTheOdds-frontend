import useToken from "#/hooks/useToken";
import axios, { AxiosRequestHeaders } from "axios";
import { useMemo } from "react";

const useAxios = () => {
  const { token } = useToken();

  const axiosInstance = useMemo(() => {
    const headers: AxiosRequestHeaders = { "Content-Type": "application/json" };

    if (token) {
      headers.Authorization = `Token ${token}`;
    }

    return axios.create({
      baseURL: "http://localhost:8000/api/",
      headers,
    });
  }, [token]);

  return axiosInstance;
};

export default useAxios;
