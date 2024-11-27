// import { Button } from "@/components/ui/button";

import styles from "./newQuiotation.module.scss";
import ProductQuotation from "./components/productQuotation/productQuotation";

export default function Page() {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <div className="w-[800px] justify-center items-center">
        <p className={styles.title}>Quote #C2026</p>

        <ProductQuotation />
      </div>
    </div>
  );
}
