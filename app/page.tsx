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

import { PRODUCTS_TYPE } from '@/types/products';
import { menuTypesList } from '@/utils/menu';

export default async function Home() {
  return (
    <main className="px-24">
      <div className="relative -mx-24 overflow-hidden px-24">
        <video
          id="mainvideo"
          playsInline
          autoPlay
          muted
          loop
          preload="auto"
          className="absolute inset-0 -top-20 h-auto w-full object-contain object-center"
        >
          <source src="/banner-video.mp4" type="video/mp4" />
        </video>

        <div className="relative mx-auto flex max-w-[1300px] items-center justify-between gap-6 px-5 pt-40 text-white">
          <div>
            <h1 className="pb-4 text-5xl font-bold">WINETIME — це…</h1>

            <ul className=" list-image-[url(/round_list_icon.png)] pl-4">
              <li>
                35 гастромаркет у 15 регіонах України та інтернет-магазин без
                меж
              </li>
              <li>
                <span>Близько 10 000 найменувань продукції:</span>

                <ul className="list-disc pl-8">
                  <li>
                    Близько 600 виробників, представлених у категорії «алкоголь»
                  </li>
                  <li>
                    Близько 200 виробників, представлених у категорії
                    «гастрономія»
                  </li>
                </ul>
              </li>
              <li>500 професіоналів у команді</li>
              <li>
                9 років досвіду роботи мережі і понад 20 років — АСНОВА ХОЛДИНГу
              </li>
            </ul>
          </div>

          <Image
            src="/logo-big.svg"
            alt="banner-logo"
            width={524}
            height={520}
          />
        </div>
      </div>

      <div className="mt-20">
        <p className="text-center text-3xl font-bold">Категорії</p>

        <div className="mt-8 flex flex-wrap justify-center gap-8">
          {menuTypesList.map((type) => (
            <Link
              key={type}
              className="flex h-48 w-48 flex-col items-center justify-center gap-2 rounded-xl  bg-orange-400"
              href={`/menu?type=${encodeURI(type)}`}
            >
              <span className="text-white">{type}</span>

              <Image
                className="h-16 w-auto rounded"
                src={
                  type === PRODUCTS_TYPE.BREAKFASTS
                    ? '/menu/breakfast.jpg'
                    : type === PRODUCTS_TYPE.MENUS
                      ? '/menu/main-menu.png'
                      : type === PRODUCTS_TYPE.DRINKS
                        ? '/menu/drinks.avif'
                        : '/menu/alcohol.jpg'
                }
                alt="breakfast-logo"
                width={50}
                height={50}
              />
            </Link>
          ))}
        </div>
      </div>

      <footer className="mt-10 flex justify-between border-t-2 border-gray-500 pb-10 pt-12">
        <div>
          <div className="flex items-center gap-4">
            <ShoppingBasket size={30} className="mt-1" />
            <h6 className="text-2xl font-semibold">WINETIME</h6>
          </div>
          <p className="mt-1 text-sm opacity-95">
            Свіжа та смачна їжа - це лише один клік від вас!
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
          <p className="text-xs">Потрібна допомога?</p>
          <p className="font-semibold">Наша служба підтримки доступна 24/7.</p>

          <div className="mt-8 flex items-center gap-4">
            <Phone className="mt-1" />
            <a href="tel:0800330370" className="text-xl font-semibold">
              0 800 330 370
            </a>
          </div>

          <div className="mt-2 flex items-center gap-4">
            <Mail className="mt-1" />
            <a
              href="mailto:info@winetime.com"
              className="text-xl font-semibold"
            >
              info@winetime.com
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
