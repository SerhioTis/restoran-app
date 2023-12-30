import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';

import { UserDropdown } from '../UserDropdown';

const Orders = dynamic(() => import('../Orders'), { ssr: false });

export const Content = () => {
  return (
    <header className="mx-24 flex items-center justify-between border-b-2 border-gray-500 py-4">
      <div className="flex h-14 gap-5">
        <Link href="/" className="flex items-center">
          <Image
            width={498}
            height={83}
            src="/logo.png"
            alt="logo"
            className="h-full w-auto object-cover object-center"
          />
        </Link>

        <div>
          <h4 className="text-xl font-bold">WINETIME</h4>
          <p className="font-semibold opacity-90">
            Черкаси вул. Михайла Грушевського, 110
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Orders />

        <UserDropdown />
      </div>
    </header>
  );
};
