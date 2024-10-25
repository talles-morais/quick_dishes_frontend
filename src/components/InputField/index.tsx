type InputProps = {
  name: string
  label: string
  placeholder: string
  type: string
}

export default function InputField({ name, label, placeholder, type } : InputProps) {
  return (
    <div className="flex flex-col gap-1 items-start">
      <label className="text-white text-xs" htmlFor={name}>{label}</label>
      <input className="px-2 py-1.5 text-xs rounded-xl outline-none focus:outline-primary focus:outline-2" type={type} id={name} placeholder={placeholder}/>
    </div>
  )
}
