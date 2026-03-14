import { StaticImageData } from "next/image";


export type { Variants, Transition } from "framer-motion";

// ─────────────────────────────────────────
// 1. University Type
// ─────────────────────────────────────────
export interface University {
  id: number;
  name: string;
  image: string | StaticImageData;
  location: string;
  category: string;
  logo?: string | StaticImageData;
}

// ─────────────────────────────────────────
// 2. Success Story Type
// ─────────────────────────────────────────
export interface SuccessStory {
  id: number;
  title: string;
  date: string;
  author: string;
  category: string;
  image: string | StaticImageData;
  desc: string;
}

// ─────────────────────────────────────────
// 3. Stat Card Type
// ─────────────────────────────────────────
export interface StatItem {
  label: string;
  value: number;
  suffix: string;
  icon?: React.ElementType;
}

// ─────────────────────────────────────────
// 4. Destination Type
// ─────────────────────────────────────────
export interface Destination {
  name: string;
  code: string;
  universities: string;
  desc: string;
}

// ─────────────────────────────────────────
// 5. Registration Form Type
// ─────────────────────────────────────────
 export interface RegistrationFormData {
  fullName: string;
  email: string;
  phone: string;
  university: string;
  message?: string;
}

// ─────────────────────────────────────────
// 6. Nav Link Type
// ─────────────────────────────────────────
export interface NavLink {
  title: string;
  href: string;
}

// ─────────────────────────────────────────
// 7. Country Menu Item (Navbar mega menu)
// ─────────────────────────────────────────
export interface CountryMenuItem {
  name: string;
  code: string; 
}

// ─────────────────────────────────────────
// 8. Dropdown Menu Item (About / University)
// ─────────────────────────────────────────
export interface DropdownMenuItem {
  name: string;
  href: string;
  icon: string; 
}