import { categoryItem } from "@/components/dummy-data";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function Categories() {
  return (
    <section className="py-8 md:py-12 space-y-6">
      <div className="mb-10 text-center max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-1">
          Find Your Perfect <span className="text-primary">Ride</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Discover premium bicycles engineered for performance, comfort, and
          style
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {categoryItem.map((item, index) => (
          <Link key={index} to={`/shop?category=${item.id}`}>
            <Card className="h-full cursor-pointer transition-shadow duration-300 dark:shadow-white/20 py-2 sm:py-4 overflow-hidden group">
              <CardContent className="flex flex-col items-center justify-center py-4 sm:py-6 text-center">
                <div className="mb-3 text-primary">
                  {<item.icon className="size-6 sm:size-8" />}
                </div>
                <span className="text-base sm:text-lg font-semibold">
                  {item.title}
                </span>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground  transition-opacity duration-300">
                  {item.text}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
