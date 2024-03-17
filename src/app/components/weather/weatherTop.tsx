interface WeatherTopProps {
  city: string,
  state: string,
}

export default function WeatherTop({ city, state } : WeatherTopProps) {
  return (
    <div className="flex items-end pt-4 justify-center">
      <h1 className="text-xl">{city}</h1>
      <h2 className="text-zinc-600">, {state}</h2>
    </div>
  );
}