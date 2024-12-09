"use client";

import LeftBar from "./components/leftBar/leftBar";
import React, { Suspense } from "react";

export default function NewQuotationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex bg-[#F9FAFB] h-screen w-full ">
      <Suspense fallback={<div>Loading...</div>}>
        <LeftBar />
      </Suspense>
      {children}
    </div>
  );
}
