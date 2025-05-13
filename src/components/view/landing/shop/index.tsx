import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SearchItems from "@/components/search-items";
import { mainItem } from "@/components/dummy-data/data";
import ShopFilterPanel from "@/components/common/shop/shop-filter-sheet";
import ProductCard from "@/components/common/shop/product-card";

export default function Shop() {
  const handleNameSorting = (value: string) => {
    console.log(value);
  };

  return (
    <section className="py-8 flex gap-6">
      <div className="hidden md:block w-64 shrink-0 relative">
        <Card className="sticky top-24">
          <CardContent className="px-4">
            <h2 className="text-lg font-semibold mb-6">Filters</h2>
            <ShopFilterPanel />
          </CardContent>
        </Card>
      </div>

      {/* Active filters */}

      <div className="relative w-full">
        {/* Desktop Filters Sidebar */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8 sticky top-16 pt-8 -mt-8 z-20 bg-background pb-2">
          <div className="flex w-full gap-5 justify-between">
            <div className="w-full max-w-96">
              <SearchItems placeholder="Search Products..." />
            </div>

            <Select onValueChange={handleNameSorting}>
              <SelectTrigger className="overflow-hidden w-32 sm:w-40">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">Featured</SelectItem>
                <SelectItem value="price">Price: Low to High</SelectItem>
                <SelectItem value="-price">Price: High to Low</SelectItem>
                <SelectItem value="name">Name: A-Z</SelectItem>
                <SelectItem value="-name">Name: Z-A</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {mainItem.map((product: any) => (
              <motion.div
                key={product._id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
