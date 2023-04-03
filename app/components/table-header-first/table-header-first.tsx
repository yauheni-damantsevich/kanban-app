import Image from "next/image";
import arrowLeft from "../../../public/assets/icons/arrow-left.svg";

export default function TableHeaderFirst(props: { title: string }) {
  return (
    <div className="flex px-4 py-1 gap-2">
      <button>
        <Image src={arrowLeft} alt="Stack" />
      </button>
      <p className="self-center">{props.title}</p>
    </div>
  );
}
