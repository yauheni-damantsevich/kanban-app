import fs from "fs";
import TableHeaderFirst from "../table-header-first/table-header-first";
import TableHeader from "../table-header/table-header";
import TableHeaderRow from "../table-header-row/table-header-row";
import { ICard } from "./board.types";
import Card from "../card/card";

export default function Board() {
  const fixedTitle = "Class of Service / State";
  const localData = JSON.parse(
    fs.readFileSync("./public/assets/data.json", "utf8")
  );
  const columnData = [...localData.columns];
  const rowData = [...localData.rows];
  const cardData = [...localData.cards];
  const tagData = [...localData.tags];

  return localData ? (
    <table className="w-full border border-solid border-gray-400	">
      <thead>
        <tr>
          <th className="w-60	border border-solid border-gray-400	text-sm font-montserrat font-normal">
            <TableHeaderFirst title={fixedTitle} />
          </th>
          {columnData.length > 0 &&
            columnData.map((column: { id: string; title: string }) => (
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
            <TableHeaderRow title={rowData[0].title} />
          </td>
          {rowData.length > 0 &&
            rowData.map((row: { id: string; title: string }, index: number) => {
              return (
                <td
                  key={`${rowData[0].title}-${columnData[index]?.title}`}
                  id={`${rowData[0].title}-${columnData[index]?.title}`}
                  className="bg-gray-100 border border-solid border-gray-400 text-sm font-montserrat font-normal"
                >
                  {cardData
                    ? cardData.map((card: ICard) =>
                        card.state === rowData[0].title &&
                        card.status === columnData[index]?.title ? (
                          <Card
                            key={card.id}
                            id={card.id}
                            title={card.title}
                            description={card.description}
                            status={card.status}
                            state={card.state}
                            tags={card.tags}
                            priority={card.priority}
                            created={card.created}
                            tasks={card.tasks}
                            comments={card.comments}
                            tagData={tagData}
                          />
                        ) : null
                      )
                    : null}
                </td>
              );
            })}
        </tr>
      </tbody>
    </table>
  ) : (
    <div>Loading...</div>
  );
}
