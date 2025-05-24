import { Expand } from "lucide-react";
import { useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import InnerImageZoom from "react-inner-image-zoom";
import { Button } from "@/components/ui/button";

const ImageSlider = ({
  images,
  des,
}: {
  images: string[];
  des: any;
  id?: string;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div>
      {/* slider section */}
      <div className="relative">
        <div className="relative w-full max-w-3xl mx-auto border rounded-md">
          {/* Slide Image */}
          <PhotoProvider>
            <div className="overflow-hidden relative rounded-lg flex sliderParent">
              <div className="absolute right-2 bottom-2 z-10 flex gap-2">
                <PhotoView src={images[currentIndex]}>
                  <Button
                    size={"icon"}
                    className=" bg-muted-foreground  text-accent hover:bg-muted-foreground"
                  >
                    <Expand className="cursor-pointer size-5" />
                  </Button>
                </PhotoView>
              </div>
              <div
                className="flex transition-transform ease-in-out duration-700  w-full aspect-[5/3]"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {images.map((slide, index) => (
                  <PhotoView key={index} src={slide}>
                    <div className="w-full flex-shrink-0 h-full flex justify-center items-center">
                      <InnerImageZoom
                        src={slide}
                        zoomType="hover"
                        zoomScale={1.5}
                        className="w-full"
                        // alt={`Slide ${currentIndex + 1}`}
                      />
                    </div>
                  </PhotoView>
                ))}
              </div>
            </div>
          </PhotoProvider>
          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 rounded-full ${
                  currentIndex === index ? "bg-gray-800" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 py-3 items-center justify-center">
          {images.map((item, idx) => (
            <div
              onClick={() => setCurrentIndex(idx)}
              className={`border-2 transition-all cursor-pointer duration-300 ${
                idx === currentIndex ? " border-primary" : "border-transparent"
              } p-1 rounded-md`}
              key={idx}
            >
              <img
                className="w-16 sm:w-20 aspect-[5/3]  object-cover rounded-sm"
                src={item}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
      {/* Product Description */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1 h-6 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>
          <h3 className="text-lg font-semibold">Product Details</h3>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-3  dark:border-gray-700">
          <p
            className="text-muted-foreground leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: des?.replace(/\n/g, "<br>"),
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
