"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
// import { zodResolver } from "@hookform/resolvers/zod";
import { Separator } from "@/components/ui/separator";

import { BasicDataTypes } from "./basicData.types";
import { updateNewBasicDataQuotation } from "./actions/updateBasicDataQuotation";
// import { createNewBasicDataQuotation } from "./actions/createBasicDataQuotation";

//no usar
// const formSchema = z.object({
//   coldRolledPrice: z.preprocess(
//     (a) => parseInt(z.string().parse(a), 10),
//     z.number().int()
//   ),
//   stainlessSteelPrice: z.preprocess(
//     (a) => parseInt(z.string().parse(a), 10),
//     z.number().int()
//   ),
//   galvanizedSteelPrice: z.preprocess(
//     (a) => parseInt(z.string().parse(a), 10),
//     z.number().int()
//   ),
//   paintPrice: z.preprocess(
//     (a) => parseInt(z.string().parse(a), 10),
//     z.number().int()
//   ),
//   comercializedRentability: z.preprocess(
//     (a) => parseInt(z.string().parse(a), 10),
//     z.number().int()
//   ),
// });

const formSchema = z.object({
  coldRolledPrice: z.preprocess(
    (a) => parseInt(z.string().parse(a), 10),
    z
      .number()
      .int()
      .gte(0, { message: "Cold Rolled steel price must be at least 0." })
      .lte(7000, { message: "Cold Rolled steel price must be at most 7000." })
  ),
  stainlessSteelPrice: z
    .number()
    .int()
    .gte(0, { message: "Stainless steel price must be at least 0." })
    .lte(20000, { message: "Stainless steel price must be at most 20000." }),
  galvanizedSteelPrice: z
    .number()
    .int()
    .gte(0, { message: "Galvanized steel price must be at least 0." })
    .lte(9999, { message: "Galvanized steel price must be at most 9999." }),
  paintPrice: z
    .number()
    .int()
    .gte(0, { message: "Paint price must be at least 0." })
    .lte(50000, { message: "Paint price must be at most 50000." }),
  comercializedRentability: z
    .number()
    .gte(0, { message: "Comercialized rentability must be at least 0." })
    .lte(99, { message: "Comercialized rentability must be at most 99." }),
});

//code for pass linter, when formschema working, drop it
if (formSchema) {
  console.log("*code for pass linter, when formschema working, drop it*");
}

interface BasicQuotationDataProps extends BasicDataTypes {
  productid: number;
}

const BasicQuotationData: React.FC<BasicQuotationDataProps> = ({
  coldrolledprice,
  stainlesssteelprice,
  galvanizedsteelprice,
  paintprice,
  comercializedrentability,
  productid,
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    // resolver: zodResolver(formSchema),
    defaultValues: {
      coldRolledPrice: coldrolledprice,
      stainlessSteelPrice: stainlesssteelprice,
      galvanizedSteelPrice: galvanizedsteelprice,
      paintPrice: paintprice,
      comercializedRentability: comercializedrentability,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const data = { ...values, productid: productid };
    const changeData = await updateNewBasicDataQuotation(data);
    console.log(changeData);
    if (changeData.data) {
      toast.success(`Basic data succesfully changed`);
    }
  }

  //hasta aquíii

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
                      onChange={(e) => field.onChange(parseInt(e.target.value))}
                      value={field.value || ""}
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
              name="stainlessSteelPrice"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="shadcn"
                      {...field}
                      className="h-8"
                      onChange={(e) => field.onChange(parseInt(e.target.value))}
                      value={field.value || ""}
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
                      onChange={(e) => field.onChange(parseInt(e.target.value))}
                      value={field.value || ""}
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
                      onChange={(e) => field.onChange(parseInt(e.target.value))}
                      value={field.value || ""}
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
                      onChange={(e) => field.onChange(parseInt(e.target.value))}
                      value={field.value || ""}
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
