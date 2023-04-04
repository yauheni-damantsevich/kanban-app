import Image from "next/image";
import arrowLeft from "../../../public/assets/icons/arrow-left.svg";

export default function TableHeader(props: { title: string; count: number }) {
  return (
    <div className="flex px-4 py-1 grow justify-between">
      <div className="flex justify-between gap-2">
        <button>
          <Image src={arrowLeft} alt="Stack" />
        </button>
        <input type="checkbox" />
        <p className="self-center">{props.title}</p>
      </div>
      <span className="border-solid border rounded-full border-gray-800 px-2.5 font-montserrat text-xs self-center">
        {props.count}
      </span>
    </div>
  );
}
