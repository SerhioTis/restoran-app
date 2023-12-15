'use client';
import { Fragment } from 'react';

import Link from 'next/link';

interface NavBarProps {
  productSubTypes: Record<string, string[]>;
}

export const NavBar = ({ productSubTypes }: NavBarProps) => {
  const productSubtypesList = Object.keys(productSubTypes);

  return (
    <div className="h-full w-[300px] pt-7">
      <ul className="pb-4">
        {productSubtypesList.map((type) => (
          <Fragment key={type}>
            <li className="pb-2 text-lg [&:not(:first-child)]:pt-5">
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
