import { baseApi } from "./baseApi";

export const universityApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUniversities: builder.query({
      query: () => "/universities",
      providesTags: ["Universities"],
    }),

    getBlogs: builder.query({
      query: () => "/blogs",
      providesTags: ["Blogs"],
    }),

    submitContact: builder.mutation({
      query: (data) => ({
        url: "/contact",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Leads"], 
    }),
  }),
});

export const { 
  useGetUniversitiesQuery, 
  useGetBlogsQuery, 
  useSubmitContactMutation 
} = universityApi;