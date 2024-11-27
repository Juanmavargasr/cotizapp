import { Input } from "@/components/ui/input";
import { labourData } from "./labourPriceData";

const LabourTime = () => {
  return (
    <div className="flex justify-center">
      <table className="border p-4 border-black">
        <tr>
          <th className="border p-4 border-black">Desription</th>
          <th className="border p-4 border-black">Value</th>
          <th className="border p-4 border-black">Time</th>
          <th className="border p-4 border-black">Total</th>
        </tr>
        {labourData.map((key, index) => (
          <tr key={index}>
            <td className="border p-4 border-black">{key.labour}</td>
            <td className="border p-4 border-black">${key.price}</td>
            <td className="border p-4 border-black">
              <Input className="h-8" />
            </td>
            <td className="border p-4 border-black">
              <p>Total</p>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default LabourTime;
