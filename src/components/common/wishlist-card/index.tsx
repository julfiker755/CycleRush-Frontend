import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { SquareChartGantt, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function WishlistCard({ product }: any) {
  return (
    <TableRow className="relative">
      <TableCell>
        <div className="flex items-center space-x-4 relative">
          <div className="w-16 h-16 bg-gray-100 rounded overflow-hidden">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-medium text-sm">{product.name}</h3>
            <p className="text-xs text-gray-500">{product.brand}</p>
          </div>
        </div>
      </TableCell>
      <TableCell>
        <p>{product.category}</p>
      </TableCell>
      <TableCell>
        <p>{product.price}</p>
      </TableCell>
      <TableCell>{product.frameMaterial}</TableCell>
      <TableCell>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant={"ghost"} size={"icon"}>
                <X />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-xs">Remove from wishlist</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link to={`/product-details/${product._id}`}>
                {" "}
                <Button variant={"outline"} size={"icon"}>
                  <SquareChartGantt />
                </Button>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-xs">Details</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </TableCell>
    </TableRow>
  );
}
