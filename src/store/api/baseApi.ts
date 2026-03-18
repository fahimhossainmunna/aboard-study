import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    // Apnar backend URL (.env file theke asbe)
    baseUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api",
  }),
  // Ei "Countries" tag-ta thaka MUST, na hole laal dag jabe na
  tagTypes: ["Countries", "Universities", "Blogs", "Leads"], 
  endpoints: () => ({}),
});