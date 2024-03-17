interface WeatherMidProps {
  temp: string,
  icon: string,
  condition: string
}

export default function WeatherMid({ temp, icon, condition } : WeatherMidProps) {
  return (
    <div className="flex justify-center items-center flex-col">

    <div className="
    flex items-center justify-center rounded-xl
    m-5 p-4 gap-2 bg-slate-200
    ">
      <img src={icon} className="drop-shadow-md"/>
      <span className="text-3xl font-semibold text-blue-800 drop-shadow-md">{temp}<span className="text-lg"> °C</span></span>
    </div>

    <h1 className="text-zinc-500 text-xs">{condition}</h1>
  </div>
  );
}