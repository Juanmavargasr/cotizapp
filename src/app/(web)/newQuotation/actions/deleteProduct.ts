'use server';

import { db } from '@/server/db';

export const deleteProduct = async (productId: number) => {  
    console.log('****************************PID', productId)
  try {
    const deletedProduct = await db.product.deleteMany({
      where: {
        id: productId, 
      },
    });

    return deletedProduct;  
  } catch (err) {
    console.error('Error deleting product: ', err);
    throw new Error('Error deleting product.');
  }
};