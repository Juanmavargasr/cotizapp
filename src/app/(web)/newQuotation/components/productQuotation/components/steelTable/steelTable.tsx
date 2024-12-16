"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  // FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { steelLineSchema } from "./columns";
import { createSteelPart } from "./actions/createSteelPart";
import { steelPartType } from "@/types/common";
import { useEffect, useState } from "react";
import { getSteelParts } from "./actions/getSteelParts";

type steelTableProps = {
  productid: number;
};

const SteelTable = ({ productid }: steelTableProps) => {
  const form = useForm<z.infer<typeof steelLineSchema>>({
    resolver: zodResolver(steelLineSchema),
  });

  const [steelParts, setSteelParts] = useState<steelPartType[]>([]);

  // ojo, está haciendo el fetch con cada renderización y debe hacerlo solo al cargar la primera vez el producto
  useEffect(() => {
    const findSteelParts = async (productid: number) => {
      const foundSteelParts = await getSteelParts(productid);
      if (foundSteelParts) {
        setSteelParts(foundSteelParts.data);
      }
    };

    findSteelParts(productid);
  }, [productid]);

  async function onSubmit(values: z.infer<typeof steelLineSchema>) {
    const data = { ...values, productid: productid };

    const steelPartCreated = await createSteelPart(data);

    if (!steelPartCreated.success) {
      toast.error("Error creating steel part");
      throw new Error("Error creating steel part");
    }

    toast.success("melotoconcito");
    steelParts.push(steelPartCreated.data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex flex-col">
          <div className="flex flex-row justify-center gap-4">
            <p className="flex items-center">Part name</p>
            <FormField
              control={form.control}
              name="partName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Enter part name"
                      {...field}
                      className="h-8 w-[400px]"
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-row mt-4 w-full p-4">
            <div className="flex flex-col w-[50%] gap-4">
              <div className="flex flex-row gap-4">
                {" "}
                <p className="w-[90px]">material</p>
                <FormField
                  control={form.control}
                  name="material"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        {/* <Input
                          placeholder="shadcn"
                          {...field}
                          className="h-8"
                          defaultValue={"aaaa"}
                        /> */}
                        <Select
                          {...field}
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger className="w-[180px] h-8">
                            <SelectValue placeholder="Select a material" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Material</SelectLabel>
                              <SelectItem value="CR">CR</SelectItem>
                              <SelectItem value="INOX">INOX</SelectItem>
                              <SelectItem value="GV">GALVANIZED</SelectItem>
                              <SelectItem value="PAINT">PAINT</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex flex-row gap-4">
                {" "}
                <p className="w-[90px]">length</p>
                <FormField
                  control={form.control}
                  name="length"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="choose a length"
                          {...field}
                          className="h-8 w-[180px]"
                          value={field.value || ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex flex-row  gap-4">
                {" "}
                <p className="w-[90px]">width</p>
                <FormField
                  control={form.control}
                  name="width"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="choose a width"
                          {...field}
                          className="h-8 w-[180px]"
                          value={field.value || ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="flex flex-col w-[50%] gap-4">
              <div className="flex flex-row gap-4">
                {" "}
                <p className="w-[90px]">qty</p>
                <FormField
                  control={form.control}
                  name="qty"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="choose a qty"
                          {...field}
                          className="h-8 w-[180px]"
                          value={field.value || ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex flex-row gap-4">
                {" "}
                <p className="w-[90px]">thickness</p>
                <FormField
                  control={form.control}
                  name="thickness"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Select
                          {...field}
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger className="w-[180px] h-8">
                            <SelectValue placeholder="Select a material" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Thickness</SelectLabel>
                              <SelectItem value="24">24</SelectItem>
                              <SelectItem value="22">22</SelectItem>
                              <SelectItem value="20">20</SelectItem>
                              <SelectItem value="18">18</SelectItem>
                              <SelectItem value="16">16</SelectItem>
                              <SelectItem value="14">14</SelectItem>
                              <SelectItem value="12">12</SelectItem>
                              <SelectItem value="1/8">1/8</SelectItem>
                              <SelectItem value="3/16">3/16</SelectItem>
                              <SelectItem value="1/4">1/4</SelectItem>
                              <SelectItem value="5/16">5/16</SelectItem>
                              <SelectItem value="3/8">3/8</SelectItem>
                              <SelectItem value="1/2">1/2</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex flex-row gap-4">
                {" "}
                <p className="w-[90px]">bend</p>
                <FormField
                  control={form.control}
                  name="bend"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="choose a bend qty"
                          {...field}
                          className="h-8 w-[180px]"
                          value={field.value || ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Button
            type="submit"
            className="w-[180px] bg-green-600 hover:bg-green-800"
          >
            Add
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default SteelTable;
