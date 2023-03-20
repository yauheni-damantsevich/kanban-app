import Image from "next/image";
import addNewCard from "../../../public/assets/icons/add-new-card.svg";
import profile from "../../../public/assets/icons/profile.svg";
import menu from "../../../public/assets/icons/menu.svg";

export default function Header() {
  return (
    <header className="z-30 flex justify-between bg-indigo-400 drop-shadow-lg">
      <div className="flex gap-6 p-3">
        <button>
          <Image src={addNewCard} alt="Add New Card" />
        </button>
        <p className="font-montserrat">Kanban Board</p>
      </div>
      <div className="flex gap-6 p-3">
        <button className="flex gap-3">
          <p className="font-montserrat">Login</p>
          <Image src={profile} alt="Profile" />
        </button>
        <button>
          <Image src={menu} alt="Menu" />
        </button>
      </div>
    </header>
  );
}
