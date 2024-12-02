import Image from "next/image";

export default function OrderFilter() {
  return (
    <div className="flex justify-between">
      <button className="bg-second_dark py-1 px-1.5 rounded-lg">
        <Image
          src="/icons/calendar.svg"
          width={20}
          height={20}
          alt="Ícone de Calendário"
          className="md:w-8 "
        />
      </button>

      <div className="flex text-xs items-center gap-2">
        <p className="md:text-xl">Dia Atual:</p>
        <div className="flex items-center justify-evenly bg-second_dark rounded-lg">
          <button className="py-1 px-2">
            <Image
              src="/icons/arrow_left.svg"
              width={20}
              height={20}
              alt="Ícone de seta para esquerda"
              className="md:w-8 "
            />
          </button>
          <span className="md:text-xl">
            05/10
          </span>
          <button className="py-1 px-2">
            <Image
              src="/icons/arrow_right.svg"
              width={20}
              height={20}
              alt="Ícone de seta para direita"
              className="md:w-8 "
            />
          </button>
        </div>
      </div>
    </div>
  );
}
