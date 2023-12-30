export { default } from 'next-auth/middleware';

export const config = {
  matcher: ['/orders'],
  source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};
