import { baseApi } from "./baseApi";

// Response-er jonno interface (Type safety-r jonno)
export interface Country {
  id: string | number;
  slug: string;
  name: string;
  flag: string;
  shortDesc: string;
  description: string;
  requirements: string[];
  image?: string;
}

export const countryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    
    // 1. Get Countries List (Query)
    getCountries: builder.query<Country[], void>({
      query: () => "/countries",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ slug }) => ({ type: "Countries" as const, id: slug })),
              { type: "Countries", id: "LIST" },
            ]
          : [{ type: "Countries", id: "LIST" }],
    }),

    // 2. Get Single Country Details (Query)
    getCountryDetails: builder.query<Country, string>({
      query: (slug) => `/countries/${slug}`,
      providesTags: (_result, _error, slug) => [{ type: "Countries" as const, id: slug }],
    }),

  }),
});

// Hooks auto-generated hoye jabe
export const { 
  useGetCountriesQuery, 
  useGetCountryDetailsQuery 
} = countryApi;