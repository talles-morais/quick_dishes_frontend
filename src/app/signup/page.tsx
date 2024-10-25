'use client'
import InputField from "@/components/InputField";
import Image from "next/image";

type Restaurant = {
  cnpj: string,
  email: string,
  address: string,
  phone: string,
  password: string
}

export default function signup() {
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

        {/* form */}
        <form action="" className="flex flex-col gap-3">
          <InputField name="cnpj" label="CNPJ:" placeholder="00.000.000/0000-00" type="text"/>
          <InputField name="email" label="E-mail:" placeholder="nome123@email.com" type="email"/>
          <InputField name="address" label="Endereço:" placeholder="Rua Abreu, 222, Itajubá - MG" type="text"/>
          <InputField name="phone" label="Telefone:" placeholder="(00) 99999-9999" type="tel"/>
          <InputField name="password" label="Senha:" placeholder="Crie uma senha forte" type="password"/>
          <InputField name="confirmPassword" label="Confirme sua senha:" placeholder="Confirme sua senha" type="password"/>

          <a className="text-white text-[8px] font-light underline hover:scale-105 transition-all">Esqueci minha senha :(</a>
          <button className="py-2 bg-dark_blue text-xs text-white font-bold rounded-xl hover:scale-105 transition-all">Criar conta</button>
          <button className="py-2 bg-white text-xs text-dark_blue font-bold rounded-xl hover:scale-105 transition-all">Fazer login</button>
        </form>
      </div>
    </div>
  )
};
