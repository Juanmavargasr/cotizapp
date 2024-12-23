import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

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
          <div className="flex flex-row justify-center gap-4">
            <p className="flex items-center">Part name</p>
            <Input className="w-[400px]" />
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
                        <Select {...field}>
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
                        <Select {...field}>
                          <SelectTrigger className="w-[180px] h-8">
                            <SelectValue placeholder="Select a material" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Material</SelectLabel>
                              <SelectItem value="24">24</SelectItem>
                              <SelectItem value="22">22</SelectItem>
                              <SelectItem value="20">20</SelectItem>
                              <SelectItem value="18">18</SelectItem>
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
