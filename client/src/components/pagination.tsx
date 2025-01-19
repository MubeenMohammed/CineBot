import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useEffect, useState } from "react";
import { getMovies } from "../../util/backendAPICalls";

export function DasboardPagination() {
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await getMovies(page);
      sessionStorage.setItem("movies", JSON.stringify(response.data));
    }
    fetchData();
  }, [page]);

  // Define a range of pages to be displayed, for example:
  const pages = [1, 2, 3]; // This can be dynamic based on the total pages available

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem className="hover:cursor-pointer">
          <PaginationPrevious onClick={() => setPage(page - 1)} />
        </PaginationItem>
        {pages.map((num) => (
          <PaginationItem
            key={num}
            className="hover:cursor-pointer"
          >
            <PaginationLink
              isActive={num === page}
              onClick={() => setPage(num)}
            >
              {num}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem className="hover:cursor-pointer">
          <PaginationNext onClick={() => setPage(page + 1)} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
