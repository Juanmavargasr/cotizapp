'use server';

import { db } from '@/server/db';


export const createNewProduct = async (quotationId: number) => {  
  try {
    const newProduct = await db.product.create({
        data: {
          subtotalvalueproduct: 0,
            name: '',
            taxvalueproduct: 0, 
            finalvalueproduct: 0,
            quotationid: quotationId,
        },
      });    
    return newProduct;
  } catch (err) {
    console.error('Error creating product: ', err);
    throw new Error('Error creating product.');
  }
};