import { ColumnDef } from '@tanstack/react-table';

import { Order } from '@/types/order';

import ActionCell from './ActionCell';

export const columns: ColumnDef<Order>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'status',
    header: 'Status',
  },
  {
    accessorKey: 'totalCost',
    header: 'Total Cost',
    cell: ({ getValue }) => {
      const amount = Number.parseFloat(getValue<string>());

      const formatted = new Intl.NumberFormat('uk-UA', {
        style: 'currency',
        currency: 'UAH',
      }).format(amount);

      return <div>{formatted}</div>;
    },
  },
  {
    accessorKey: 'totalProducts',
    header: 'Total products',
  },
  {
    accessorKey: 'comment',
    header: 'Comment',
  },
  {
    accessorKey: 'createdAt',
    header: 'Created at',
    cell: ({ getValue }) => {
      const date = getValue() as Date;

      return date.toLocaleDateString();
    },
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      return <ActionCell role="customer" products={row.original.products} />;
    },
  },
];
