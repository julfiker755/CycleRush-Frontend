import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { useState } from "react";

export default function WishlistBtn() {
  const [isWIshlist, setIsWishlist] = useState(false);

  return (
    <Button
      onClick={() => setIsWishlist(!isWIshlist)}
      variant="ghost"
      size="sm"
      className="flex items-center gap-2"
    >
      {isWIshlist ? (
        <Heart className="fill-red-500 text-red-500" size={18} />
      ) : (
        <Heart size={18} />
      )}

      <span>Wishlist</span>
    </Button>
  );
}
