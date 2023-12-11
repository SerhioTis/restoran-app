'use client';
import { Fragment } from 'react';

import Link from 'next/link';

import { Input } from 'components/ui/input';

import { useSearchProduct } from './store';

interface NavBarProps {
  productSubTypes: Record<string, string[]>;
}

export const NavBar = ({ productSubTypes }: NavBarProps) => {
  const { search, setSearch } = useSearchProduct();
  const productSubtypesList = Object.keys(productSubTypes);

  return (
    <div className="h-full pt-7">
      <div className="mx-4 mb-6">
        <Input
          type="search"
          placeholder="Назва страви"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>
      <ul className="pb-4">
        {productSubtypesList.map((type) => (
          <Fragment key={type}>
            <li className="pb-4 text-lg">
              <Link href={`/menu?type=${type}`}>{type}</Link>
            </li>

            <li className="pl-2">
              <ul>
                {productSubTypes[type].map((subType) => (
                  <li key={subType}>{subType}</li>
                ))}
              </ul>
            </li>
          </Fragment>
        ))}
      </ul>
    </div>
  );
};
