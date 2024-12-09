"use client";

import { useEffect, useState } from "react";

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
import SummaryTable from "./components/summary/summaryTable";
import { getUpdatedBasicData } from "../../actions/getBasicData";
import { BasicDataTypes } from "./components/basicData/basicData.types";

const ProductQuotation = () => {
  const [basicData, setBasicData] = useState<BasicDataTypes | null>(null);

  useEffect(() => {
    const fetchBasicData = async () => {
      const data = await getUpdatedBasicData();
      // console.log("*******************************", data);
      setBasicData(data);
    };
    fetchBasicData();
  }, []);

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
                coldRolledPrice={basicData?.coldRolledPrice || 0}
                stainlessSteelPrice={basicData?.stainlessSteelPrice || 0}
                galvanizedSteelPrice={basicData?.galvanizedSteelPrice || 0}
                paintPrice={basicData?.paintPrice || 0}
                comercializedRentability={
                  basicData?.comercializedRentability || 0
                }
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
              <SummaryTable />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default ProductQuotation;
