'use server';

import { db } from '@/server/db';


export const getQuotationProducts = async (quotationId: number) => {

    if (!quotationId) {
        throw new Error('quotationId is required');
      }
  
    try {
    const products = await db.product.findMany({
        where: {
          quotationid: quotationId, 
        },
      });

      if (products.length === 0) {
        return { message: 'No products found for this quotation', products: [] };
      }
    //response already verified - working
    return products;
  } catch (err) {
    console.error('Error getting products:', err);
    throw new Error('Error getting products');
  }
};

// export const getUsersForTable = async () => {
//     try {
//       const users = await db.basicData.findMany({
//         where: {
//           deletedAt: null,
//         },
//         include: {
//           company: {
//             include: {
//               espps: true,
//             },
//           },
//           state: true,
//           accounts: true,
//           disbursementSchedule: true,
//           offers: {
//             orderBy: {
//               createdAt: 'desc',
//             },
//           },
//           createdOffers: {
//             orderBy: {
//               createdAt: 'desc',
//             },
//           },
//           sessions: true,
//         },
//         orderBy: {
//           createdAt: 'desc',
//         },
//       });
  
//       const finalUsers = users
//         .filter((user: any) => user.role !== 'bizops' && user.role !== 'admin')
//         .map((user: any) => {
//           const date = new Date(user.createdAt);
//           const year = date.getFullYear();
//           const month = String(date.getMonth() + 1).padStart(2, '0'); // Los meses en JavaScript son 0-indexed
//           const day = String(date.getDate()).padStart(2, '0');
//           const formattedDate = `${year}/${month}/${day}`;
  
//           return {
//             id: user.id,
//             name: user.name,
//             company: user.company?.name ?? '',
//             createdAt: formattedDate,
//             email: user.email,
//             stage: user.stage,
//             funding: user.funding_method ?? '',
//             annual_salary: user.annualsalary ?? 0,
//             creditScore: user.estimated_credit_score,
//             contribution: user.yearly_contribution,
//           };
//         });
  
//       return finalUsers;
//     } catch (err) {
//       console.error(err);
//       throw new Error('Error getting users');
//     }
//   };