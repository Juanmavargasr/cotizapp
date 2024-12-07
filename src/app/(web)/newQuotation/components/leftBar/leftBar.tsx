"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { productTypes } from "@/types/common";

import { getQuotationProducts } from "../../actions/getQuotationProducts";

const LeftBar = (quotationId: { quotationId: string }) => {
  const [products, setProducts] = useState<productTypes[]>([]);

  const searchParams = useSearchParams();
  const numberQId = parseInt(quotationId.quotationId);

  const productId =
    searchParams.get("productId") !== null
      ? parseInt(searchParams.get("productId")!, 10)
      : 0;

  useEffect(() => {
    const fetchQuotationProducts = async (qId: number) => {
      const quotationProducts = await getQuotationProducts(qId);

      if (Array.isArray(quotationProducts)) {
        setProducts(quotationProducts);
      }
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
            <>
              <Link
                key={product.id}
                href={`/newQuotation?id=2&productId=${product.id}`}
                passHref
              >
                <div
                  className={`flex flex-col bg-white p-4 text-xs gap-2  hover:bg-gray-200 rounded-md mb-0.5 ${
                    productId === product.id ? "bg-blue-200" : ""
                  }`}
                  key={index}
                >
                  <div className="">
                    {product.id} - {product.name}
                  </div>
                  <div>Total before tax: {product.subtotalValueProduct}</div>
                </div>
              </Link>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
