import { baseApi } from "./baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getProduct: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/product/all",
        method: "GET",
        params: arg,
      }),
    })
  }),
});

export const {
 useGetProductQuery
} = productApi
