import { paymentMethod } from "@/constant/order.const";
import {
  PaidStatusBadge,
  PaymentMethodBadge,
} from "@/components/reusable/bage";

type PropsType = {
  method: (typeof paymentMethod)[number];
  isPaid: boolean;
  transactionId?: string;
  payment?: number;
};

export default function OrderPaymentMethodBadge({
  method,
  isPaid,
  payment,
}: PropsType) {
  return (
    <div className="flex flex-col gap-1.5">
      {/* Payment Method Badge */}
      <PaymentMethodBadge method={method} />
      {/* Payment Status */}
      {isPaid && <PaidStatusBadge isPaid={isPaid} payment={payment} />}
    </div>
  );
}
