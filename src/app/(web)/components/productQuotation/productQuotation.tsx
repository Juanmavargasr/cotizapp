"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Separator } from "@/components/ui/separator";

import { useForm } from "react-hook-form";
import { z } from "zod";

import { ProductQuotationTypes } from "./productQuotation.types";

import { steelLine, columns } from "./components/steelTable/columns";
import { DataTable } from "./components/steelTable/steelTable";

function getData(): steelLine[] {
  // Fetch data from your API here.
  return [
    {
      id: "123",
      material: "CR",
      qty: 1,
      partName: "abc",
      length: 1,
      width: 1,
      thickness: "22",
      bend: 4,
      weight: 0,
      area: 0,
    },
  ];
}

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
    .int()
    .gte(0, {
      message: "Galvanized steel price must be at least 4 characters.",
    })
    .lte(2, {
      message: "Galvanized steel price must be max 5 characters.",
    }),
});

const ProductQuotation = ({
  coldRolledPrice,
  stainlessSteelPrice,
  galvanizedSteelPrice,
  paintPrice,
  comercializedRentability,
}: ProductQuotationTypes) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  const data = getData();

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div>
      <div className="flex flex-col w-[800px] m-4 sticky">
        <div className="flex flex-row">
          <div className="w-[25%] flex items-center font-bold text-lg">
            Product Name:
          </div>
          <Input placeholder="Input product name" />
        </div>
        <div className="my-4 flex flex-row justify-between">
          Total price before taxes:
          <strong>$xxxxxxx</strong>
        </div>
      </div>
      <div className="w-[800px] m-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <Accordion type="multiple" className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <strong>Basic Data</strong>
                </AccordionTrigger>
                <AccordionContent>
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
                                defaultValue={coldRolledPrice}
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
                                defaultValue={stainlessSteelPrice}
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
                                defaultValue={galvanizedSteelPrice}
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
                                defaultValue={paintPrice}
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
                                defaultValue={comercializedRentability}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  .
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  <strong>Metalsheet data</strong>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="container mx-auto py-10">
                    <DataTable columns={columns} data={data} />
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  <strong>Other materials data</strong>
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It&apos;s animated by default, but you can disable it if
                  you prefer.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  <strong>labour time</strong>
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It&apos;s animated by default, but you can disable it if
                  you prefer.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  <strong>Summary</strong>
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It&apos;s animated by default, but you can disable it if
                  you prefer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ProductQuotation;
