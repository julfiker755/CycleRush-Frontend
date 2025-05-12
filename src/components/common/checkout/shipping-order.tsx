import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Item } from "@/components/dummy-data/data";
import ShippingProduct from "./shipping-card";
export default function ShippingOrder() {
  return (
    <Card className="md:col-span-3">
      <CardHeader>
        <CardTitle className="text-xl">Order Summary</CardTitle>
        <CardDescription>3 in your cart</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="max-h-60 overflow-y-auto space-y-4">
          {Item.map((product) => (
            <ShippingProduct product={product} key={product._id} />
          ))}
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Subtotal</span>
            <span>৳ 6</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Shipping</span>
            <span>৳ 7</span>
          </div>
        </div>

        <Separator />

        <div className="flex justify-between font-semibold">
          <span>Total</span>
          <span>৳ 4</span>
        </div>
      </CardContent>
    </Card>
  );
}
