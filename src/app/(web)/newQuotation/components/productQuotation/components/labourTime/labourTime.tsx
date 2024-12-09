import { Input } from "@/components/ui/input";
import { labourData } from "./labourPriceData";

const LabourTime = () => {
  return (
    <div className="flex justify-center">
      <table className="border-collapse border-2 border-black">
        <tbody>
          <tr>
            <th className="border p-4 ">Desription</th>
            <th className="border p-4 ">Value</th>
            <th className="border p-4 w-[100px]">
              Time <span className="text-xs">(minutes)</span>
            </th>
            <th className="border p-4 ">Total</th>
          </tr>
          {labourData.map((key, index) => (
            <tr key={index}>
              <td className="border p-4 ">{key.labour}</td>
              <td className="border p-4 ">${key.price}</td>
              <td className="border p-4">
                <Input className="h-8 w-[60px]" defaultValue={0} />
              </td>
              <td className="border p-4">
                <p>Total</p>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
  );
};

export default LabourTime;
