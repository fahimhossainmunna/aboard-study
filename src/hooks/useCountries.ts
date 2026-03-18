import { useGetCountriesQuery, useGetCountryDetailsQuery } from "@/store/api/countryApi";

export const useCountries = (slug?: string) => {
  const { 
    data: countries, 
    isLoading: isListLoading, 
    error: listError 
  } = useGetCountriesQuery(undefined, {
    skip: !!slug, 
  });

  const { 
    data: countryDetail, 
    isLoading: isDetailLoading, 
    error: detailError 
  } = useGetCountryDetailsQuery(slug as string, {
    skip: !slug, 
  });

  return {
    countries,
    countryDetail,
    isLoading: isListLoading || isDetailLoading,
    error: listError || detailError,
  };
};