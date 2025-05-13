import { Button } from "@/components/ui/button";
import { IProduct } from "@/types";
import {
  Pencil,
  Trash,
  MoreHorizontal,
  GalleryVerticalEnd,
} from "lucide-react";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TableCell, TableRow } from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import ProductGallery from "@/components/common/mange-products/product-gallery";
import EditProduct from "@/components/common/mange-products/edit-from";
export default function MSingleProduct({ product }: { product: IProduct }) {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const handleDeleteProduct = async () => {
    console.log("delte id");
  };

  return (
    <>
      <TableRow>
        <TableCell>
          <Avatar className="h-10 w-10  object-cover rounded-lg">
            <AvatarImage
              src={product.images[0] || "/product-placeholder.png"}
              alt="product"
              className="object-cover"
            />
            <AvatarFallback>
              {product.name.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </TableCell>
        <TableCell className="font-medium">{product.name}</TableCell>
        <TableCell>{product.category}</TableCell>
        <TableCell>৳{product.price}</TableCell>
        <TableCell>{product.quantity}</TableCell>
        <TableCell>{/* <MO_StatusBadge quantity={6} /> */} 44</TableCell>
        <TableCell className="text-right">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-4 w-4" />
                <span className="sr-only">Open menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {/* <DropdownMenuItem className="cursor-pointer" onClick={() => { }}>
                <Eye className="mr-2 h-4 w-4" />
                View Details
              </DropdownMenuItem> */}
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => {
                  setTimeout(() => {
                    setGalleryOpen(true);
                  }, 50);
                }}
              >
                <GalleryVerticalEnd className="mr-2 h-4 w-4" />
                Gallery
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => {
                  setTimeout(() => {
                    setIsEditOpen(true);
                  }, 50); // ⏱ slight delay lets the dropdown fully close
                }}
              >
                <Pencil className="mr-2 h-4 w-4" />
                Edit Product
              </DropdownMenuItem>

              <DropdownMenuItem
                className="cursor-pointer text-primary"
                onClick={() => {
                  setTimeout(() => {
                    setIsDeleteDialogOpen(true);
                  }, 50); // ⏱ slight delay lets the dropdown fully close
                }}
              >
                <Trash className="mr-2 h-4 w-4" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </TableCell>
      </TableRow>
      <AlertDialog
        open={isDeleteDialogOpen}
        onOpenChange={setIsDeleteDialogOpen}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the
              product: <span className="font-semibold">{product.name}</span>.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteProduct}>
              Yes,Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <EditProduct
        isDialogOpen={isEditOpen}
        setIsDialogOpen={setIsEditOpen}
        product={product}
      />
      <ProductGallery
        isDialogOpen={galleryOpen}
        setIsDialogOpen={setGalleryOpen}
        images={product.images}
        productId={product._id}
      />
    </>
  );
}
