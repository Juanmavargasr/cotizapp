"use server";

import { db } from "@/server/db";

export const getBasicDataQuotation = async (productId: number) => {
  if (!productId) {
    throw new Error("productId is required");
  }
  try {
    const dataBasicDataQuotation = await db.basicdataquotation.findFirst({
      where: {
        productid: productId,
      },
    });

    if (dataBasicDataQuotation) {
      return { success: true, data: dataBasicDataQuotation };
    } else {
      return { success: false, error: "No data quotation" };
    }
  } catch (err) {
    console.error("Error creating NewBasicDataQuotation: ", err);
    throw new Error("Error creating NewBasicDataQuotation.");
  }
};
