import SearchItems from "@/components/search-items";
import { order_status } from "@/constant/order.const";
import {
  ChevronDown,
  ChevronsUpDown,
  ChevronUp,
  SquareChartGantt,
} from "lucide-react";
import { useSearchParams } from "react-router-dom";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Item } from "@/components/dummy-data/data";
import SingleOrder from "@/components/common/mange-order/single-card";

export default function ManageOrders() {
  const [searchParams, setSearchParams] = useSearchParams();
  const sort = searchParams.get("sort") || "";
  const statusFilter = searchParams.get("status") || "";
  const handleSorting = (field: string) => {
    if (!field) {
      searchParams.delete("sort");
    } else {
      searchParams.set("sort", field);
    }
    setSearchParams(searchParams);
  };
  const handleFilterStatus = (
    status: (typeof order_status)[number] | "all"
  ) => {
    if (status === "all") {
      searchParams.delete("status");
    } else {
      searchParams.set("status", status);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="container mx-auto py-6 space-y-6">
      {/* Top header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <SquareChartGantt className="h-6 w-6" />
          <h1 className="text-2xl font-bold">Manage Orders</h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SearchItems placeholder="Search Orders..." />
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[80px]">No.</TableHead>
            <TableHead className="cursor-pointer">Contact Details</TableHead>
            <TableHead className="cursor-pointer">Payment Details</TableHead>
            <TableHead className="cursor-pointer">Total Price</TableHead>
            <TableHead>
              <DropdownMenu>
                <DropdownMenuTrigger className="w-full cursor-pointer">
                  <div className="flex gap-2 items-center justify-between">
                    Status <ChevronsUpDown size={16} />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Status</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    className="cursor-pointer"
                    onClick={() => handleFilterStatus("all")}
                  >
                    All
                  </DropdownMenuItem>
                  {order_status.map((item) => (
                    <DropdownMenuItem
                      className={`cursor-pointer ${
                        item === statusFilter && "bg-accent"
                      }`}
                      onClick={() => handleFilterStatus(item)}
                      key={item}
                    >
                      {item.charAt(0).toUpperCase() +
                        item.slice(1).toLowerCase()}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </TableHead>

            <TableHead>
              <div
                onClick={() =>
                  handleSorting(
                    sort === "createdAt"
                      ? "-createdAt"
                      : sort === "-createdAt"
                      ? ""
                      : "createdAt"
                  )
                }
                className="flex gap-2 items-center justify-between cursor-pointer"
              >
                Ordered At
                {sort === "createdAt" && <ChevronUp size={16} />}
                {sort === "-createdAt" && <ChevronDown size={16} />}
                {sort !== "createdAt" && sort !== "-createdAt" && (
                  <ChevronsUpDown size={16} />
                )}
              </div>
            </TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Item.map((order: any, idx) => (
            <SingleOrder key={order._id} order={order} index={idx + 1} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
