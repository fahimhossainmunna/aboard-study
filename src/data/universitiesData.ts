// src/data/universitiesData.ts
import { UniversityItem } from "@/hooks/useUniversityFilter";

export const universities: UniversityItem[] = [
  // Public
  { name: "Universiti Malaya (UM)", location: "Kuala Lumpur", type: "Public", ranking: "#1 in Malaysia" },
  { name: "Universiti Putra Malaysia (UPM)", location: "Serdang", type: "Public", ranking: "Top 150 Global" },
  { name: "Universiti Kebangsaan Malaysia (UKM)", location: "Bangi", type: "Public", ranking: "QS Ranked" },
  { name: "Universiti Teknologi Malaysia (UTM)", location: "Johor Bahru", type: "Public", ranking: "Engineering Leader" },
  { name: "Universiti Sains Malaysia (USM)", location: "Penang", type: "Public", ranking: "Top Research Uni" },

  // Private
  { name: "Taylor's University", location: "Subang Jaya", type: "Private", ranking: "Top Private Uni" },
  { name: "Sunway University", location: "Sunway City", type: "Private", ranking: "5-Star Rating" },
  { name: "Asia Pacific University (APU)", location: "Kuala Lumpur", type: "Private", ranking: "Tech Specialist" },
  { name: "UCSI University", location: "Kuala Lumpur", type: "Private", ranking: "QS Ranked" },
  { name: "Management & Science University (MSU)", location: "Shah Alam", type: "Private", ranking: "Hospitality Leader" },
  { name: "SEGi University", location: "Kota Damansara", type: "Private", ranking: "Affordable Choice" },
  { name: "HELP University", location: "Kuala Lumpur", type: "Private", ranking: "Psychology Leader" },
  { name: "MAHSA University", location: "Jenjarom", type: "Private", ranking: "Healthcare Specialist" },
  { name: "City University Malaysia", location: "Petaling Jaya", type: "Private", ranking: "Fastest Growing" },
  { name: "INTI International University", location: "Nilai", type: "Private", ranking: "Global Network" },
  { name: "IUKL", location: "Kajang", type: "Private", ranking: "Infrastructure Expert" },
  { name: "Lincoln University College", location: "Petaling Jaya", type: "Private", ranking: "Nursing/Medicine" },
  { name: "UNITAR International University", location: "Petaling Jaya", type: "Private", ranking: "Early Childhood" },
  { name: "University of Cyberjaya (UoC)", location: "Cyberjaya", type: "Private", ranking: "Medical Hub" },
  { name: "Multimedia University (MMU)", location: "Cyberjaya", type: "Private", ranking: "Creative Media" },
  { name: "KDU University College", location: "Shah Alam", type: "Private", ranking: "Communication" },
  { name: "Quest International University", location: "Ipoh", type: "Private", ranking: "Affordable" },
  { name: "Nilai University", location: "Nilai", type: "Private", ranking: "Campus Life" },

  // Branch
  { name: "Monash University Malaysia", location: "Sunway", type: "Branch", ranking: "Australian Branch" },
  { name: "University of Nottingham", location: "Semenyih", type: "Branch", ranking: "UK Branch" },
  { name: "Xiamen University Malaysia", location: "Sepang", type: "Branch", ranking: "China Branch" },
  { name: "Heriot-Watt University", location: "Putrajaya", type: "Branch", ranking: "UK Branch" },
  { name: "Southampton University", location: "Johor", type: "Branch", ranking: "Engineering Leader" },
  { name: "Swinburne University", location: "Sarawak", type: "Branch", ranking: "Australian Branch" },
  { name: "Curtin University", location: "Miri", type: "Branch", ranking: "Australian Branch" },
];