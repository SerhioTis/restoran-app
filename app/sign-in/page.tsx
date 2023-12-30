'use client';
import { FormEvent, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import { usePageLoadingStore } from '@/stores/usePageLoadingStore';

export default function Page() {
  const router = useRouter();
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const setPageLoading = usePageLoadingStore((state) => state.setLoading);

  const handleSubmit = async (e: FormEvent) => {
    try {
      setPageLoading(true);
      e.preventDefault();
      const res = await signIn('credentials', { ...data, redirect: false });

      if (!res?.ok) {
        throw new Error('auth error', { cause: res?.error });
      }
      toast({
        description: 'You are successfully logined',
      });
      router.push('/');
    } catch (error: any) {
      const cause = error?.cause as string;

      const messages: Record<string, string> = {
        CredentialsSignin: 'Wrong credentials',
      };

      const validationErrorMessage = messages?.[cause];
      toast({
        variant: 'destructive',
        description: validationErrorMessage ?? 'Something went wrong',
      });
    } finally {
      setPageLoading(false);
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Link href="/">
          <Image
            width={160}
            height={120}
            src="/logo.png"
            alt="logo"
            className="m-auto rounded-sm object-cover object-center"
          />
        </Link>
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Увійти в свій акаунт
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Пошта
            </label>
            <div className="mt-2">
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                onChange={(e) =>
                  setData((prev) => ({ ...prev, email: e.target.value }))
                }
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Пароль
              </label>
            </div>
            <div className="mt-2">
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                onChange={(e) =>
                  setData((prev) => ({ ...prev, password: e.target.value }))
                }
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
            >
              Увійти
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          <Link href="/sign-up">Немаєте акаунт?</Link>
        </p>
      </div>
    </div>
  );
}
