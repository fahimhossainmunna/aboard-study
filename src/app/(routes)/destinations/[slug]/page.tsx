"use client";
import { useParams } from "next/navigation";
import { useCountries } from "@/hooks/useCountries";

export default function DestinationDetailPage() {
  const { slug } = useParams();
  const { countryDetail, isLoading } = useCountries(slug as string);

  if (isLoading) return <div className="h-screen flex items-center justify-center font-bold">Loading...</div>;

  // Jodi backend theke data na pay, tobe URL theke nam nibo
  const countryName = (slug as string).replace("-", " ").toUpperCase();

  return (
    <div className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
      <h1 className="text-6xl font-black text-slate-900">
         Study in <span className="text-blue-600">{countryDetail?.name || countryName}</span>
      </h1>
      <p className="mt-6 text-slate-500 text-lg max-w-3xl">
        {countryDetail?.description || `Explore top universities and visa requirements for ${countryName}.`}
      </p>
      
      {/* Requirement Table / Cards eikhane add hobe */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
         <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 font-bold">
            Admission Requirements for {countryName} will be listed here.
         </div>
      </div>
    </div>
  );
}