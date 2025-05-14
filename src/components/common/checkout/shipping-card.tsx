import { Separator } from "@/components/ui/separator";
// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
//   AlertDialogTrigger,
// } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { MinusIcon, PlusIcon, X } from "lucide-react";
import { CartProduct } from "@/types";

type PropsType = {
  product: CartProduct;
};
export default function ShippingProduct({
  product,
}: // isProcessing,
// productsLength,
PropsType) {
  const productImage = Array.isArray(product.image)
    ? product.image[0]
    : product.image || "/api/placeholder/64/64";
  return (
    <div className="relative flex flex-col gap-2">
      {/* isLoading */}
      {/* div className="absolute inset-0 rounded-lg overflow-hidden">
                    <Skeleton className='w-full h-full' />
                </div> */}

      <div className="flex gap-3">
        <div className="w-14 h-14 bg-gray-100 rounded overflow-hidden">
          <img
            src={productImage}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium truncate">{product.name}</p>
          <p className="text-xs text-gray-500 flex items-center gap-0.5">
            ৳{product.price} <X className="size-3" /> {product.orderQuantity}{" "}
          </p>

          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center space-x-1">
              <Button variant="outline" size="icon" className="h-6 w-6">
                <MinusIcon className="h-3 w-3" />
              </Button>
              <span className="w-6 text-center text-sm">4</span>
              <Button variant="outline" size="icon" className="h-6 w-6">
                <PlusIcon className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </div>
        <div className="h-full">
          {/* {products > 1 && (
            <div className="flex justify-end items-end">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6 text-gray-400 hover:text-red-500"
                  >
                    <Trash2Icon className="h-3 w-3" />
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Remove product</AlertDialogTitle>
                    <AlertDialogDescription>
                      Are you sure you want to remove {product.name} from your
                      cart?
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Remove</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          )} */}
          <p className="font-medium text-sm">৳ 6</p>
        </div>
      </div>
      <Separator />
    </div>
  );
}
