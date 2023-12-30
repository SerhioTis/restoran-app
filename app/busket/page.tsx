import { AuthAlert } from './AuthAlert';
import { OrderDashboard } from './OrderDashboard';

export default async function Busket() {
  return (
    <div className="mx-24 flex flex-col justify-center gap-5 pt-10">
      <AuthAlert />

      <OrderDashboard />
    </div>
  );
}
