export const computePaginationOffset = (
  page: number,
  itemsPerPage: number,
): number => {
  return (page - 1) * itemsPerPage;
};
