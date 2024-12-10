'use server';

import { db } from '@/server/db';


export const createNewQuotation = async () => {
  try {
    const newQuotation = await db.quotation.create({
        data: {
          subtotalvaluequotation: 0,
          taxvaluequoatation: 0, 
          finalvaluequotation: 0,
        },
      });    
    return newQuotation;
  } catch (err) {
    console.error('Error creating quotation: ', err);
    throw new Error('Error creating quotation.');
  }
};