import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
import { Trash2Icon } from "lucide-react";
import { Link } from "react-router-dom";
import { Item } from "@/components/dummy-data/data";
import CartRow from "@/components/common/cart-row";

export default function Cart() {
  //  <section className="py-8 px-4 max-w-4xl mx-auto text-center">
  //       <div className="flex flex-col items-center justify-center py-12 space-y-4">
  //         <ShoppingCartIcon className="w-16 h-16 text-gray-400" />
  //         <h2 className="text-2xl font-semibold">Your cart is empty</h2>
  //         <p className="text-gray-500">Add some products to your cart to see them here.</p>
  //       </div>
  //     </section>

  return (
    <section className="py-8 px-4 max-w-4xl mx-auto">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Shopping Cart 66</h1>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive" size="sm">
              <Trash2Icon className="mr-2 h-4 w-4" /> Clear Cart
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This will remove all items from your cart. This action cannot be
                undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Clear All</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[300px]">Product</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Total</TableHead>
                <TableHead className="w-[80px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Item.map((product: any) => (
                <CartRow key={product._id} product={product} />
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="flex justify-between items-center p-6 border-t">
          <div>
            <p className="text-sm text-gray-500">
              Shipping will be calculated at checkout
            </p>
          </div>
          <div className="text-right">
            <p className="text-lg font-semibold">Total: 67</p>
            <Link to={"/checkout"}>
              <Button className="mt-2">Proceed to Checkout</Button>
            </Link>
          </div>
        </CardFooter>
      </Card>
    </section>
  );
}
