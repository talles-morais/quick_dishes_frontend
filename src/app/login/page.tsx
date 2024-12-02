import Image from "next/image";
import Link from "next/link";
import LoginForm from "@/components/LoginForm";

export default function login() {
  return (
    <div className="flex items-center justify-center px-12 py-10 h-screen">
      <div className="flex h-full overflow-hidden rounded-xl">
        <div className="hidden md:flex bg-login px-12 bg-cover justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-12">
              <Image 
                src="/logo_white.svg"
                width={640}
                height={226}
                alt="Logo do QuickDishes"
              />
              <p className="text-center text-white max-w-[471px]">
                Bem-vindo ao QuickDishes – o sistema de gestão de delivery que otimiza seus pedidos, agiliza suas entregas e eleva a experiência do seu negócio!
              </p>
            </div>
        </div>
        <div className="flex flex-col items-center md:justify-center bg-second_dark px-6 py-5 gap-3 w-1/2">
          <Image
            src={"/logo_white.svg"}
            width={136}
            height={48}
            alt="Logotipo do QuickDishes"
            className="md:hidden"
          />
          <div className="bg-white h-[1px] w-16 md:hidden"/>
          <h1 className="text-white font-bold md:text-5xl md:w-full">Faça Login!</h1>

          <LoginForm />
          <Link className="w-full" href={"/signup"}>
            <button className="w-full py-2 bg-white text-xs md:text-lg text-primary font-bold rounded-xl hover:scale-105 transition-all">
              Criar conta
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
