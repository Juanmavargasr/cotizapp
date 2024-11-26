import { ColumnDef } from "@tanstack/react-table";

// import { z } from "zod";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type steelLine = {
  id: string | undefined;
  material: "CR" | "INOX" | "GV" | "PAINT";
  qty: number;
  partName: string;
  length: number;
  width: number;
  thickness:
    | "24"
    | "22"
    | "20"
    | "18"
    | "16"
    | "14"
    | "12"
    | "1/8"
    | "3/16"
    | "1/4"
    | "5/16"
    | "3/8"
    | "1/2";
  bends: number | undefined;
  weight: number | undefined;
  area: number | undefined;
};

// export const steelLineSchema = z.object({
//   id: z.string().optional(),
//   material: z.enum(["CR", "INOX", "GV", "PAINT"]),
//   partName: z.string(),
//   length: z.number().positive(),
//   width: z.number().positive(),
//   thickness: z.enum([
//     "24",
//     "22",
//     "20",
//     "18",
//     "16",
//     "14",
//     "12",
//     "1/8",
//     "3/16",
//     "1/4",
//     "5/16",
//     "3/8",
//     "1/2",
//   ]),
//   bends: z.number().int().optional(),
//   weight: z.number().positive().optional(),
//   area: z.number().positive().optional(),
// });

// export type steelLine = z.infer<typeof steelLineSchema>;

export const columns: ColumnDef<steelLine>[] = [
  {
    accessorKey: "material",
    header: "Material",
  },
  {
    accessorKey: "qty",
    header: "Qty",
  },
  {
    accessorKey: "partName",
    header: "PartName",
  },
  {
    accessorKey: "length",
    header: "Length",
  },
  {
    accessorKey: "width",
    header: "Width",
  },
  {
    accessorKey: "thickness",
    header: "Thickness",
  },
  {
    accessorKey: "bend",
    header: "Bend",
  },
  {
    accessorKey: "weight",
    header: "Weight",
  },
  {
    accessorKey: "area",
    header: "Area m²",
  },
];
