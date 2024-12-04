"use client";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { getQuotationProducts } from "../../actions/getQuotationProducts";
import { productTypes } from "@/types/common";

const LeftBar = (quotationId: { quotationId: string }) => {
  const [products, setProducts] = useState<productTypes[]>([]);

  const numberQId = parseInt(quotationId.quotationId);

  useEffect(() => {
    const fetchQuotationProducts = async (qId: number) => {
      const quotationProducts = await getQuotationProducts(qId);
      setProducts(quotationProducts);
    };
    fetchQuotationProducts(numberQId);
  }, [numberQId]);

  return (
    <div className=" flex flex-col bg-blue-100 w-[240px] justify-start h-screen g-8 ">
      <div>
        <Button className="w-[180px] bg-green-600 hover:bg-green-800 m-4">
          New Product
        </Button>
      </div>
      <div className="flex flex-col justify-center">
        <div className=" flex w-full justify-center">
          <p>
            <strong>Products</strong>
          </p>
        </div>
        <div className="flex w-full flex-col justify-center p-1">
          {products.map((product, index) => (
            <div
              className="flex flex-col bg-white p-4 text-xs gap-2  hover:bg-blue-300 rounded-md mb-0.5"
              key={index}
            >
              <div className="">
                {product.id} - {product.name}
              </div>
              <div>Total before tax: {product.subtotalValueProduct}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
