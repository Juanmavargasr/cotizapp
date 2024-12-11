"use server";

import { db } from "@/server/db";
import { basicDataQuotationTypes } from "@/types/common";

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
