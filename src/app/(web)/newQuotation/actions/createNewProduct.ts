'use server';

import { db } from '@/server/db';


export const createNewProduct = async (quotationId: number) => {  
  try {
    const newProduct = await db.product.create({
        data: {
            subtotalValueProduct: 0,
            name: '',
            taxValueProduct: 0, 
            finalValueProduct: 0,
            quotationId: quotationId,
        },
      });    
    return newProduct;
  } catch (err) {
    console.error('Error creating product: ', err);
    throw new Error('Error creating product.');
  }
};