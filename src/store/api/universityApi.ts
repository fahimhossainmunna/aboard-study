import { baseApi } from "./baseApi";

export const universityApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // 1. Get All Universities
    getUniversities: builder.query<any, void>({
      query: () => "/all-universities", 
      providesTags: ["Universities"],
    }),

    // 2. Add University
    addUniversity: builder.mutation({
      query: (data) => ({
        url: "/add-university",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Universities"], 
    }),

    // 3. Delete University (EI NOTUN ENDPOINT TA ADD HOISE)
    deleteUniversity: builder.mutation({
      query: (id) => ({
        url: `/university/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Universities"], // Delete hole list refresh hobe
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
  useDeleteUniversityMutation, // Export kora holo
  useGetBlogsQuery, 
  useSubmitContactMutation 
} = universityApi;