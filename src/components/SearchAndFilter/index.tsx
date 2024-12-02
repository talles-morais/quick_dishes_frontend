import Image from "next/image";
import OrderFilter from "../Orders/OrderFilter";

export default function SearchAndFilter() {
  return (
    <div className="flex flex-col gap-2 mt-2 flex-1">
      <div className="flex gap-2">
        <div className="flex w-full bg-second_dark py-1 px-2 rounded-lg">
          <input
            className="flex-1 bg-transparent md:placeholder:text-base placeholder:text-[10px] focus:outline-none text-[10px] md:text-base"
            type="text"
            placeholder="Pesquise por nome, id, etc..."
          />
          <Image
            src="/icons/search.svg"
            width={20}
            height={20}
            alt="Ícone de busca"
          />
        </div>
        <button className="bg-second_dark py-1 px-1.5 rounded-lg hover:scale-110 transition-all">
          <Image
            src="/icons/filter.svg"
            width={20}
            height={20}
            alt="Ícone de filtro"
          />
        </button>
      </div>
      <OrderFilter />
    </div>
  );
}
