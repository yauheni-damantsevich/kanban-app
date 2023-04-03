import Image from "next/image";
import arrowUp from "../../../public/assets/icons/arrow-up.svg";

export default function TableHeaderRow(props: { title: string }) {
  return (
    <div className="flex px-4 py-1 grow justify-between">
      <div className="flex justify-between gap-2">
        <button>
          <Image src={arrowUp} alt="Stack" />
        </button>
        <p className="self-center">{props.title}</p>
      </div>
      <span className="border-solid border rounded-full border-gray-800 px-2.5 font-montserrat text-xs self-center">
        0
      </span>
    </div>
  );
}
