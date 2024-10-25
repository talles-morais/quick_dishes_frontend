'use client'
import Image from "next/image";
import { redirect } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import * as yup from "yup"

import InputField from "@/components/InputField";
import api from "@/services/api";

type Restaurant = {
  cnpj: string,
  email: string,
  address: string,
  phone: string,
  password: string,
  confirmPassword?: string,
}

const restaurantSchema = yup.object().shape({
  cnpj: yup
    .string()
    .required("Campo obrigatório")
    .matches(/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/, { message: "CNPJ inválido" }),
  email: yup
    .string()
    .email("E-mail inválido")
    .required("Campo obrigatório"),
  address: yup
    .string()
    .required("Campo obrigatório"),
  phone: yup
    .string()
    .required("Campo obrigatório")
    .matches(/^\(?\d{2}\)?[\s-]?9?\d{4}[\s-]?\d{4}$/, { message: "Telefone inválido" }),
  password: yup
    .string()
    .min(4, "Sua senha deve ter, no mínimo, 4 caracteres")
    .required("Campo obrigatório"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "As senhas devem coincidir")
    .required("Campo obrigatório"),
})

export default function signup() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Restaurant>({
    mode: "onSubmit",
    resolver: yupResolver<Restaurant>(restaurantSchema)
  })

  const mutation = useMutation({
    mutationFn: async (data: Restaurant) => {
      const response = await api.post("/signup", data)
      return response.data
    },
    onSuccess: () => {
      console.log("user succesfully created");
    },
    onError: (error) => {
      console.error("error creating user: ", error)
    }
  })

  const onSubmit: SubmitHandler<Restaurant> = (data) => {
    const cleanedData = {
      ...data,
      cnpj: data.cnpj.replace(/[^\d]/g, ""),
      phone: data.phone.replace(/[^\d]/g, "")
    }
    mutation.mutate(cleanedData)
  }

  const fields = [
    { name: "cnpj", label: "CNPJ:", type: "text", placeholder: "00.000.000/0000-00", mask: "99.999.999/9999-99" },
    { name: "name", label: "Nome:", type: "text", placeholder: "Restaurante Demais" },
    { name: "email", label: "E-mail:", type: "email", placeholder: "nome123@email.com" },
    { name: "address", label: "Endereço:", type: "text", placeholder: "Rua Abreu, 222, Itajubá - MG" },
    { name: "phone", label: "Telefone:", type: "tel", placeholder: "(00) 99999-9999", mask: "(99) 99999-9999" },
    { name: "password", label: "Senha:", type: "password", placeholder: "Crie uma senha forte" },
    { name: "confirmPassword", label: "Confirme sua senha:", type: "password", placeholder: "Confirme sua senha" },
  ]

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
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          {fields.map(({ name, label, type, placeholder, mask }) => (
            <div key={name}>
              <InputField
                name={name}
                label={label}
                type={type}
                placeholder={placeholder}
                register={register}
                mask={mask}
              />
              {errors[name as keyof Restaurant] && <p className="text-red-500 text-[8px] font-bold word-wrap max-w-[150px]">{errors[name as keyof Restaurant]?.message}</p>}
            </div>
          ))}

          <a className="text-white text-[8px] font-light underline hover:scale-105 transition-all">Esqueci minha senha :(</a>
          <button className="py-2 bg-primary text-xs text-white font-bold rounded-xl hover:scale-105 transition-all" type="submit">Criar conta</button>
          <button className="py-2 bg-white text-xs text-primary font-bold rounded-xl hover:scale-105 transition-all" type="button" onClick={() => redirect('/login')}>Fazer login</button>
        </form>
      </div>
    </div>
  )
};
