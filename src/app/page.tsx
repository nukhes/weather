'use client'

import { useState } from "react";
import InputBtn from "./components/inputBtn";
import InputText from "./components/inputText";

export default function Home() {

  const API_KEY = "6bd22387a686de37ec655be11cd73256";
  const [inputCity, setInputCity] = useState("");


  function OnClickConfirm() {

    const cityCords: any = [];
    const cityInfo: any = [];

    async function GetData() {  

      async function GetWeatherData(lat: any, lon: any) {
        const res = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
        const data = await res.json();
  
        console.log(data);
      }

      try {
        const cityFS = inputCity.toLowerCase().trim();
        const res = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityFS}&limit=5&appid=${API_KEY}`);
        const data = await res.json();

        cityCords[0] = data[0].lat;
        cityCords[1] = data[0].lon;
        cityInfo[0] = data[0].name;
        cityInfo[1] = data[0].state;

        GetWeatherData(cityCords[0], cityCords[1]);

        console.log(cityCords);
        console.log(cityInfo);
      } catch (err) {
        console.log(err);
        alert("Insira uma cidade válida!")
      }
    }

    GetData();
  }

  return (
    <div className="
    flex flex-col justify-center items-center gap-2 
    w-3/4 max-w-96
    bg-slate-100 p-8 rounded-lg shadow-xl
    border-slate-400 border-[1px]
    ">

      <h1 className="text-xl font-semibold">Previsão do Tempo</h1>

      <InputText placeholder="Digite uma cidade" value={inputCity} onChange={(e: any)=>setInputCity(e.target.value)}/>
      <InputBtn value="Confirmar" onClick={OnClickConfirm}/>
    </div>
  );
}