import { redirect } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function Orders() {
  // Check if authhorized
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated: () => {
      redirect('/sign-in');
    },
  });
  console.log('session', session);
  console.log('status', status);

  return <div>Orders</div>;
}
