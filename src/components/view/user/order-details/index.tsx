import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import StatusProgress from "@/components/status-progress";
import {
  PaidStatusBadge,
  PaymentMethodBadge,
} from "@/components/reusable/bage";
import { Item } from "@/components/dummy-data/data";
import { useParams } from "react-router-dom";

export default function OrderDetails() {
  const { id } = useParams();
  console.log(id);

  //  <section className="py-8">
  //           <div className="flex flex-col items-center justify-center py-20">
  //               <ListFilter className="h-12 w-12 text-muted-foreground mb-4" />
  //               <h3 className="text-xl font-medium mb-2">Order not found!</h3>
  //               <p className="text-muted-foreground text-center max-w-md">
  //                   We couldn't find the order details. Please check your order number or contact customer support.
  //               </p>
  //               <Button
  //                   onClick={() => navigate(-1)}
  //                   variant="outline"
  //                   className="mt-6"
  //               >
  //                   <ArrowLeft />
  //                   Go Back
  //               </Button>
  //           </div>
  //       </section>
  return (
    <section className="py-6">
      <h1 className="text-3xl font-bold mb-6">Order Details</h1>

      <Card className="mb-8">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Order # 44645</CardTitle>
          </div>
          <div className="text-sm text-muted-foreground">
            Placed on 12/34/77
          </div>
        </CardHeader>
        <CardContent className="">
          <div className="pb-5">
            {" "}
            <StatusProgress status={"SHIPPED"} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="font-semibold text-lg mb-2">
                Shipping Information
              </h3>
              <div className="text-foreground">
                <p className="font-medium">Cycle</p>
                <p>Dinajpur</p>
                <p>017416956</p>
                <p>Jul@gmail.com</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">
                Payment Information
              </h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="inline-block w-32">Method:</span>
                  <PaymentMethodBadge method={"Online Payment"} />
                </div>
                <div className="flex items-center">
                  <span className="inline-block w-32">Status:</span>
                  <PaidStatusBadge isPaid={true} payment={44} />
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="font-semibold text-lg mb-4">Order Items</h3>
            <div className="space-y-4">
              {Item.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-4 border rounded-lg"
                >
                  <div className="flex gap-4">
                    <div className=" w-16 md:w-20 min-w-16 md:min-w-20 h-12 md:h-16 bg-gray-100 rounded-md flex items-center justify-center overflow-hidden">
                      {item.images[0] ? (
                        <img
                          src={item.images[0]}
                          alt={item.name}
                          className="w-full h-full object-cover "
                        />
                      ) : (
                        <Package className="text-muted-foreground" />
                      )}
                    </div>
                    <div>
                      <h6 className="font-medium line-clamp-1">{item.name}</h6>
                      <p className="text-muted-foreground text-sm">
                        Ripe · Cycle
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">৳{item.price.toFixed(2)}</p>
                    <p className="text-muted-foreground text-sm">Qty: 4</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3">Order Summary</h3>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal</span>
                    <span>৳ 77 </span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Delivery Charge</span>
                    <span>৳ 55</span>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between font-medium text-lg">
                    <span>Total</span>
                    <span>77</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
