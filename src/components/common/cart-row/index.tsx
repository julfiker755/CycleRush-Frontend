import { TableCell, TableRow } from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { CartProduct } from "@/types";
import { Button } from "@/components/ui/button";
import { MinusIcon, PlusIcon, Trash2Icon } from "lucide-react";

type PropsType = {
  product: CartProduct;
};

export default function CartRow({ product }: PropsType) {
  //   <Skeleton className="absolute w-full h-full z-10 top-0" />

  return (
    <TableRow className="relative">
      <TableCell className="py-4">
        <div className="flex items-center space-x-4 relative">
          <div className="w-16 h-16 bg-gray-100 rounded overflow-hidden">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = "/api/placeholder/64/64";
              }}
            />
          </div>
          <div>
            <h3 className="font-medium text-sm">{product.name}</h3>
            <p className="text-xs text-gray-500">{product.brand}</p>
          </div>
        </div>
      </TableCell>
      <TableCell>
        <div className="relative">৳ 55</div>
      </TableCell>
      <TableCell>
        <div className="flex items-center space-x-2 relative">
          <Button variant="outline" size="icon" className="h-8 w-8">
            <MinusIcon className="h-4 w-4" />
          </Button>
          <span className="w-8 text-center">5</span>
          <Button variant="outline" size="icon" className="h-8 w-8">
            <PlusIcon className="h-4 w-4" />
          </Button>
        </div>
      </TableCell>
      <TableCell>
        <div className="relative">4</div>
      </TableCell>
      <TableCell>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="text-red-500 hover:text-red-700 hover:bg-red-50"
            >
              <Trash2Icon className="h-4 w-4" />
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Remove product</AlertDialogTitle>
              <AlertDialogDescription>
                Are you sure you want to remove <strong>{product.name}</strong>{" "}
                from your cart?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Remove</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </TableCell>
    </TableRow>
  );
}
