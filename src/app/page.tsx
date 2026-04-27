'use client'
import { useEffect, useState } from "react";

export default function Home() {
  const [name, setName] = useState("VINICIUS");

  useEffect(() => {
    console.log("Viva lá vida!");
  });

  useEffect(() => {
    console.log("Componente montado");
  }, [name]);

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-2xl mb-10">UseEffect - Etapas</h1>
      <div className="mt-6">
        <p className="mt-3">Nome: {name}</p>
      </div>
      <button className="bg-blue-600 text-white rounded-md p-3 mt-3" onClick={() => setName("VINICIUS JUNGES")}>Mudar nome</button>
      <button className="bg-red-600 text-white rounded-md p-3 mt-3" onClick={() => setName("")}>Limpar nome</button>
      <button className="bg-green-600 text-white rounded-md p-3 mt-3" onClick={(useEffect) => setName("VINICIUS")}>Resetar nome</button>
    </div>
  );
}
