import { baseApi } from "./baseApi";

export const applicationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // 1. Multi-step form endpoint (Apply Page)
    submitApplication: builder.mutation({
      query: (data) => ({
        url: "/apply",
        method: "POST",
        body: data,
      }),
      // Noutun data submit hole list-ta refresh korbe
      invalidatesTags: ["Applications"],
    }),

    // 2. Consultation form endpoint
    submitConsultation: builder.mutation({
      query: (consultationData) => ({
        url: "/consultation",
        method: "POST",
        body: consultationData,
      }),
    }),

    // 3. Get All Applications (Admin Dashboard-er jonno)
    getAllApplications: builder.query<any, void>({
      query: () => ({
        url: "/all-applications",
        method: "GET",
      }),
      // Ei data-ta "Applications" tag-er under-e thakbe
      providesTags: ["Applications"],
    }),
  }),
  overrideExisting: true,
});

export const {
  useSubmitApplicationMutation,
  useSubmitConsultationMutation,
  useGetAllApplicationsQuery,
} = applicationApi;