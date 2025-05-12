import { Badge } from "@/components/ui/badge";
import { order_status } from "@/constant/order.const";
import { CheckCircleIcon, ClockIcon, TruckIcon } from "lucide-react";

export const StatusBadge = ({
  status,
}: {
  status: (typeof order_status)[number];
}) => {
  const statusConfig = {
    PENDING: {
      icon: <ClockIcon className="h-4 w-4 mr-1" />,
      className:
        "bg-yellow-200/60 text-yellow-800 dark:bg-yellow-800/20 dark:text-yellow-300 border border-yellow-300 dark:border-yellow-600 shadow-sm",
    },
    SHIPPED: {
      icon: <TruckIcon className="h-4 w-4 mr-1" />,
      className:
        "bg-sky-200/60 text-sky-800 dark:bg-sky-800/20 dark:text-sky-300 border border-sky-300 dark:border-sky-600 shadow-sm",
    },
    DELIVERED: {
      icon: <CheckCircleIcon className="h-4 w-4 mr-1" />,
      className:
        "bg-emerald-200/60 text-emerald-800 dark:bg-emerald-800/20 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-600 shadow-sm",
    },
  };

  const config = statusConfig[status] || statusConfig.PENDING;

  return (
    <Badge
      variant="outline"
      className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full transition-all ${config.className}`}
    >
      {config.icon}
      <span className="capitalize">{status.toLowerCase()}</span>
    </Badge>
  );
};

export function PaidStatusBadge({
  payment,
  isPaid,
}: {
  payment?: number;
  isPaid: boolean;
}) {
  return (
    <div className="flex flex-col gap-0.5">
      {isPaid ? (
        <Badge
          variant="outline"
          className="text-green-700 dark:text-green-300 border border-green-300 dark:border-green-600 bg-green-100/40 dark:bg-green-800/10 text-xs px-2 py-0.5 rounded-full shadow-sm w-fit"
        >
          Paid {payment ? `৳${payment.toLocaleString()}` : ""}
        </Badge>
      ) : (
        <Badge
          variant="outline"
          className="text-red-700 dark:text-red-300 border border-red-300 dark:border-red-600 bg-red-100/40 dark:bg-red-800/10 text-xs px-2 py-0.5 rounded-full shadow-sm w-fit"
        >
          Unpaid
        </Badge>
      )}
    </div>
  );
}

import { paymentMethod } from "@/constant/order.const";
import { CreditCardIcon } from "lucide-react";

export function PaymentMethodBadge({
  method,
}: {
  method: (typeof paymentMethod)[number];
}) {
  const isOnlinePayment = method === "Online Payment";
  return (
    <Badge
      variant="outline"
      className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full transition-all shadow-sm 
          ${
            isOnlinePayment
              ? "text-purple-800 dark:text-purple-300 border border-purple-300 dark:border-purple-600 bg-purple-100/40 dark:bg-purple-800/10"
              : "text-neutral-700 dark:text-neutral-300 border border-neutral-300 dark:border-neutral-600 bg-neutral-100/40 dark:bg-neutral-800/10"
          }`}
    >
      <CreditCardIcon className="h-4 w-4" />
      {method}
    </Badge>
  );
}
