import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const itemApi = createApi({
  reducerPath: "itemApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://h-paradise.vercel.app/v1/auth",
  }),
  tagTypes: ["itemApi"],
  endpoints: (builder) => ({
    getAll: builder.query({
      query: (page) => ({
        url: `/all?page=${page}`,
      }),
      providesTags: ["itemApi"],
    }),
    destroy: builder.mutation({
      query: (code) => ({
        url: "/destroy",
        method: "DELETE",
        body: {
          code,
        },
      }),
      invalidatesTags: ["itemApi"],
    }),
    create: builder.mutation({
      query: () => ({
        url: "/generate",
        method: "POST",
      }),
      invalidatesTags: ["itemApi"],
    }),
  }),
});

export const { useGetAllQuery, useDestroyMutation, useCreateMutation } =
  itemApi;
