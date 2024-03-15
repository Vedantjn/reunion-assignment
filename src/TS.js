import React, { useMemo } from 'react';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import { sampleData } from './makeData';

const Example = () => {
  const columns = useMemo(() => [
    {
      accessorKey: 'id',
      header: 'ID',
    },
    {
      accessorKey: 'name',
      header: 'Name',
    },
    {
      accessorKey: 'category',
      header: 'Category',
    },
    {
      accessorKey: 'subcategory',
      header: 'Subcategory',
    },
    {
      accessorKey: 'price',
      header: 'Price',
    },
    {
      accessorKey: 'sale_price',
      header: 'Sales Price',
    },
    {
      accessorKey: 'createdAt',
      header: 'Created At',
      customCellRenderer: (cellValue) => new Date(cellValue).toLocaleDateString(),
    },
    {
      accessorKey: 'updatedAt',
      header: 'Updated At',
      customCellRenderer: (cellValue) => new Date(cellValue).toLocaleDateString(),
    },
  ], []);

  const table = useMaterialReactTable({
    columns,
    data: sampleData,
    columnFilterDisplayMode: 'popover',
  });

  return <MaterialReactTable table={table} />;
};

export default Example;
