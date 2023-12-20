import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  ShoppingBasket,
  Twitter,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { menuTypesList } from '@/utils/menu';

export default async function Home() {
  return (
    <main className="px-24">
      <div className="mt-40 flex items-center justify-between gap-6 pr-16">
        <h1 className="text-5xl font-bold">
          Discover the best restaurants near you
        </h1>
        <Image
          src="/bamer-logo.png"
          alt="baner-logo"
          width={324}
          height={324}
        />
      </div>

      <div className="pt-20">
        <p className="text-center text-3xl font-bold">Категорії</p>

        <div className="mt-8 flex flex-wrap justify-center gap-8">
          {menuTypesList.map((type) => (
            <Link
              key={type}
              className="flex h-48 w-48 items-center justify-center rounded-xl  bg-orange-400"
              href={`/menu?type=${encodeURI(type)}`}
            >
              <p>{type}</p>
            </Link>
          ))}
        </div>
      </div>

      <footer className="mt-10 flex justify-between border-t-2 border-gray-500 pb-10 pt-12">
        <div>
          <div className="flex items-center gap-4">
            <ShoppingBasket size={30} className="mt-1" />
            <h6 className="text-2xl font-semibold">Food Finder</h6>
          </div>
          <p className="mt-1 text-sm opacity-95">
            Fresh and Delicious Food Delivered to Your Doorstep!
          </p>

          <div className="mt-12 flex gap-4">
            <Link href="#">
              <Instagram />
            </Link>
            <Link href="#">
              <Facebook />
            </Link>
            <Link href="#">
              <Twitter />
            </Link>
          </div>
        </div>

        <div>
          <p className="text-xs">Heed help?</p>
          <p className="font-semibold">Our Support Team is Available 24/7</p>

          <div className="mt-8 flex items-center gap-4">
            <Phone className="mt-1" />
            <a
              href="tel:(+123) 000 111 222 333"
              className="text-xl font-semibold"
            >
              (+123) 000 111 222 333
            </a>
          </div>

          <div className="mt-2 flex items-center gap-4">
            <Mail className="mt-1" />
            <a
              href="mailto:info@foodfinder.com"
              className="text-xl font-semibold"
            >
              info@foodfinder.com
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
