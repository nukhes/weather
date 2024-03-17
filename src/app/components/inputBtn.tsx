interface InputProps {
  value?: string,
  onClick?: any
}

export default function InputBtn({ value, onClick }: InputProps) {
  return (
    <input onClick={onClick} value={value} type="button" className="
    min-w-16 p-1.5 rounded-lg border-slate-400 border-[1px]
    bg-indigo-100 hover:cursor-pointer hover:bg-indigo-300
    " />
  );
}