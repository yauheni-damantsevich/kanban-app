import Image from "next/image";
import ArrowDown from "../../../public/assets/icons/arrow-down.svg";

export default function SelectedCards() {
  return (
    <div className="absolute bottom-0 flex pl-11">
      <button className="flex px-2 gap-2 self-center py-1">
        <Image src={ArrowDown} alt="Arrow Down" className="self-center" />
        <p className="font-montserrat text-xs">Selected cards</p>
        <span className="border-solid border rounded-full border-gray-800 px-2.5 font-montserrat text-xs self-center">
          0
        </span>
      </button>
    </div>
  );
}
