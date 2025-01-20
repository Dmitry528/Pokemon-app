import type { PaginationProps } from 'rc-pagination';

interface ITotalInfoProps {
  options: Parameters<NonNullable<PaginationProps['showTotal']>>;
}

const TotalInfo = ({ options }: ITotalInfoProps) => {
  const [total, [from, to]] = options;

  return (
    <p>
      Showing {from}-{to} of {total}
    </p>
  );
};

export default TotalInfo;
