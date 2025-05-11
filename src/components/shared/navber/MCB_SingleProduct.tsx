import { Button } from "@/components/ui/button";
import { MinusIcon, PlusIcon, Trash2Icon } from "lucide-react";

export default function MCB_SingleProduct({ product }: any) {
  return (
    <li className="py-4 relative">
      {/* // isLoading && <Skeleton className="absolute w-full h-full z-10" /> */}
      <div className="flex items-start gap-4">
        <div className="h-16 w-16 bg-gray-100 rounded overflow-hidden flex-shrink-0">
          <img
            src={product?.images[0]}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-medium truncate">{product.name}</h4>
          <p className="text-xs text-gray-500">{product.brand}</p>
          <div className="mt-1 flex items-center justify-between">
            <p className="text-sm font-medium">৳{product.price}</p>
            <div className="flex items-center space-x-1">
              <Button variant="outline" size="icon" className="h-6 w-6">
                <MinusIcon className="h-3 w-3" />
              </Button>
              <span className="w-6 text-center text-sm">1</span>
              <Button variant="outline" size="icon" className="h-6 w-6">
                <PlusIcon className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-400 hover:text-red-500"
        >
          <Trash2Icon className="h-4 w-4" />
        </Button>
      </div>
    </li>
  );
}
