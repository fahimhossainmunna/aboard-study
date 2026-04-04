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

    // 3. Get All Applications
    getAllApplications: builder.query<any, void>({
      query: () => ({
        url: "/all-applications",
        method: "GET",
      }),
      providesTags: ["Applications"],
    }),

    // 4. Update Application Status (EI NOTUN ENDPOINT TA ADD HOISE)
    updateApplicationStatus: builder.mutation({
      query: ({ id, status }) => ({
        url: `/apply-status/${id}`,
        method: "PATCH",
        body: { status },
      }),
      invalidatesTags: ["Applications"], // Update hole list auto refresh hobe
    }),

    // 5. Delete Application
    deleteApplication: builder.mutation({
      query: (id: string) => ({
        url: `/apply/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Applications"],
    }),
  }),
  overrideExisting: true,
});

export const {
  useSubmitApplicationMutation,
  useSubmitConsultationMutation,
  useGetAllApplicationsQuery,
  useUpdateApplicationStatusMutation, // Export kora hoyeche
  useDeleteApplicationMutation,
} = applicationApi;