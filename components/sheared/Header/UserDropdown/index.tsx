'use client';
import { useEffect } from 'react';

import { ListOrdered, LogIn, LogOut, User as UserIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { usePageLoadingStore } from 'stores/usePageLoadingStore';

export default function UserDropdown() {
  const { data: session, status } = useSession();
  const setPageLoading = usePageLoadingStore((state) => state.setLoading);
  const router = useRouter();

  const username = session?.user?.name;
  const isAuthorized = status === 'authenticated';

  useEffect(() => {
    if (status === 'loading') {
      setPageLoading(true);
    } else {
      setPageLoading(false);
    }
  }, [status]);

  const handleAuth = () => {
    if (isAuthorized) {
      console.log('signout');
      signOut();
      return;
    }

    router.push('/sign-in');
  };

  const handleOrdersClick = () => {
    router.push('/orders');
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <UserIcon size={24} className="cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end">
        {!!username && (
          <>
            <DropdownMenuLabel>{username}</DropdownMenuLabel>
            <DropdownMenuSeparator />
          </>
        )}

        {isAuthorized && (
          <DropdownMenuItem onClick={handleOrdersClick}>
            <ListOrdered className="mr-2 h-4 w-4" />
            <span>Orders</span>
          </DropdownMenuItem>
        )}

        <DropdownMenuItem onClick={handleAuth}>
          {isAuthorized ? (
            <LogOut className="mr-2 h-4 w-4" />
          ) : (
            <LogIn className="mr-2 h-4 w-4" />
          )}
          <span>{isAuthorized ? 'Sign out' : 'Sign in'}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
