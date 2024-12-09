import { Input } from "@/components/ui/input";
import { sumaryData } from "./summaryData";

const SummaryTable = () => {
  return (
    <div className=" flex flex-row justify-between px-24">
      <div className="flex justify-center">
        <table className="border-collapse border-2 border-black">
          <thead>
            <tr>
              <th className="border p-4 ">Desription</th>
              <th className="border p-4 ">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-4 ">Steelsheet value</td>
              <td className="border p-4">
                <p>Total</p>
              </td>
            </tr>
            <tr>
              <td className="border p-4 ">Paint value</td>
              <td className="border p-4">
                <p>Total</p>
              </td>
            </tr>
            <tr>
              <td className="border p-4 ">Labour time value</td>
              <td className="border p-4">
                <p>Total</p>
              </td>
            </tr>
            <tr>
              <td className="border p-4 ">Electricity value</td>
              <td className="border p-4">
                <p>Total</p>
              </td>
            </tr>
            <tr>
              <td className="border p-4 ">Gas value</td>
              <td className="border p-4">
                <p>Total</p>
              </td>
            </tr>
            <tr>
              <td className="border p-4 ">chemicals value</td>
              <td className="border p-4">
                <p>Total</p>
              </td>
            </tr>
            <tr>
              <td className="border p-4 ">Other materials&apos; value</td>
              <td className="border p-4">
                <p>Total</p>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td className="border p-4 ">Total value</td>
              <td className="border p-4 ">total</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className="flex justify-center">
        <table className="border-collapse border-2 border-black">
          <thead>
            <tr>
              <th className="border p-4"> Variable</th>
              <th className="border p-4 ">Desription</th>
              <th className="border p-4 ">Total</th>
            </tr>
          </thead>
          <tbody>
            {/* {sumaryData.map((key, index) => (
              <tr key={index}>
                <td className="border p-4 w-[100px] ">
                  {key.percentageIncrement ? (
                    <Input className="h-8 w-[60px]" />
                  ) : (
                    ""
                  )}
                </td>
                <td className="border p-4 ">{key.variable}</td>
                <td className="border p-4">
                  {key.openPrice ? (
                    <Input className="h-8 w-[60px]" />
                  ) : (
                    <p>Total</p>
                  )}
                </td>
              </tr>
            ))} */}
            <tr>
              <td className="border p-4">
                <Input
                  className="h-8 w-[60px]"
                  defaultValue={
                    sumaryData
                      .filter((data) => data.variable === "CIF")
                      .map((data) => data.defaultExtraValue)[0] || "0"
                  }
                />
              </td>
              <td className="border p-4 ">CIF</td>
              <td className="border p-4">
                <p>Total</p>
              </td>
            </tr>
            <tr>
              <td className="border p-4">
                <Input
                  className="h-8 w-[60px]"
                  defaultValue={
                    sumaryData
                      .filter((data) => data.variable === "Special product")
                      .map((data) => data.defaultExtraValue)[0] || "0"
                  }
                />
              </td>
              <td className="border p-4 ">Special product</td>
              <td className="border p-4">
                <p>Total</p>
              </td>
            </tr>
            <tr>
              <td className="border p-4">
                <Input
                  className="h-8 w-[60px]"
                  defaultValue={
                    sumaryData
                      .filter((data) => data.variable === "Utility")
                      .map((data) => data.defaultExtraValue)[0] || "0"
                  }
                />
              </td>
              <td className="border p-4 ">Utility</td>
              <td className="border p-4">
                <p>Total</p>
              </td>
            </tr>
            <tr>
              <td className="border p-4"></td>
              <td className="border p-4 ">Design Value</td>
              <td className="border p-4">
                <Input className="h-8 w-[60px]" />
              </td>
            </tr>
            <tr>
              <td className="border p-4"></td>
              <td className="border p-4 ">Shipping value</td>
              <td className="border p-4">
                <Input className="h-8 w-[60px]" />
              </td>
            </tr>
            <tr>
              <td className="border p-4"></td>
              <td className="border p-4 ">Insurance value</td>
              <td className="border p-4">
                <Input className="h-8 w-[60px]" />
              </td>
            </tr>
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>
    </div>
  );
};

export default SummaryTable;
