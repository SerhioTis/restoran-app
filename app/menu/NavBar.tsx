'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import { cn } from '@/lib/utils';

import { useSubtypeIntersection } from './store';

interface NavBarProps {
  productSubTypes: Record<string, string[]>;
}

export const NavBar = ({ productSubTypes }: NavBarProps) => {
  const productSubtypesList = Object.keys(productSubTypes);
  const searchParams = useSearchParams();
  const currentProductType = searchParams.get('type');
  const intersectedSubtype = useSubtypeIntersection((state) => state.subtype);

  return (
    <div className="h-full pt-7">
      <ul className="sticky top-5 space-y-2 pb-4">
        {productSubtypesList.map((type) => (
          <li key={type}>
            <Link
              className="pb-2 text-lg font-bold hover:text-orange-500"
              href={`/menu?type=${type}`}
            >
              {type}
            </Link>

            {currentProductType === type && (
              <ul className="space-y-2 pl-2">
                {productSubTypes[type].map((subType) => (
                  <li
                    key={subType}
                    onClick={() =>
                      document
                        .getElementById(subType)
                        ?.scrollIntoView({ behavior: 'smooth' })
                    }
                    className={cn('font-semibold rounded-2xl px-4 py-2', {
                      'bg-orange-400 text-white':
                        subType === intersectedSubtype,
                      'hover:bg-orange-200': subType !== intersectedSubtype,
                    })}
                  >
                    {subType}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
