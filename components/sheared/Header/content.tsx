import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';

import UserDropdown from './UserDropdown';

const Orders = dynamic(() => import('./Orders'), { ssr: false });

export default function Content() {
  return (
    <header className="mx-24 flex items-center justify-between border-b-2 border-gray-500 py-4">
      <div className="flex h-14 gap-5">
        <Link href="/" className="flex items-center">
          <Image
            width={56}
            height={56}
            src="/logo.png"
            alt="logo"
            className="rounded-full object-cover object-center"
          />
        </Link>

        <div>
          <h4 className="text-xl font-bold">Food Finder</h4>
          <p className="font-semibold opacity-90">
            Дніпро вул. Казимира Малевича, 86Н
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Orders />

        <UserDropdown />
      </div>
    </header>
  );
}
