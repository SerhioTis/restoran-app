'use client';

import Link from 'next/link';

interface NavBarProps {
  productSubTypes: Record<string, string[]>;
}

export const NavBar = ({ productSubTypes }: NavBarProps) => {
  const productSubtypesList = Object.keys(productSubTypes);

  return (
    <div className="h-full pt-7">
      <ul className="space-y-2 pb-4">
        {productSubtypesList.map((type) => (
          <li key={type}>
            <Link className="pb-2 text-lg" href={`/menu?type=${type}`}>
              {type}
            </Link>

            <ul className="pl-2">
              {productSubTypes[type].map((subType) => (
                <li key={subType}>{subType}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};
