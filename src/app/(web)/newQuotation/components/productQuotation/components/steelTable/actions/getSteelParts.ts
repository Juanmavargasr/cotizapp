"use server";

import { db } from "@/server/db";

export const getSteelParts = async (productid: number) => {
  console.log("************:", productid);
  if (!productid) {
    throw new Error("productid is necessary for get steel parts");
  }

  try {
    const steelParts = await db.steelpart.findMany({
      where: {
        productid: productid,
      },
    });
    console.log("***********", steelParts);
    if (!steelParts) {
      throw new Error(`Error getting steel parts for product ${productid}`);
    }
    return { succes: true, data: steelParts };
  } catch (error) {
    console.error(`Error getting steel parts for product ${productid}:`, error);
  }
};
