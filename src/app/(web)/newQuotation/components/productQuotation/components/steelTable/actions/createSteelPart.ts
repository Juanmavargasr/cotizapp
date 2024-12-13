"use server";

import { db } from "@/server/db";
import { steelPartType } from "@/types/common";
import { calculatePartArea } from "@/utils/calculatePartArea";
import { calculatePartWeight } from "@/utils/calculatePartWeight";

export const createNewBasicDataQuotation = async (
  data: basicDataQuotationTypes
) => {
  console.log("******DATAAA: ", data);
  try {
    const newBasicDataQuotation = await db.basicdataquotation.create({
      data: {
        coldrolledprice: data.coldRolledPrice,
        stainlesssteelprice: data.stainlessSteelPrice,
        galvanizedsteelprice: data.galvanizedSteelPrice,
        paintprice: data.paintPrice,
        comercializedrentability: data.comercializedRentability,
        productid: data.productid,
      },
    });
    return { success: true, data: newBasicDataQuotation };
  } catch (err) {
    console.error("Error creating NewBasicDataQuotation: ", err);
    throw new Error("Error creating NewBasicDataQuotation.");
  }
};

export const createSteelPart = async (data: steelPartType) => {
  try {
    const createNewSteelPart = await db.steelpart.create({
      data: {
        partName: data.partName,
        length: data.length,
        width: data.width,
        qty: data.qty,
        thickness: data.thickness,
        bend: data.bend,
        weight:
          calculatePartWeight(data.width, data.length, data.thickness) || 0,
        area: calculatePartArea(data.width, data.length),
        productid: data.productid,
      },
    });

    return createNewSteelPart;
  } catch (err) {
    console.error("Error creating steel part", err);
    throw new Error("Error creating steel part");
  }
};
