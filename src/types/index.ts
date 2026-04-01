import { StaticImageData } from "next/image";
import React from "react";

export type { Variants, Transition } from "framer-motion";

// 1. University Type
export interface University {
  id: number;
  name: string;
  image: string | StaticImageData;
  location: string;
  category: string;
  logo?: string | StaticImageData;
}

// 2. Success Story Type
export interface SuccessStory {
  id: number;
  title: string;
  date: string;
  author: string;
  category: string;
  image: string | StaticImageData;
  desc: string;
}

// 3. Stat Card Type
export interface StatItem {
  label: string;
  value: number;
  suffix: string;
  icon?: React.ElementType;
}

// 4. Destination Type
export interface Destination {
  name: string;
  code: string;
  universities: string;
  desc: string;
}

// 5. Multi-Step Application Form Type (For Apply Page)
export interface ApplicationFormData {
  fullName: string;
  email: string;
  phone: string;
  dob?: string;
  qualification: string;
  result: string;
  university: string;
  course: string;
  status?: string;
  applicationId?: string;
}
// 6. Registration Form Type
export interface RegistrationFormData {
  fullName: string;
  email: string;
  phone: string;
  university: string;
  message?: string;
}

// 7. Nav Link Type
export interface NavLink {
  title: string;
  href: string;
}

// 8. Country Menu Item
export interface CountryMenuItem {
  name: string;
  code: string; 
}

// 9. Dropdown Menu Item
export interface DropdownMenuItem {
  name: string;
  href: string;
  icon: string; 
}