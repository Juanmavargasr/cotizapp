import { useForm } from "react-hook-form";
import { z } from "zod";

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

import { steelLineSchema } from "./columns";

const SteelTable = () => {
  const form = useForm<z.infer<typeof steelLineSchema>>({
    resolver: zodResolver(steelLineSchema),
  });

  function onSubmit(values: z.infer<typeof steelLineSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <p>Part name</p>
            <Input />
          </div>
          <div className="flex flex-row jus">
            <div className="flex flex-col w-[50%]">
              <div className="flex flex-row">
                {" "}
                <p>material</p>
                <FormField
                  control={form.control}
                  name="material"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="shadcn"
                          {...field}
                          className="h-8"
                          defaultValue={"aaaa"}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex flex-row">
                {" "}
                <p>length</p>
                <Input />
              </div>
              <div className="flex flex-row">
                {" "}
                <p>width</p>
                <Input />
              </div>
            </div>
            <div className="flex flex-col w-[50%]">
              <div className="flex flex-row">
                {" "}
                <p>qty</p>
                <Input />
              </div>
              <div className="flex flex-row">
                {" "}
                <p>thickness</p>
                <Input />
              </div>
              <div className="flex flex-row">
                {" "}
                <p>bend</p>
                <Input />
              </div>
            </div>
          </div>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default SteelTable;
