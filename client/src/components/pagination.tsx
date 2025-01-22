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

  const pages = [1, 2, 3];

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem className="hover:cursor-pointer">
          <PaginationPrevious onClick={() => dispatch(previousPage())} />
        </PaginationItem>
        {pages.map((num) => (
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
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem className="hover:cursor-pointer">
          <PaginationNext onClick={() => dispatch(nextPage())} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
