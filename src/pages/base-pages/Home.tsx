import Categories from "@/components/common/home/categories";
import Customers from "@/components/common/home/customer";
import FollowUs from "@/components/common/home/FollowUs";
import HeroSec from "@/components/common/home/hero-sec";
import TopSelling from "@/components/common/home/top-selling";
import WhereWork from "@/components/common/home/whre-to";
import WhyRideWithUs from "@/components/common/home/why-us";

export default function Home() {
  return (
    <>
      <HeroSec />
      <Categories />
      <TopSelling />
      <WhyRideWithUs />
      <WhereWork />
      <Customers />
      <FollowUs />
    </>
  );
}
