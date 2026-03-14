import { useState } from "react";

interface UsePaginationProps {
  totalItems: number;
  itemsPerPage: number;
}

interface UsePaginationReturn<T> {
  currentPage: number;
  totalPages: number;
  paginate: (items: T[]) => T[];
  handlePage: (page: number) => void;
  handlePrev: () => void;
  handleNext: () => void;
  isFirst: boolean;
  isLast: boolean;
  from: number;
  to: number;
}

export function usePagination<T>({
  totalItems,
  itemsPerPage,
}: UsePaginationProps): UsePaginationReturn<T> {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const paginate = (items: T[]): T[] =>
    items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrev = () => handlePage(currentPage - 1);
  const handleNext = () => handlePage(currentPage + 1);

  const from = (currentPage - 1) * itemsPerPage + 1;
  const to = Math.min(currentPage * itemsPerPage, totalItems);

  return {
    currentPage,
    totalPages,
    paginate,
    handlePage,
    handlePrev,
    handleNext,
    isFirst: currentPage === 1,
    isLast: currentPage === totalPages,
    from,
    to,
  };
}