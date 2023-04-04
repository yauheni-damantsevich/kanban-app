import fs from "fs";
import { ICard } from "../board/board.types";
import { ITag } from "./card.types";
import Link from "next/link";

export default function Card(card: ICard) {
  const data = JSON.parse(fs.readFileSync("./public/assets/data.json", "utf8"));

  return (
    <div className="w-fit m-2 flex flex-col gap-2 bg-white rounded drop-shadow">
      <div className="flex flex-col gap-2 p-1">
        <div className="flex gap-2">
          <Link href={`/cards/${card.id}`}>
            <h3 className="font-montserrat text-sm">{card.title}</h3>
          </Link>
          <button className="self-center">
            <img src="/assets/icons/edit.svg" alt="Edit" />
          </button>
        </div>
        {card.tags.length > 0
          ? card.tags.map((tag) => (
              <span
                className={`bg-${
                  data.tags.find((tagItem: ITag) => tagItem.title === tag)
                    ?.color
                } font-montserrat text-xs px-1.5 py-0.5 rounded-full w-fit`}
              >{`#${tag}`}</span>
            ))
          : null}
        <div className="flex justify-between">
          <div className="flex gap-2">
            <div className="flex gap-1">
              <img src="/assets/icons/tasks.svg" alt="Tasks" />
              <span className="font-montserrat text-xs">
                {card.tasks.length}
              </span>
            </div>
            <div className="flex gap-1">
              <img src="/assets/icons/comments.svg" alt="Comments" />
              <span className="font-montserrat text-xs">
                {card.comments.length}
              </span>
            </div>
          </div>
          {card.priority === "High" && (
            <img src="/assets/icons/priority-high.svg" alt="High" />
          )}
          {card.priority === "Medium" && (
            <img src="/assets/icons/priority-medium.svg" alt="Medium" />
          )}
          {card.priority === "Low" && (
            <img src="/assets/icons/priority-low.svg" alt="Low" />
          )}
        </div>
      </div>
    </div>
  );
}
