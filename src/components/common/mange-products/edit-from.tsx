import { Form } from "@/components/ui/form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Save, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dispatch, SetStateAction } from "react";
import { updateProductFormSchema } from "@/schemas/product-form-schema";
import ProductForm from "@/components/common/mange-products/product-from";
type PropsType = {
  isDialogOpen: boolean;
  setIsDialogOpen: Dispatch<SetStateAction<boolean>>;
  product: any;
};
export default function EditProduct({
  isDialogOpen,
  setIsDialogOpen,
  product,
}: PropsType) {
  const form = useForm<z.infer<typeof updateProductFormSchema>>({
    resolver: zodResolver(updateProductFormSchema),
    defaultValues: {
      name: product.name,
      brand: product.brand,
      price: product.price,
      category: product.category,
      frameMaterial: product.frameMaterial,
      wheelSize: product.wheelSize,
      quantity: product.quantity,
      description: product.description,
    },
  });

  const onSubmit = async (data: z.infer<typeof updateProductFormSchema>) => {
    const productNewData: Omit<any, "_id" | "images" | "specifications"> = {
      brand: data.brand,
      price: data.price,
      category: data.category,
      description: data.description,
      frameMaterial: data.frameMaterial,
      name: data.name,
      quantity: data.quantity,
      wheelSize: data.wheelSize,
    };

    console.log(productNewData);
  };

  const handleCancel = () => {
    setIsDialogOpen(false);
  };
  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogContent className="sm:max-w-[700px] ">
        <DialogHeader>
          <DialogTitle>Update product</DialogTitle>
          <DialogDescription>
            Fill in the details to update "{product.name}" data in your
            inventory.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <ProductForm
              form={form}
              defaultImage="/product-placeholder.png"
              isImageUpload={false}
            />

            {/* Footer */}
            <DialogFooter className="pt-2 flex justify-end gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={handleCancel}
                className="flex items-center gap-1"
              >
                <X size={16} />
                Cancel
              </Button>
              <Button type="submit" className="flex items-center gap-1">
                <Save size={16} />
                Update Bicycle
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
