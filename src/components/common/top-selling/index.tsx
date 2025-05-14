import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Heart } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { mainItem } from "@/components/dummy-data/data";
import Heading from "@/components/reusable/heading";

export default function TopSelling() {
  return (
    <section className="w-full py-8">
      <div className="flex justify-between items-end relative">
        <Heading
          title="Premium Performance "
          highlight="Bicycles"
          text="Discover premium bicycles engineered for performance, comfort, and
            style"
        />

        <div className="space-x-2 relative flex">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full button-prev hover:bg-primary hover:text-white"
          >
            <ArrowLeft />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full button-next hover:bg-primary hover:text-white"
          >
            <ArrowRight />
          </Button>
        </div>
      </div>

      <div className="relative mt-8">
        <Swiper
          modules={[Navigation]}
          navigation={{ nextEl: ".button-next", prevEl: ".button-prev" }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {mainItem?.map((bike, idx) => (
            <SwiperSlide key={idx}>
              <Card className="group p-0 relative overflow-hidden border bg-background shadow-sm transition-all duration-300">
                <CardContent className="p-4">
                  <div className="relative h-[170px] rounded-xl overflow-hidden">
                    <img
                      src={bike.images[0]}
                      alt={bike.name}
                      className="h-full w-full object-cover transition-transform duration-300"
                    />
                  </div>
                  <div className="mt-4  space-y-1">
                    <p className="text-lg font-semibold text-foreground truncate">
                      {bike.name}
                    </p>
                    <p className="text-sm">Brand: {bike.brand}</p>
                    <p className="text-sm">Price: {bike.price}</p>
                  </div>
                  <div className="flex justify-between gap-2 mt-2">
                    <Button
                      variant="outline"
                      className="flex items-center gap-2 hover:bg-accent hover:text-accent-foreground"
                    >
                      Add To Cart
                    </Button>
                    <Button
                      variant="outline"
                      className="flex items-center gap-2 hover:bg-accent hover:text-accent-foreground"
                    >
                      <Link to={`/product-details/1`}>View</Link>
                    </Button>
                  </div>
                </CardContent>

                <button className="absolute top-3 right-3 z-10 rounded-full bg-white/80 p-1.5">
                  <Heart size={18} />
                </button>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* View All Link */}
        <div className="text-center mt-8">
          <Link
            to={"/shop"}
            className="text-sm hover:text-primary cursor-pointer hover:underline font-semibold"
          >
            SEE ALL BIKES
          </Link>
        </div>
      </div>
    </section>
  );
}
