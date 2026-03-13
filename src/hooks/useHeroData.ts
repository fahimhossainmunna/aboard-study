"use client";

import { useMemo } from "react";
import { MoveRight, CalendarDays, BarChart3, Star, MapPin } from "lucide-react";

export const useHeroData = () => {
  const stats = useMemo(() => [
    { icon: BarChart3, value: "95%", label: "Success Rate" },
    { icon: Star, value: "500+", label: "Student Reviews" },
    { icon: MapPin, value: "50+", label: "Study Destinations" },
    { icon: CalendarDays, value: "10+", label: "Years Experience" }
  ], []);

  const content = useMemo(() => ({
    heading: "Aboard Study: Your Path to Malaysia and Beyond",
    subheading: "Complete consultancy for higher education, visa assistance, and university admissions. Secure your future in top globally recognized campuses.",
    primaryCTA: "Book Free Consultation",
    secondaryCTA: "Explore Universities"
  }), []);

  return {
    stats,
    content,
    MoveRight
  };
};