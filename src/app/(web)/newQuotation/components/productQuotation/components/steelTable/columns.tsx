import { ColumnDef } from "@tanstack/react-table";

import { z } from "zod";

const thicknessValues = [
  "24",
  "22",
  "20",
  "18",
  "16",
  "14",
  "12",
  "1/8",
  "3/16",
  "1/4",
  "5/16",
  "3/8",
  "1/2",
] as const;

const materialValues = ["CR", "INOX", "GV", "PAINT"] as const;

export const steelLineSchema = z.object({
  id: z.string().optional(),
  material: z.enum(materialValues, {
    message: "Cold Rolled steel price must be at least 4 characters.",
  }),
  partName: z.string(),
  length: z.preprocess((a) => {
    const parsed = parseInt(z.string().parse(a), 10);
    return isNaN(parsed) ? undefined : parsed;
  }, z.number().int().positive().nonnegative()),
  width: z.preprocess((a) => {
    const parsed = parseInt(z.string().parse(a), 10);
    return isNaN(parsed) ? undefined : parsed;
  }, z.number().int().positive().nonnegative()),
  qty: z.preprocess((a) => {
    const parsed = parseInt(z.string().parse(a), 10);
    return isNaN(parsed) ? undefined : parsed;
  }, z.number().int().positive().nonnegative()),
  thickness: z.enum(thicknessValues, { message: " choose a correct thicknes" }),
  bend: z.preprocess((a) => {
    const parsed = parseInt(z.string().parse(a), 10);
    return isNaN(parsed) ? undefined : parsed;
  }, z.number().int().positive().nonnegative()),
  weight: z.number().positive().optional(),
  area: z.number().positive().optional(),
});

export type steelLine = z.infer<typeof steelLineSchema>;

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

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
// export type steelLine = {
//   id: string | undefined;
//   material: "CR" | "INOX" | "GV" | "PAINT";
//   qty: number;
//   partName: string;
//   length: number;
//   width: number;
//   thickness:
//     | "24"
//     | "22"
//     | "20"
//     | "18"
//     | "16"
//     | "14"
//     | "12"
//     | "1/8"
//     | "3/16"
//     | "1/4"
//     | "5/16"
//     | "3/8"
//     | "1/2";
//   bend: number | undefined;
//   weight: number | undefined;
//   area: number | undefined;
// };
