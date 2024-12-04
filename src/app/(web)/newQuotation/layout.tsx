"use client";

import { useSearchParams } from "next/navigation";
import LeftBar from "./components/leftBar/leftBar";

export default function NewQuotationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const searchParams = useSearchParams();
  const quotationId = searchParams.get("id");

  return (
    <div className="flex bg-[#F9FAFB] h-screen w-full ">
      <LeftBar quotationId={quotationId || "0"} />
      {children}
    </div>
  );
}
