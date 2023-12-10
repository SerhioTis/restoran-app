'use client';
import { Fragment } from 'react';

import { Input } from 'components/ui/input';

import { useSearchProduct } from './store';

interface NavBarProps {
  productSubTypes: Record<string, string[]>;
}

export const NavBar = ({ productSubTypes }: NavBarProps) => {
  const { search, setSearch } = useSearchProduct();
  const productSubtypesList = Object.keys(productSubTypes);
  console.log(productSubTypes);

  return (
    <div className="h-full">
      <Input
        type="search"
        placeholder="Назва страви"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      <ul>
        {productSubtypesList.map((type) => (
          <Fragment key={type}>
            <li>{type}</li>

            <li>
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
