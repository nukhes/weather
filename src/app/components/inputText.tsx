interface InputProps {
  placeholder?: string,
  value?: string,
  onChange?: any
}

export default function InputText({ placeholder, value, onChange }: InputProps) {
  return (
    <input onChange={onChange} value={value} type="text" placeholder={placeholder} className="p-2 rounded-lg border-slate-300 border-[1px]" />
  );
}