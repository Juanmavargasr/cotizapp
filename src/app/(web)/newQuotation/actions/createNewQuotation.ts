'use server';

import { db } from '@/server/db';


export const createNewQuotation = async () => {
  try {
    const newQuotation = await db.quotation.create({
        data: {
          subtotalValueQuotation: 0,
          taxValueQuoatation: 0, 
          finalValueQuotation: 0,
        },
      });    
    return newQuotation;
  } catch (err) {
    console.error('Error creating quotation: ', err);
    throw new Error('Error creating quotation.');
  }
};