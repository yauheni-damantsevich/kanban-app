import fs from "fs";
import TableHeaderFirst from "../table-header-first/table-header-first";
import TableHeader from "../table-header/table-header";
import TableHeaderRow from "../table-header-row/table-header-row";

export default function Board() {
  const fixedTitle = "Class of Service / State";
  const data = JSON.parse(fs.readFileSync("./public/assets/data.json", "utf8"));

  return data ? (
    <table className="w-full border border-solid border-gray-400	">
      <thead>
        <tr>
          <th className="w-60	border border-solid border-gray-400	text-sm font-montserrat font-normal">
            <TableHeaderFirst title={fixedTitle} />
          </th>
          {data.columns.length > 0 &&
            data.columns.map((column: { id: string; title: string }) => (
              <th
                className="border border-solid border-gray-400 text-sm font-montserrat font-normal"
                key={column.id}
              >
                <TableHeader title={column.title} />
              </th>
            ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-solid border-gray-400 text-sm font-montserrat font-normal">
            <TableHeaderRow title={data.rows[0].title} />
          </td>
          {data.rows.length > 0 &&
            data.rows.map(
              (row: { id: string; title: string }, index: number) => {
                return (
                  <td
                    id={`${data.rows[0].title}-${data.columns[index]?.title}`}
                    className="border border-solid border-gray-400 text-sm font-montserrat font-normal"
                  ></td>
                );
              }
            )}
        </tr>
      </tbody>
    </table>
  ) : (
    <div>Loading...</div>
  );
}