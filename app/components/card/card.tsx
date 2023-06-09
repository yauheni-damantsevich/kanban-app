import { ICard, ITag } from "../board/board.types";
import Link from "next/link";

export default function Card(card: ICard) {
  const tagData = card.tagData;
  const slug = card.title.split(" ").join("-").toLowerCase();

  return (
    <div className="w-fit m-2 flex flex-col gap-2 bg-white rounded drop-shadow">
      <div className="flex flex-col gap-2 p-1">
        <div className="flex gap-2">
          <Link href={`/cards/${slug}`}>
            <h3 className="font-montserrat text-sm">{card.title}</h3>
          </Link>
          <button className="self-center">
            <img src="/assets/icons/edit.svg" alt="Edit" />
          </button>
        </div>
        {card.tags.length > 0
          ? card.tags.map((tag) => (
              <span
                key={tag}
                className={`bg-${
                  tagData.find((tagItem: ITag) => tagItem.title === tag)?.color
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
