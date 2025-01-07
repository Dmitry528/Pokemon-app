import { computePaginationOffset } from 'shared/helpers/computePaginationOffset';

describe('computePaginationOffset helper', () => {
  it('should return 0 if page = 1 and items per page = 20', () => {
    const page = 1;
    const itemsPerPage = 20;
    expect(computePaginationOffset(page, itemsPerPage)).toBe(0);
  });

  it('should return 60 if page = 5 and items per page = 15', () => {
    const page = 5;
    const itemsPerPage = 15;
    expect(computePaginationOffset(page, itemsPerPage)).toBe(60);
  });
});
