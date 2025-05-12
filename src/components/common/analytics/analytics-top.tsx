import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ShoppingCart, Users } from "lucide-react";

export default function AnalyticsTop() {
  // if (isLoading) {
  //   return (
  //     <div className="flex gap-4">
  //       <Skeleton className="w-full h-[115px]" />
  //       <Skeleton className="w-full h-[115px]" />
  //       <Skeleton className="w-full h-[115px]" />
  //       <Skeleton className="w-full h-[115px]" />
  //     </div>
  //   );
  // }
  return (
    <div className="flex gap-4">
      {/* revenue  */}
      <>
        <div className="w-full">
          <Card>
            <CardHeader>
              <CardTitle>
                <div className="flex justify-between items-center font-normal">
                  <p className="text-sm">Total Revenue</p>
                  <span className="text-sm text-muted-foreground">৳</span>
                </div>
              </CardTitle>
              <CardDescription>
                <h2 className="text-xl text-foreground font-bold">৳ 1200</h2>
                66 % from last month
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
        <div className="w-full">
          <Card>
            <CardHeader>
              <CardTitle>
                <div className="flex justify-between items-center font-normal">
                  <p className="text-sm">Total Orders</p>
                  <ShoppingCart size={16} className="text-muted-foreground" />
                </div>
              </CardTitle>
              <CardDescription>
                <h2 className="text-xl text-foreground font-bold">67</h2>
                45 % from last month
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
        <div className="w-full">
          <Card>
            <CardHeader>
              <CardTitle>
                <div className="flex justify-between items-center font-normal">
                  <p className="text-sm">Total Users</p>
                  <Users size={16} className="text-muted-foreground" />
                </div>
              </CardTitle>
              <CardDescription>
                <h2 className="text-xl text-foreground font-bold">66</h2>
                34 % from last month
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </>
    </div>
  );
}
