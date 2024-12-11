// import { Button } from "@/components/ui/button";
"use client";

import React, { Suspense } from "react";

// import { useSearchParams } from "next/navigation";

// import styles from "./newQuiotation.module.scss";
import ProductQuotation from "./components/productQuotation/productQuotation";

export default function Page() {
  // const searchParams = useSearchParams();

  // const quotationId = searchParams.get("id");
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <div className="w-[800px] justify-center items-center">
        {/* <p className={styles.title}>Quote #{quotationId}</p> */}
        <Suspense fallback={<div>Loading...</div>}>
          <ProductQuotation />
        </Suspense>
      </div>
    </div>
  );
}
