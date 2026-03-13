"use client";

import taylorImg from "@/assets/tayloUniversity.webp";
import sunwayImg from "@/assets/SunwayUniversity.jpeg";
import apuImg from "@/assets/AsiaPacificUniversity.jpg";
import cityImg from "@/assets/CityUniversityMalaysia.webp";

export const useUniversityData = () => {
  const universities = [
    {
      id: 1,
      name: "Taylor's University",
      location: "Subang Jaya, Malaysia",
      image: taylorImg,
      ranking: "#1 Private Uni in SE Asia",
    },
    {
      id: 2,
      name: "Sunway University",
      location: "Petaling Jaya, Malaysia",
      image: sunwayImg,
      ranking: "5-Star QS Rated",
    },
    {
      id: 3,
      name: "Asia Pacific University (APU)",
      location: "Kuala Lumpur, Malaysia",
      image: apuImg,
      ranking: "Premier Tech University",
    },
    {
      id: 4,
      name: "City University Malaysia",
      location: "Selangor, Malaysia",
      image: cityImg,
      ranking: "Industry Focused Education",
    },
  ];

  return { universities };
};
