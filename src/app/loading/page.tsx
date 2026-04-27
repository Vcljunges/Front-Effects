'use client'
import { useEffect, useState } from "react";

export default function Loading() {
  const [name, setName] = useState("Vinicius");
  const [age, setAge] = useState(19);

  useEffect(() => {
    console.log("Esse é meu nome: " + name);
  }, [name]);

  useEffect(() => {
    console.log("Aumentou, diminuiu ou resetou a idade: " + age);
  }, [age]);

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <p>Nome: {name}</p>
      <p>Idade: {age}</p>
      <button className="bg-blue-600 text-white rounded-md p-3 mt-3" onClick={() => setName("Vinicius Junges")}>Nome completo</button>
      <button className="bg-blue-600 text-white rounded-md p-3 mt-3" onClick={() => setName("Vinicius")}>Nome</button>
      <button className="bg-red-600 text-white rounded-md p-3 mt-3" onClick={() => setAge(age + 1)}>Aumentar idade</button>
      <button className="bg-red-600 text-white rounded-md p-3 mt-3" onClick={() => setAge(age - 1)}>Diminuir idade</button>
      <button className="bg-green-600 text-white rounded-md p-3 mt-3" onClick={() => setAge(19)}>Resetar idade</button>
    </div>
  );
}
