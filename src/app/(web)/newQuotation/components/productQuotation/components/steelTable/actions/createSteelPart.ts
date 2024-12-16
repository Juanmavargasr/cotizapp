"use server";

import { db } from "@/server/db";
import { steelPartType } from "@/types/common";
import { calculatePartArea } from "@/utils/calculatePartArea";
import { calculatePartWeight } from "@/utils/calculatePartWeight";

export const createSteelPart = async (data: steelPartType) => {
  const finalData = {
    ...data,
    weight: calculatePartWeight(data.width, data.length, data.thickness) || 0,
    area: calculatePartArea(data.width, data.length),
  };

  console.log(`*************~~~~~~~~`, finalData);

  try {
    const createNewSteelPart = await db.steelpart.create({
      data: {
        partName: finalData.partName,
        length: finalData.length,
        width: finalData.width,
        qty: finalData.qty,
        thickness: finalData.thickness,
        bend: finalData.bend,
        weight: finalData.weight,
        area: finalData.area,
        productid: finalData.productid,
      },
    });

    return { success: true, data: createNewSteelPart };
  } catch (err) {
    console.error("Error creating steel part", err);
    throw new Error("Error creating steel part");
  }
};

// export const createNewBasicDataQuotation = async (
//   data: basicDataQuotationTypes
// ) => {
//   console.log("******DATAAA: ", data);
//   try {
//     const newBasicDataQuotation = await db.basicdataquotation.create({
//       data: {
//         coldrolledprice: data.coldRolledPrice,
//         stainlesssteelprice: data.stainlessSteelPrice,
//         galvanizedsteelprice: data.galvanizedSteelPrice,
//         paintprice: data.paintPrice,
//         comercializedrentability: data.comercializedRentability,
//         productid: data.productid,
//       },
//     });
//     return { success: true, data: newBasicDataQuotation };
//   } catch (err) {
//     console.error("Error creating NewBasicDataQuotation: ", err);
//     throw new Error("Error creating NewBasicDataQuotation.");
//   }
// };
