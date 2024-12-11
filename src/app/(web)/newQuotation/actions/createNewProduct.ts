"use server";

import { db } from "@/server/db";
import { getUpdatedBasicData } from "./getBasicData";
import { createNewBasicDataQuotation } from "../components/productQuotation/components/basicData/actions/createBasicDataQuotation";

export const createNewProduct = async (quotationId: number) => {
  try {
    const newProduct = await db.product.create({
      data: {
        subtotalvalueproduct: 0,
        name: "",
        taxvalueproduct: 0,
        finalvalueproduct: 0,
        quotationid: quotationId,
      },
    });

    if (newProduct.id) {
      const updatedBasicDataQuotation = await getUpdatedBasicData();
      const data = {
        coldRolledPrice: updatedBasicDataQuotation.coldrolledprice,
        stainlessSteelPrice: updatedBasicDataQuotation.stainlesssteelprice,
        galvanizedSteelPrice: updatedBasicDataQuotation.galvanizedsteelprice,
        paintPrice: updatedBasicDataQuotation.paintprice,
        comercializedRentability:
          updatedBasicDataQuotation.comercializedrentability,
        productid: newProduct.id,
      };
      const changeData = await createNewBasicDataQuotation(data);
      console.log("*Data:*", changeData);
    }

    return newProduct;
  } catch (err) {
    console.error("Error creating product: ", err);
    throw new Error("Error creating product.");
  }
};
