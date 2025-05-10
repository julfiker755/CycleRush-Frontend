import Categories from "@/components/common/categories";
import HeroSec from "@/components/common/hero-sec";
import BestSellingProducts from "@/components/modules/home/BestSellingProducts";
import FeedBack from "@/components/modules/home/FeedBack";
import FollowUs from "@/components/modules/home/FollowUs";
import WhereToWork from "@/components/modules/home/WhereToWork";
import WhyRideWithUs from "@/components/modules/home/WhyRideWithUs";

export default function Home() {
  return (
    <div>
      <HeroSec />
      <Categories />
      <BestSellingProducts />
      <WhyRideWithUs />
      <WhereToWork />
      <div className="py-8">
        {" "}
        <FeedBack />
      </div>
      <FollowUs />
    </div>
  );
}
