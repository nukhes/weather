interface WeatherProps {
  city: string,
  state: string,
  temp?: string,
  icon?: string
}

export default function WeatherRoot({ city, state, temp, icon } : WeatherProps) {
  return (
    <div className="flex flex-col pt-4 gap-1">
      
      <hr className="w-60"/>

      <div className="flex items-end pt-4 justify-center">
        <h1 className="text-xl">{city}</h1>
        <h2 className="text-zinc-600">, {state}</h2>
      </div>

      <div className="flex justify-center items-center p-2">
        <img src={icon} className="w-16 drop-shadow-md"/>
        <span className="text-3xl font-semibold text-indigo-300 drop-shadow-md">{temp}<span className="text-lg">°C</span></span>
      </div>

    </div>
  );
}