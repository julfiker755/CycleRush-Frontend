import { tagTypes} from "../tag-types";
import { baseApi } from "./baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getProduct: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/product/all",
        method: "GET",
        params: arg,
      }),
      providesTags: [tagTypes.product],
    }),
    // getDoctorAppointment: build.query({
    //   query: (arg: Record<string, any>) => ({
    //     url: "/appointment/doctor",
    //     method: "GET",
    //     params: arg,
    //   }),
    //   providesTags: [tagTypes.appointment],
    // }),
    //  getSingleAppointment: build.query({
    //       query: (id: string) => ({
    //         url: `/appointment/${id}`,
    //         method: "GET",
    //       }),
    //       providesTags: [tagTypes.singleAppointment],
    //     }),
    // createAppointment: build.mutation({
    //   query: (data) => ({
    //     url: "/appointment/store",
    //     method: "POST",
    //     data,
    //   }),
    //   invalidatesTags: [tagTypes.singleDoctor,tagTypes.commonSchedule],
    // }),
  }),
});

export const {
  useGetProductQuery
} = productApi
