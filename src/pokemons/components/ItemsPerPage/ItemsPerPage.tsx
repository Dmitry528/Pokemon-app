import { type ChangeEvent } from 'react';

interface IItemsPerPageProps {
  settings: {
    disabled: boolean;
    size: number;
    onSizeChange: (value: string | number) => void;
    'aria-label': string;
    className: string;
    options: {
      label: string;
      value: string | number;
    }[];
  };
}

const ItemsPerPage = ({ settings }: IItemsPerPageProps) => {
  return (
    <select
      defaultValue={settings.size}
      onChange={({ target: { value } }: ChangeEvent<HTMLSelectElement>) => {
        settings.onSizeChange(value);
      }}
    >
      {settings.options.map(({ label, value }) => (
        <option key={label} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};

export default ItemsPerPage;
