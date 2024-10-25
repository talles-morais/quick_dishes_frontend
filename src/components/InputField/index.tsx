import { UseFormRegister } from "react-hook-form"
import InputMask from "react-input-mask";

type InputProps = {
  name: string
  label: string
  placeholder: string
  type: string
  register: UseFormRegister<any>
  mask?: string
}

export default function InputField({ name, label, placeholder, type, register, mask }: InputProps) {
  return (
    <div className="flex flex-col gap-1 items-start">
      <label className="text-white text-xs" htmlFor={name}>{label}</label>
      {mask ? (
        <InputMask
          className="px-2 py-1.5 text-xs rounded-xl outline-none focus:outline-primary focus:outline-2"
          mask={mask}
          {...register(name)}
          placeholder={placeholder}
          type={type}
          id={name}
        />
      ) : (
        <input
          className="px-2 py-1.5 text-xs rounded-xl outline-none focus:outline-primary focus:outline-2"
          {...register(name)}
          placeholder={placeholder}
          type={type}
          id={name}
        />
      )}
    </div>
  )
}
