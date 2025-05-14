import { TableCell, TableRow } from "@/components/ui/table";
import { IOrder } from "@/types";
import { useState } from "react";

// UI Components
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

// Icons
import {
  MoreHorizontal,
  ReceiptText,
  Trash2,
  TruckIcon,
  ClockIcon,
  CheckCircleIcon,
  HomeIcon,
  PhoneIcon,
  UserIcon,
} from "lucide-react";

// API & Constants
import { order_status } from "@/constant/order.const";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import OrderPaymentMethodBadge from "@/components/common/mange-order/order-bage";
import { StatusBadge } from "@/components/reusable/bage";
import OrderDetails from "@/components/view/user/order-details";

export default function SingleOrder({
  order,
  index,
}: {
  order: IOrder;
  index?: number;
}) {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [orderDetailsDialogOpen, setOrderDetailsDialogOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleStatusChange = async (value: (typeof order_status)[number]) => {
    console.log(value);
    console.log(index);
  };

  const deleteOrder = async () => {
    console.log("delete");
  };

  return (
    <>
      <TableRow>
        <TableCell className="font-medium text-foreground/80"># 44</TableCell>
        <TableCell>
          <div className="space-y-1">
            <div className="flex items-center space-x-1 text-foreground">
              <UserIcon className="h-3 w-3" />
              <p className="font-medium text-sm">Julfiker </p>
            </div>

            <div className="flex items-center space-x-1 text-foreground/70">
              <PhoneIcon className="h-3 w-3" />
              <p className="text-sm">01741703755</p>
            </div>

            <div className="flex items-center space-x-1 text-foreground/70">
              <HomeIcon className="h-3 w-3" />
              <p className="text-sm truncate max-w-[150px]">khansama</p>
            </div>
          </div>
        </TableCell>

        <TableCell>
          <OrderPaymentMethodBadge
            method={"Online Payment"}
            isPaid={true}
            payment={66}
          />
        </TableCell>
        <TableCell>
          <div className="rounded-lg px-2 py-1 shadow-sm min-w-max bg-card">
            <div className="grid grid-cols-2 gap-x-1 text-sm">
              <p className="text-muted-foreground text-sm">Subtotal:</p>
              <p className="text-right text-sm">৳ 55</p>

              <p className="text-muted-foreground text-sm">Delivery:</p>
              <p className="text-right text-sm">৳ Dinajpur</p>

              <Separator className="col-span-2 my-1" />

              <p className="font-semibold text-sm">Total:</p>
              <p className="text-right font-semibold text-sm">৳ 40</p>
            </div>
          </div>
        </TableCell>

        <TableCell>
          <StatusBadge status={"PENDING"} />
        </TableCell>

        <TableCell>
          <div className="flex flex-col">
            <span className="text-sm font-medium">45/76/00</span>
          </div>
        </TableCell>

        <TableCell className="text-right">
          <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 rounded-full hover:bg-gray-100"
              >
                <MoreHorizontal className="h-4 w-4" />
                <span className="sr-only">Open menu</span>
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-[240px]">
              <DropdownMenuLabel className="text-foreground/80">
                Order Actions
              </DropdownMenuLabel>
              <DropdownMenuSeparator />

              <DropdownMenuItem
                className="cursor-pointer flex items-center"
                onClick={() => {
                  setIsMenuOpen(false);
                  setTimeout(() => {
                    setOrderDetailsDialogOpen(true);
                  }, 50);
                }}
              >
                <ReceiptText className="mr-2 h-4 w-4 text-foreground/60" />
                <span>View Order Details</span>
              </DropdownMenuItem>

              <DropdownMenuItem
                onClick={() => {
                  setIsMenuOpen(false);
                  setTimeout(() => {
                    setIsDeleteDialogOpen(true);
                  }, 50);
                }}
                className="cursor-pointer flex items-center text-red-600 dark:text-red-500"
              >
                <Trash2 className="mr-2 h-4 w-4" />
                <span>Delete Order</span>
              </DropdownMenuItem>

              <DropdownMenuSeparator />
              <DropdownMenuLabel className="text-foreground/80">
                Update Order Status
              </DropdownMenuLabel>

              <div className="p-2">
                <RadioGroup
                  className="flex flex-col gap-2"
                  value={order.status}
                  onValueChange={handleStatusChange}
                >
                  {order_status.map((status) => (
                    <div
                      key={status}
                      className="flex items-center space-x-2 rounded-md py-1 px-2 hover:bg-foreground/10"
                    >
                      <RadioGroupItem
                        value={status}
                        id={`${order._id}-${status}`}
                      />
                      <Label
                        htmlFor={`${order._id}-${status}`}
                        className="text-sm font-medium cursor-pointer flex items-center"
                      >
                        {status === "PENDING" && (
                          <ClockIcon className="h-3 w-3 mr-2 text-amber-600" />
                        )}
                        {status === "SHIPPED" && (
                          <TruckIcon className="h-3 w-3 mr-2 text-blue-600" />
                        )}
                        {status === "DELIVERED" && (
                          <CheckCircleIcon className="h-3 w-3 mr-2 text-green-600" />
                        )}
                        {status.charAt(0) + status.slice(1).toLowerCase()}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </TableCell>
      </TableRow>

      <AlertDialog
        open={isDeleteDialogOpen}
        onOpenChange={setIsDeleteDialogOpen}
      >
        <AlertDialogContent className="max-w-md">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-primary">
              Confirm Order Deletion
            </AlertDialogTitle>
            <AlertDialogDescription className="text-foreground/70">
              This action cannot be undone. This will permanently delete the
              order for
              <span className="font-medium text-foreground/90">
                {" "}
                {order.name}
              </span>{" "}
              with all its associated data.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter className="gap-2">
            <AlertDialogCancel>Cancel</AlertDialogCancel>

            <AlertDialogAction onClick={deleteOrder}>
              Yes, Delete Order
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <Dialog
        open={orderDetailsDialogOpen}
        onOpenChange={setOrderDetailsDialogOpen}
      >
        <DialogContent className="min-w-[95%]">
          <DialogHeader>
            <DialogTitle>Order Details</DialogTitle>
            <DialogDescription>
              <OrderDetails />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
