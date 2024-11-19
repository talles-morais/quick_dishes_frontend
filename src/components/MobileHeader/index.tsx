import Image  from "next/image"

export default function MobileHeader() {
  return (
    <div className="w-screen">
      <div className="flex justify-between w-full py-3 px-4 bg-second_dark">
        <Image
          src="/icons/hamburger.svg"
          width={36}
          height={36}
          alt="Ícone clicável para abrir o menu"
        />
        <Image
          src="/logo_white.svg"
          width={102}
          height={36}
          alt="Ícone clicável para abrir o menu"
        />
        <Image
          src="/icons/profile.svg"
          width={36}
          height={36}
          alt="Ícone clicável para abrir o menu"
        />
      </div>
    </div>
  )
}