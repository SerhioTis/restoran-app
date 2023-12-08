import Image from 'next/image';
import { redirect } from 'next/navigation';

import { getAllProductsTypes } from 'actions/products';
import { Input } from 'components/ui/input';
import { PRODUCTS_TYPE } from 'types/products';

interface PageProps {
  searchParams: {
    type: string;
  };
}

export default async function Page({ searchParams }: PageProps) {
  const menuTypes = await getAllProductsTypes();

  if (!menuTypes.includes(decodeURI(searchParams.type)))
    redirect(`/menu?type=${encodeURI(PRODUCTS_TYPE.BREAKFASTS)}`);

  return (
    <main>
      <div>
        <Input type="search" placeholder="search" />
      </div>

      <div>
        <h1>SUB_TYPE</h1>
        <div className="divide-y-2">
          <article>
            <div>
              <h4>ВІВСЯНКА</h4>
              <div>169 hrn</div>
              <div>220g</div>
            </div>

            <div>
              <Image width={160} height={120} src={''} alt="product img" />
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
