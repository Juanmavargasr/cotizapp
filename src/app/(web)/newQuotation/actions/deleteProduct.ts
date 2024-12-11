"use server";

import { db } from "@/server/db";

export const deleteProduct = async (productId: number) => {
  if (!productId || isNaN(productId)) {
    throw new Error("Invalid product ID.");
  }

  try {
    const product = await db.product.findUnique({
      where: {
        id: productId,
      },
    });

    if (!product) {
      throw new Error("Product not found.");
    }

    const deletedProduct = await db.product.delete({
      where: {
        id: productId,
      },
    });

    return { success: true, data: deletedProduct };
  } catch (err) {
    console.error("Error deleting product: ", err);
    throw new Error("Error deleting product.");
  }
};
