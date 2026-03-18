import { baseApi } from "./baseApi";

export const applicationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // 1. Multi-step form endpoint
    submitApplication: builder.mutation({
      query: (data) => ({
        url: "/apply",
        method: "POST",
        body: data,
      }),
    }),

    // 2. Consultation form endpoint
    submitConsultation: builder.mutation({
      query: (consultationData) => ({
        url: "/consultation",
        method: "POST",
        body: consultationData,
      }),
    }),
  }),
  // ── EITA ADD KORUN ──
  overrideExisting: true, 
});

export const { 
  useSubmitApplicationMutation, 
  useSubmitConsultationMutation 
} = applicationApi;