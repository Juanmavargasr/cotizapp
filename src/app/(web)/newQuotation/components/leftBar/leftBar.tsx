"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { productTypes } from "@/types/common";

import { getQuotationProducts } from "../../actions/getQuotationProducts";
import { createNewProduct } from "../../actions/createNewProduct";
import { deleteProduct } from "../../actions/deleteProduct";

const LeftBar = () => {
  const router = useRouter();

  const [products, setProducts] = useState<productTypes[]>([]);
  const [createProduct, setCreateProduct] = useState(false);
  const [deleteProductF, setDeleteProductF] = useState(false);

  const searchParams = useSearchParams();

  const productId =
    searchParams.get("productId") !== null
      ? parseInt(searchParams.get("productId")!, 10)
      : 0;

  const quotationIdParam =
    searchParams.get("productId") !== null
      ? parseInt(searchParams.get("id")!, 10)
      : 0;

  useEffect(() => {
    const fetchQuotationProducts = async (qId: number) => {
      const quotationProducts = await getQuotationProducts(qId);
      if (Array.isArray(quotationProducts)) {
        setProducts(quotationProducts);
      }
    };

    fetchQuotationProducts(quotationIdParam);
  }, [quotationIdParam]);

  useEffect(() => {
    if (createProduct === true) {
      const handleCreateProduct = async (quotationIdParam: number) => {
        const newProduct = await createNewProduct(quotationIdParam);
        setCreateProduct(false);
        setProducts((prevProducts) => [...prevProducts, newProduct]);
        router.push(
          `/newQuotation?id=${quotationIdParam}&productId=${newProduct.id}`
        );
      };

      handleCreateProduct(quotationIdParam);
    }
  }, [createProduct]);

  useEffect(() => {
    if (products.length > 1) {
      if (deleteProductF === true) {
        const handleDeleteProduct = async (productId: number) => {
          const deletedProduct = await deleteProduct(productId);

          if (deletedProduct.success) {
            toast.success(`Product ${productId}  successfully deleted`);
          } else {
            toast.error(`Product ${productId}  successfully deleted`);
          }
          setDeleteProductF(false);
          setProducts((prevProducts) =>
            prevProducts.filter((product) => product.id !== productId)
          );
          router.push(
            `/newQuotation?id=${quotationIdParam}&productId=${products[0].id}`
          );
        };
        handleDeleteProduct(productId);
      }
    } else {
      toast.error("Can not delete the lastone product");
      setDeleteProductF(false);
    }
  }, [deleteProductF]);

  return (
    <div className=" flex flex-col bg-blue-100 w-[240px] justify-start h-screen g-8 ">
      <div>
        <Button
          className="w-[180px] bg-green-600 hover:bg-green-800 m-4"
          onClick={() => setCreateProduct(true)}
        >
          New Product
        </Button>

        <Button
          className="w-[180px] bg-red-600 hover:bg-red-800 m-4"
          onClick={() => setDeleteProductF(true)}
        >
          Delete Product
        </Button>
      </div>
      <div className="flex flex-col justify-center">
        <div className=" flex w-full justify-center">
          <p>
            <strong>Products</strong>
          </p>
        </div>
        <div className="flex w-full flex-col justify-center p-1">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/newQuotation?id=${quotationIdParam}&productId=${product.id}`}
            >
              <div
                className={`flex flex-col  p-4 text-xs gap-2 hover:bg-gray-200 rounded-md mb-0.5 ${
                  productId === product.id ? "bg-blue-200 " : "bg-white"
                }`}
                // key={index}
              >
                <div className="">
                  {product.id} - {product.name}
                </div>
                <div>Total before tax: {product.subtotalvalueproduct}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
