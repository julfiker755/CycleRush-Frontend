import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Banknote, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { checkoutFormSchema } from "@/schemas/checkout-form-schema";
type FormValues = z.infer<typeof checkoutFormSchema>;

export default function ShippingForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      name: "",
      contact: "",
      address: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="John Doe"
                  className="bg-gray-50"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="contact"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input
                  placeholder="+1 (555) 123-4567"
                  className="bg-gray-50"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Shipping Address</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="123 Main St, Apt 4B, City, State, ZIP"
                  className="bg-gray-50 min-h-24"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="paymentMethod"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Select Payment Method</FormLabel>
              <FormControl>
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    type="button"
                    variant={
                      field.value === "Cash On Delivery" ? "default" : "outline"
                    }
                    onClick={() => field.onChange("Cash On Delivery")}
                  >
                    <Banknote className="h-5 w-5" />
                    Cash On Delivery
                  </Button>
                  <Button
                    type="button"
                    variant={
                      field.value === "Online Payment" ? "default" : "outline"
                    }
                    onClick={() => field.onChange("Online Payment")}
                  >
                    <CreditCard className="h-5 w-5" />
                    Online Payment
                  </Button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full mt-6">
          Place Order
        </Button>
      </form>
    </Form>
  );
}
