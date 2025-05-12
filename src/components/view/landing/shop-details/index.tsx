import ImageSlider from "@/components/common/shop/image-slider";
import RightSideDetails from "@/components/common/shop/shop-right";
import { imgs } from "@/components/dummy-data/data";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();
  console.log(id);

  return (
    <section className="py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ImageSlider images={imgs} id="12345" />
        <RightSideDetails />
      </div>
    </section>
  );
}
