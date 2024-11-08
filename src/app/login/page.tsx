import Image from "next/image";
import Link from "next/link";
import LoginForm from "@/components/LoginForm";

export default function login() {
  return (
    <div className="flex items-center justify-center px-12 h-screen">
      <div className="flex flex-col items-center bg-second_dark rounded-xl px-6 py-5 gap-3">
        <Image
          src={"/logo_white.svg"}
          width={136}
          height={48}
          alt="Logotipo do QuickDishes"
        />
        <div className="bg-white h-[1px] w-16" />
        <h1 className="text-white font-bold ">Faça Login!</h1>

        <LoginForm />
        <Link className="w-full" href={"/signup"}>
          <button className="w-full py-2 bg-white text-xs text-primary font-bold rounded-xl hover:scale-105 transition-all">Criar conta</button>
        </Link>
      </div>
    </div>
  )
};
