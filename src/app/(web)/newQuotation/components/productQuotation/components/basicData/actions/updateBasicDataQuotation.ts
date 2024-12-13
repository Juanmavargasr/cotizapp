"use server";

import { db } from "@/server/db";
import { basicDataQuotationTypes } from "@/types/common";

export const updateNewBasicDataQuotation = async (
  data: basicDataQuotationTypes
) => {
  try {
    const updatedBasicDataQuotation = await db.basicdataquotation.updateMany({
      where: {
        productid: data.productid,
      },
      data: {
        coldrolledprice: data.coldRolledPrice,
        stainlesssteelprice: data.stainlessSteelPrice,
        galvanizedsteelprice: data.galvanizedSteelPrice,
        paintprice: data.paintPrice,
        comercializedrentability: data.comercializedRentability,
      },
    });

    if (updatedBasicDataQuotation.count === 0) {
      throw new Error("No records found with the specified productid.");
    }

    return { success: true, data: updatedBasicDataQuotation };
  } catch (err) {
    console.error("Error creating NewBasicDataQuotation: ", err);
    throw new Error("Error creating NewBasicDataQuotation.");
  }
};
