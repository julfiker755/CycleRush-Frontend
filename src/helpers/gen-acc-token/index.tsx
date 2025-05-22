import { instance } from "@/helpers/axios/axiosInstance";

export const GenerateAccessToken = async () => {
  return await instance({
    url: process.env.NEXT_PUBLIC_API_URL + "/auth/refresh-token",
    method: "POST",
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
  });
};
