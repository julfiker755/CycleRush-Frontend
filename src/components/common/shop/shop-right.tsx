import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import WishlistBtn from "@/components/common/wish-btn";
import ShareIcon from "@/components/reusable/social-icon";
import {
  ShoppingCart,
  Star,
  Zap,
  Shield,
  Truck,
  Info,
  Share2,
} from "lucide-react";

const ProductCard = ({ product }: { product: any }) => {
  const isInStock = product?.inStock > 0;

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Main Product Card */}
      <div className="overflow-hidden  border border-gray-200 dark:border-0  bg-white dark:bg-gray-900 rounded-2xl">
        {/* Product Header Section */}
        <div className="relative bg-gray-50 dark:bg-gray-900 p-5 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-start justify-between">
            <div className="flex-1 space-y-6">
              {/* Category Section */}
              <div className="flex items-center gap-3">
                <Badge className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700 px-3 py-0 rounded-xl text-sm font-medium">
                  {product?.category}
                </Badge>
              </div>

              {/* Product Title */}
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-3">
                  {product?.name}
                </h1>
                <div className="flex items-center flex-wrap gap-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <p className="text-gray-600 dark:text-gray-300 text-lg font-medium">
                      {product?.brand}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <Star className="w-4 h-4 text-gray-300 dark:text-gray-600" />
                    <span className="text-gray-500 dark:text-gray-400 text-sm ml-1">
                      (4.2)
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <WishlistBtn id={product?._id} />
          </div>
        </div>

        <CardContent className="p-0">
          {/* Quick Stats */}
          <div className="grid grid-cols-3 divide-x divide-gray-200 dark:divide-gray-700 bg-gray-50 dark:bg-gray-800/50">
            <div className="p-4 text-center">
              <Zap className="w-5 h-5 text-blue-600 mx-auto mb-1" />
              <p className="text-xs text-muted-foreground">Frame</p>
              <p className="font-semibold text-sm">{product?.frameMaterial}</p>
            </div>
            <div className="p-4 text-center">
              <Shield className="w-5 h-5 text-green-600 mx-auto mb-1" />
              <p className="text-xs text-muted-foreground">Wheels</p>
              <p className="font-semibold text-sm">{product?.wheelSize}"</p>
            </div>
            <div className="p-4 text-center">
              <Truck className="w-5 h-5 text-orange-600 mx-auto mb-1" />
              <p className="text-xs text-muted-foreground">Stock</p>
              <p
                className={`font-semibold text-sm ${
                  isInStock ? "text-green-600" : "text-red-600"
                }`}
              >
                {isInStock ? product.inStock : "Out"}
              </p>
            </div>
          </div>

          {/* Availability Banner */}
          <div
            className={`p-4 ${
              isInStock
                ? "bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20"
                : "bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20"
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  isInStock
                    ? "bg-green-100 dark:bg-green-800"
                    : "bg-red-100 dark:bg-red-800"
                }`}
              >
                {isInStock ? (
                  <ShoppingCart className="w-5 h-5 text-green-600 dark:text-green-300" />
                ) : (
                  <Info className="w-5 h-5 text-red-600 dark:text-red-300" />
                )}
              </div>
              <div>
                <p
                  className={`font-semibold ${
                    isInStock
                      ? "text-green-800 dark:text-green-300"
                      : "text-red-800 dark:text-red-300"
                  }`}
                >
                  {isInStock
                    ? `${product.inStock} Units Available`
                    : "Currently Out of Stock"}
                </p>
                <p
                  className={`text-sm ${
                    isInStock
                      ? "text-green-600 dark:text-green-400"
                      : "text-red-600 dark:text-red-400"
                  }`}
                >
                  {isInStock
                    ? "Ready for immediate shipping"
                    : "Notify when available"}
                </p>
              </div>
            </div>
          </div>

          {/* Action Section */}
          <div className="p-6 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-wrap  items-center justify-between">
              <div className="flex items-center mb-3 lg:mb-0  gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <Share2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Share Product</p>
                  <p className="text-xs text-muted-foreground">
                    Let others know about this
                  </p>
                </div>
              </div>
              <ShareIcon />
            </div>
          </div>
        </CardContent>
      </div>

      {/* Additional Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <Card className="p-4 border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-100 dark:bg-blue-800 rounded-lg flex items-center justify-center">
              <Truck className="w-4 h-4 text-blue-600 dark:text-blue-300" />
            </div>
            <div>
              <p className="font-semibold text-sm">Free Shipping</p>
              <p className="text-xs text-muted-foreground">
                On orders over ৳2000
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-4 border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-green-100 dark:bg-green-800 rounded-lg flex items-center justify-center">
              <Shield className="w-4 h-4 text-green-600 dark:text-green-300" />
            </div>
            <div>
              <p className="font-semibold text-sm">1 Year Warranty</p>
              <p className="text-xs text-muted-foreground">
                Manufacturer guarantee
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProductCard;
