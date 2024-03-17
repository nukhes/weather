'use client'

import { ReactNode, useState } from "react";
import InputBtn from "./components/inputBtn";
import InputText from "./components/inputText";
import WeatherRoot from "./components/weather/weatherRoot";

export default function Home() {

  const API_KEY = "d564a4f5cc27424696a172629241703";

  const [inputCity, setInputCity] = useState("");
  const [weatherView, setWeatherView] = useState<ReactNode>();
  
  async function GetData() {
    try {
      const cityFS = inputCity.toLowerCase().trim();
      const res = await fetch(`https://api.weatherapi.com/v1/current.json?q=${cityFS}&key=${API_KEY}&lang=pt`);
      const cityData = await res.json();
      const weatherNode = <WeatherRoot city={cityData.location.name} state={cityData.location.region} temp={cityData.current.temp_c} icon={cityData.current.condition.icon} condition={cityData.current.condition.text} />;
      setWeatherView(weatherNode);
    } catch (err) {
      console.log(err);
      alert("Insira uma cidade válida!")
    }
  }

  return (
    <div className="
    flex flex-col align-middle gap-2 w-3/4 max-w-96
    bg-slate-100 p-4 rounded-lg shadow-xl
    border-slate-400 border-[1px]
    ">

      <h1 className="text-xl font-medium text-center mb-2">Previsão do Tempo 🌦️</h1>

      <InputText placeholder="Digite uma cidade" value={inputCity} onChange={(e: any)=>setInputCity(e.target.value)} />
      <InputBtn value="Confirmar" onClick={GetData} />

      {weatherView}
      
    </div>
  );
}