import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Profile() {
  // if (isLoading) {
  //   return (
  //     <Card className="w-full max-w-4xl mx-auto ">
  //       <CardHeader>
  //         <Skeleton className="h-8 w-48" />
  //         <Skeleton className="h-4 w-32" />
  //       </CardHeader>
  //       <CardContent className="space-y-6">
  //         <div className="flex items-center space-x-4">
  //           <Skeleton className="h-20 w-20 rounded-full" />
  //           <div className="space-y-2">
  //             <Skeleton className="h-4 w-32" />
  //             <Skeleton className="h-4 w-48" />
  //           </div>
  //         </div>
  //         <div className="space-y-4">
  //           {[1, 2, 3, 4].map((i) => (
  //             <div key={i} className="space-y-2">
  //               <Skeleton className="h-4 w-24" />
  //               <Skeleton className="h-10 w-full" />
  //             </div>
  //           ))}
  //         </div>
  //       </CardContent>
  //     </Card>
  //   );
  // }

  // if (isError) {
  //   return (
  //     <Card className="w-full max-w-3xl mx-auto">
  //       <CardHeader>
  //         <CardTitle>Error</CardTitle>
  //       </CardHeader>
  //       <CardContent>
  //         <p className="text-red-500">
  //           Failed to load profile data. Please try again later.
  //         </p>
  //       </CardContent>
  //       <CardFooter>
  //         <Button onClick={() => window.location.reload()}>Retry</Button>
  //       </CardFooter>
  //     </Card>
  //   );
  // }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-2xl font-bold">User Profile</CardTitle>
          <CardDescription>Manage your account information</CardDescription>
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-6">
            <Avatar className="w-24 h-24">
              <AvatarImage
                className="object-cover"
                src={"/default-user.png"}
                alt={"userData.name"}
              />
              <AvatarFallback>Julfiker Islam</AvatarFallback>
            </Avatar>

            <div className="flex-1">
              <h3 className="text-2xl font-semibold">Julfiker </h3>
              <div className="flex items-center gap-2 mt-1">
                <Badge variant="outline" className="capitalize">
                  Customer
                </Badge>
                <span className="text-sm text-muted-foreground">
                  Julfiker755.bd@gmail.com
                </span>
              </div>

              <div className="mt-6 space-y-4">
                <div>
                  <span className="text-sm font-medium text-muted-foreground">
                    Contact Number
                  </span>
                  <p>01741705755</p>
                </div>

                <div>
                  <span className="text-sm font-medium text-muted-foreground">
                    Address
                  </span>
                  <p>Khansama,dinajpur</p>
                </div>

                <div>
                  <span className="text-sm font-medium text-muted-foreground">
                    Account Status
                  </span>
                  <p>
                    {/* <Badge variant="destructive">Blocked</Badge> */}
                    <Badge variant="default" className="bg-green-500">
                      Active
                    </Badge>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
