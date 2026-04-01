
import { useState, useMemo } from "react";
import { ReactNode } from "react";

export type UniversityType = "All" | "Public" | "Private" | "Branch";

export interface UniversityItem {
  duration: ReactNode;
  fees: ReactNode;
  website: string | undefined;
  about: ReactNode;
  courses: any;
  highlights: any;
  intake: any;
  name: string;
  location: string;
  type: "Public" | "Private" | "Branch";
  ranking: string;
}

interface UseUniversityFilterReturn {
  search: string;
  setSearch: (val: string) => void;
  activeTab: UniversityType;
  setActiveTab: (tab: UniversityType) => void;
  filtered: UniversityItem[];
  counts: Record<UniversityType, number>;
}

export function useUniversityFilter(
  universities: UniversityItem[]
): UseUniversityFilterReturn {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState<UniversityType>("All");

  const filtered = useMemo(
    () =>
      universities.filter(
        (u) =>
          (activeTab === "All" || u.type === activeTab) &&
          u.name.toLowerCase().includes(search.toLowerCase())
      ),
    [universities, activeTab, search]
  );

  const counts = useMemo(
    () => ({
      All: universities.length,
      Public: universities.filter((u) => u.type === "Public").length,
      Private: universities.filter((u) => u.type === "Private").length,
      Branch: universities.filter((u) => u.type === "Branch").length,
    }),
    [universities]
  );

  return { search, setSearch, activeTab, setActiveTab, filtered, counts };
}