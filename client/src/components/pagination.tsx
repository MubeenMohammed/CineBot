import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function DasboardPagination() {
  const [page, setPage] = useState(1);

  // Define a range of pages to be displayed, for example:
  const pages = [1, 2, 3]; // This can be dynamic based on the total pages available

  const pageClicked = (num: number) => {
    setPage(num);
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem className="hover:cursor-pointer">
          <PaginationPrevious onClick={() => pageClicked(page - 1)} />
        </PaginationItem>
        {pages.map((num) => (
          <PaginationItem
            key={num}
            className="hover:cursor-pointer"
          >
            <PaginationLink
              isActive={num === page}
              onClick={() => pageClicked(num)}
            >
              {num}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem className="hover:cursor-pointer">
          <PaginationNext onClick={() => pageClicked(page + 1)} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
