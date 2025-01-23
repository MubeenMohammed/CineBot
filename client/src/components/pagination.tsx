import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { RootState, AppDispatch } from "@/state/store";
import { useSelector, useDispatch } from "react-redux";
import { setPage, nextPage, previousPage } from "@/state/page/pageSlice";

export default function DasboardPagination() {
  const page = useSelector((state: RootState) => state.page.page);
  const dispatch: AppDispatch = useDispatch();

  const totalMovies = 250;
  const moviesPerPage = 20;
  const totalPages = Math.ceil(totalMovies / moviesPerPage);

  // Helper function to generate page numbers
  const getPageNumbers = () => {
    let startPage, endPage;
    if (totalPages <= 5) {
      // less than 5 total pages so show all
      startPage = 1;
      endPage = totalPages;
    } else {
      // more than 5 total pages so calculate start and end pages
      if (page <= 3) {
        startPage = 1;
        endPage = 5;
      } else if (page + 2 >= totalPages) {
        startPage = totalPages - 4;
        endPage = totalPages;
      } else {
        startPage = page - 2;
        endPage = page + 2;
      }
    }
    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem className="hover:cursor-pointer">
          <PaginationPrevious onClick={() => dispatch(previousPage())} />
        </PaginationItem>
        {page > 3 && totalPages > 5 && (
          <>
            <PaginationItem className="hover:cursor-pointer">
              <PaginationLink onClick={() => dispatch(setPage(1))}>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          </>
        )}
        {getPageNumbers().map((num) => (
          <PaginationItem
            key={num}
            className="hover:cursor-pointer"
          >
            <PaginationLink
              isActive={num === page}
              onClick={() => dispatch(setPage(num))}
            >
              {num}
            </PaginationLink>
          </PaginationItem>
        ))}
        {page < totalPages - 2 && totalPages > 5 && (
          <>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem className="hover:cursor-pointer">
              <PaginationLink onClick={() => dispatch(setPage(totalPages))}>
                {totalPages}
              </PaginationLink>
            </PaginationItem>
          </>
        )}
        <PaginationItem className="hover:cursor-pointer">
          <PaginationNext onClick={() => dispatch(nextPage())} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
