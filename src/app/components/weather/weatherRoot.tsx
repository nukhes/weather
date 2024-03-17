import WeatherMid from "./weatherMid";
import WeatherTop from "./weatherTop"

interface WeatherProps {
  city: string,
  state: string,
  temp: string,
  icon: string,
  condition: string
}

export default function WeatherRoot({ city, state, temp, icon, condition } : WeatherProps) {
  return (
    <div className="flex flex-col pt-4 gap-1 justify-center w-full">
      
      <hr className="w-full"/>

      <WeatherTop city={city} state={state}/>
      <WeatherMid temp={temp} icon={icon} condition={condition}/>


    </div>
  );
}