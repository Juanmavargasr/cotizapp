import Navbar from "@/components/navbar";

export default function newQuotationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex bg-[#F9FAFB] h-screen w-full flex-col ">
      <Navbar />
      {children}
    </div>
  );
}
