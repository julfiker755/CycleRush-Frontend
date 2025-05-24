import ImageSlider from "@/components/common/shop/image-slider";
import RightSideDetails from "@/components/common/shop/shop-right";
import { useSingleProductQuery } from "@/redux/api/productApi";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();
  const { data } = useSingleProductQuery(id as string);

  return (
    <section className="py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ImageSlider
          images={data?.images || []}
          des={data?.description}
          id="12345"
        />
        <RightSideDetails product={data} />
      </div>
    </section>
  );
}
