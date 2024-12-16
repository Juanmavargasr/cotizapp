export type productTypes = {
  id: number | undefined;
  name: string | undefined;
  subtotalvalueproduct: number | undefined;
  taxvalueproduct: number | undefined;
  finalvalueproduct: number | undefined;
  quotationid: number | null;
  createdat: string | Date | undefined;
  updatedat: string | Date | undefined;
};

// export type basicDataQuotationTypes = {
//   id: number | undefined;
//   coldrolledprice: number;
//   stainlesssteelprice: number;
//   galvanizedsteelprice: number;
//   paintprice: number;
//   comercializedrentability: number;
//   productid: number;
//   createdat: string | Date | undefined;
//   updatedat: string | Date | undefined;
// };

export type basicDataQuotationTypes = {
  id?: number;
  coldRolledPrice: number;
  stainlessSteelPrice: number;
  galvanizedSteelPrice: number;
  paintPrice: number;
  comercializedRentability: number;
  productid?: number;
  createdat?: string | Date;
  updatedat?: string | Date;
};

export type steelPartType = {
  id?: number | string;
  partName: string;
  length: number;
  width: number;
  qty: number;
  thickness: string;
  bend: number;
  weight?: number;
  area?: number;
  productid: number;
  createdat?: string | Date;
  updatedat?: string | Date;
};
