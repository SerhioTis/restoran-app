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
    header: 'Статус',
  },
  {
    accessorKey: 'totalCost',
    header: 'Загальна Сума',
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
    header: 'Кількість продуктів',
  },
  {
    accessorKey: 'comment',
    header: 'Коментар',
  },
  {
    accessorKey: 'createdAt',
    header: 'Час замовлення',
    cell: ({ getValue }) => {
      const date = getValue<Date>();

      return date.toISOString();
    },
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      return (
        <ActionCell
          role="customer"
          products={row.original.products}
          orderId={row.original.id}
        />
      );
    },
  },
];
