import { baseApi } from "./baseApi";

export const universityApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUniversities: builder.query<any, void>({
      query: () => "/all-universities", 
      providesTags: ["Universities"],
    }),

    addUniversity: builder.mutation({
      query: (data) => ({
        url: "/add-university",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Universities"], 
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
  useAddUniversityMutation,
  useGetBlogsQuery, 
  useSubmitContactMutation 
} = universityApi;