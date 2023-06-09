import Image from "next/image";
import search from "../../../public/assets/icons/search.svg";

export default function Sidebar() {
  return (
    <div className="z-20 absolute flex flex-col w-11 h-screen pt-16 px-3 bg-indigo-300 drop-shadow-lg">
      <button>
        <Image src={search} alt="Search" />
      </button>
    </div>
  );
}
