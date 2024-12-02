"use client";

import { Input } from "@/components/ui/input";
import { otherProductsData } from "./materialsData";
import { Button } from "@/components/ui/button";

import { useState } from "react";

const OtherMaterialsData = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");

  const categoryProductsData = Array.from(
    new Set(otherProductsData.map((item) => item.category))
  );

  const filteredProducts = otherProductsData.filter(
    (item) => item.category === selectedCategory
  );

  const handleChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value;
    console.log("**************************", selectedCategory);
    setSelectedCategory(category);
  };

  const handleChangeProduct = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const product = e.target.value;
    setSelectedProduct(product);
    console.log("*********", selectedProduct, product);
  };

  return (
    <div className="w-full mt-4 p-4 ">
      <form action="">
        <div className="flex flex-col g-4">
          <div className=" flex flex-row justify-center gap-4">
            <div className="flex flex-col w-[30%] gap-4">
              <p>
                {" "}
                <strong> Select a category:</strong>{" "}
              </p>
              <select
                id="category"
                value={selectedCategory}
                onChange={handleChangeCategory}
              >
                <option value="">Select a category</option>
                {categoryProductsData.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col w-[55%] gap-4">
              {" "}
              <p>
                <strong>Select a Product:</strong>
              </p>
              <select
                name="product"
                id="product"
                value={selectedProduct}
                onChange={handleChangeProduct}
              >
                {selectedCategory !== "" ? (
                  <>
                    <option value="">Select a product</option>
                    {filteredProducts.map((key, index) => (
                      <option key={index} value={key.products}>
                        {key.products}
                      </option>
                    ))}
                  </>
                ) : (
                  <option value="">Select a category</option>
                )}
              </select>
            </div>
            <div className="flex flex-col w-[15%] gap-4">
              {" "}
              <p>
                <strong>Select a Qty:</strong>
              </p>
              <Input type="text" className="h-4" />
            </div>
          </div>
          <div className="flex mt-8 justify-center">
            <Button
              type="submit"
              className="w-[180px] bg-green-600 hover:bg-green-800"
            >
              Add
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default OtherMaterialsData;
