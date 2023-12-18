'use client';

import { MoreHorizontal } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Product } from '@/types/products';
import { useOrderStore } from 'stores/useOrderStore';

interface Props {
  // TODO: change type after roles feature
  role: 'customer';
  products: Product[];
}

export default function ActionCell({ role, products }: Props) {
  const setIsProductsModalOpen = useOrderStore(
    (state) => state.setIsProductsModalOpen,
  );
  const setCurrentModalProducts = useOrderStore(
    (state) => state.setCurrentModalProducts,
  );
  const isCustomer = role === 'customer';

  const handleViewProducts = () => {
    setCurrentModalProducts(products);
    setIsProductsModalOpen(true);
  };

  return (
    <div className="flex justify-end">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {isCustomer && (
            <>
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem onClick={handleViewProducts}>
                View products
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <span className="text-destructive">Decline</span>
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
