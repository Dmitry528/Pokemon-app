import RcPagination, { PaginationProps } from "rc-pagination";
import "rc-pagination/assets/index.css";

const Pagination = (props: PaginationProps) => {
  return <RcPagination {...props} />;
};

export default Pagination;
