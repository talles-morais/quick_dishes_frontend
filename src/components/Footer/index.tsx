import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-3 bg-second_dark text-xs py-4 px-7">
      <div className="flex items-center gap-5 justify-evenly">
        <div className="max-w-[111px]">
          <p className="break-words text-[10px]">
            Este projeto foi desenvolvido como projeto final para a disciplina
            de sistemas distribuídos.
          </p>
        </div>
        <div className="h-20 w-1 bg-white block"></div>
        <div className="flex flex-col justify-center w-2/3 gap-2.5">
          <p className="font-bold">Me siga!</p>
          <div className="flex">
            <Link className="transition-all hover:scale-110" href="https://www.instagram.com/t.alves02/">
              <Image
                src="/icons/social/instagram.svg"
                width={36}
                height={36}
                alt="Ícone do Instagram"
              />
            </Link>
            <Link className="transition-all hover:scale-110" href="https://www.linkedin.com/in/t-alvesdm/">
              <Image
                src="/icons/social/linkedin.svg"
                width={36}
                height={36}
                alt="Ícone do Linkedin"
              />
            </Link>
            <Link className="transition-all hover:scale-110" href="https://github.com/talles-morais">
              <Image
                src="/icons/social/github.svg"
                width={36}
                height={36}
                alt="Ícone do Github"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <p>Desenvolvido por Talles Alves</p>
        <p className="text-[8px]">Todos os direitos reservados ©</p>
      </div>
    </footer>
  );
}
