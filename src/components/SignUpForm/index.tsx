'use client';
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import * as yup from "yup";
import InputField from "@/components/InputField";
import api from "@/services/api";

type Restaurant = {
  cnpj: string;
  name: string;
  email: string;
  address: string;
  phone: string;
  password: string;
  confirmPassword?: string;
};

const restaurantSchema = yup.object().shape({
  cnpj: yup
    .string()
    .required("Campo obrigatório")
    .matches(/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/, { message: "CNPJ inválido" }),
  name: yup
    .string()
    .required("Campo obrigatório"),
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
});

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Restaurant>({
    mode: "onSubmit",
    resolver: yupResolver<Restaurant>(restaurantSchema)
  });

  const mutation = useMutation({
    mutationFn: async (data: Restaurant) => {
      const response = await api.post("/signup", data);
      return response.data;
    },
    onSuccess: () => {
      console.log("Usuário criado com sucesso");
    },
    onError: (error) => {
      console.error("Erro ao criar usuário: ", error);
    }
  });

  const onSubmit: SubmitHandler<Restaurant> = (data) => {
    const cleanedData = {
      ...data,
      cnpj: data.cnpj.replace(/[^\d]/g, ""),
      phone: data.phone.replace(/[^\d]/g, "")
    };
    mutation.mutate(cleanedData);
  };

  const fields = [
    { name: "cnpj", label: "CNPJ:", type: "text", placeholder: "00.000.000/0000-00", mask: "99.999.999/9999-99" },
    { name: "name", label: "Nome:", type: "text", placeholder: "Restaurante Demais" },
    { name: "email", label: "E-mail:", type: "email", placeholder: "nome123@email.com" },
    { name: "address", label: "Endereço:", type: "text", placeholder: "Rua Abreu, 222, Itajubá - MG" },
    { name: "phone", label: "Telefone:", type: "tel", placeholder: "(00) 99999-9999", mask: "(99) 99999-9999" },
    { name: "password", label: "Senha:", type: "password", placeholder: "Crie uma senha forte" },
    { name: "confirmPassword", label: "Confirme sua senha:", type: "password", placeholder: "Confirme sua senha" },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 w-full">
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
          {errors[name as keyof Restaurant] && (
            <p className="text-red-500 text-[8px] font-bold word-wrap max-w-[150px]">{errors[name as keyof Restaurant]?.message}</p>
          )}
        </div>
      ))}
      <button className="py-2 bg-primary text-xs md:text-lg text-white font-bold rounded-xl hover:scale-105 transition-all" type="submit">Criar conta</button>
    </form>
  );
}
