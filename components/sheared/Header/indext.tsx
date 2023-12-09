import { ShoppingCart, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="mx-24 flex items-center justify-between border-b-2 py-4">
      <div className="flex h-14 gap-5">
        <Image
          width={56}
          height={56}
          src="/logo.png"
          alt="logo"
          className="rounded-full object-cover object-center"
        />

        <div>
          <h4 className="text-xl font-bold">Food Finder</h4>
          <p className="font-semibold opacity-90">
            Дніпро вул. Казимира Малевича, 86Н
          </p>
        </div>
      </div>

      <div className="flex gap-4">
        <Link href="#">
          <ShoppingCart size={24} />
        </Link>

        <Link href="#">
          <User size={24} />
        </Link>
      </div>
    </header>
  );
};
