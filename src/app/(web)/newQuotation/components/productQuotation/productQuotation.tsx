"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";

import SteelTable from "./components/steelTable/steelTable";
import BasicQuotationData from "./components/basicData/basicQuotationData";
import LabourTime from "./components/labourTime/labourTime";
import OtherMaterialsData from "./components/otherMaterials/otherMaterialsTable";

const ProductQuotation = () => {
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
        <Accordion type="multiple" className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <strong>Basic Data</strong>
            </AccordionTrigger>
            <AccordionContent>
              <BasicQuotationData
                coldRolledPrice={4000}
                stainlessSteelPrice={13000}
                galvanizedSteelPrice={7000}
                paintPrice={23000}
                comercializedRentability={25}
              />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <strong>Metalsheet data</strong>
            </AccordionTrigger>
            <AccordionContent>
              <div className="container mx-auto py-10">
                <SteelTable />
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              <strong>Other materials data</strong>
            </AccordionTrigger>
            <AccordionContent>
              <OtherMaterialsData />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              <strong>labour time</strong>
            </AccordionTrigger>
            <AccordionContent>
              <LabourTime />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              <strong>Summary</strong>
            </AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default ProductQuotation;
