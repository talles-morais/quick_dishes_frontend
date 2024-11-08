import SignupForm from "@/components/SignUpForm";
import Image from "next/image";
import Link from "next/link";

export default function SignupPage() {

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
        <h1 className="text-white font-bold ">Crie sua conta!</h1>

        <SignupForm />
        <Link className="w-full" href={"/login"}>
          <button className="w-full py-2 bg-white text-xs text-primary font-bold rounded-xl hover:scale-105 transition-all">Fazer login</button>
        </Link>
      </div>
    </div>
  );
}
