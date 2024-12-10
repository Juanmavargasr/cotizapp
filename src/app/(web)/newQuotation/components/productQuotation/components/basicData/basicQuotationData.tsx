import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Separator } from "@/components/ui/separator";

import { BasicDataTypes } from "./basicData.types";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  coldRolledPrice: z
    .number()
    .int()
    .gte(4, {
      message: "Cold Rolled steel price must be at least 4 characters.",
    })
    .lte(4, {
      message: "Cold Rolled steel price must be max 5 characters.",
    }),
  stainlessSteelPrice: z
    .number()
    .int()
    .gte(4, {
      message: "Stainless steel price must be at least 4 characters.",
    })
    .lte(5, {
      message: "Stainless steel price must be max 5 characters.",
    }),
  galvanizedSteelPrice: z
    .number()
    .int()
    .gte(4, {
      message: "Galvanized steel price must be at least 4 characters.",
    })
    .lte(5, {
      message: "Galvanized steel price must be max 5 characters.",
    }),
  paintPrice: z
    .number()
    .int()
    .gte(5, {
      message: "Paint price must be at least 5 characters.",
    })
    .lte(5, {
      message: "Paint price must be max 5 characters.",
    }),
  comercializedRentability: z
    .number()
    .gte(0, {
      message: "Comercialized rentability must be at least 0.",
    })
    .lte(2, {
      message: "Comercialized rentability must be less than or equal to 2.",
    }),
});

const BasicQuotationData = ({
  coldrolledprice,
  stainlesssteelprice,
  galvanizedsteelprice,
  paintprice,
  comercializedrentability,
}: BasicDataTypes) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex flex-col items-center">
          <div className="flex flex-row w-[500px]  justify-between items-center">
            <p className="">ColdRolled and HotRolled steel</p>
            <FormField
              control={form.control}
              name="coldRolledPrice"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="shadcn"
                      {...field}
                      className="h-8"
                      defaultValue={coldrolledprice}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Separator className="my-2" />
          <div className="flex flex-row w-[500px]  justify-between items-center">
            <p className="">Stainless steel</p>
            <FormField
              control={form.control}
              name="galvanizedSteelPrice"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="shadcn"
                      {...field}
                      className="h-8"
                      defaultValue={stainlesssteelprice}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Separator className="my-2" />
          <div className="flex flex-row justify-between items-center w-[500px] ">
            <p className="">galvanized steel</p>
            <FormField
              control={form.control}
              name="galvanizedSteelPrice"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="shadcn"
                      {...field}
                      className="h-8"
                      defaultValue={galvanizedsteelprice}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Separator className="my-2" />
          <div className="flex flex-row justify-between items-center w-[500px] ">
            <p className="">Paint kg</p>
            <FormField
              control={form.control}
              name="paintPrice"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="shadcn"
                      {...field}
                      className="h-8"
                      defaultValue={paintprice}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Separator className="my-2" />
          <div className="flex flex-row justify-between items-center w-[500px] ">
            <p className="">Comercialized products rentability %</p>
            <FormField
              control={form.control}
              name="comercializedRentability"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="shadcn"
                      {...field}
                      className="h-8"
                      defaultValue={comercializedrentability * 100}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <Button
            type="submit"
            className="w-[180px] bg-orange-500 hover:bg-orange-800"
          >
            Modify
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default BasicQuotationData;
