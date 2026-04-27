'use client'
import { useEffect, useState } from "react";
import { Item } from "../types/item";


export default function Reducer() {
    const [list, setList] = useState<Item[]>([]);

    const addNewItem = () => {
        setList([...list, {id: list.length, text: "", done: false}]);
    }

    const editItemText = (id: number, newText: string) => {
        setList(list.map((t) => {
            if(t.id === id) t.text = newText;
            return t;
        }));
    }

    const toggleItem = (id: number) => {
        setList(list.map((t) => {
            if(t.id === id) t.done = !t.done;
            return t;
        }));
    }

    const deleteItem = (id: number) => {
        setList(list.filter((t) => t.id !== id));
    }

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <ul className="flex flex-col gap-3">
            {list.map((item) => (
                <li key={item.id}>
                    <input className="border border-zinc-200 rounded-md p-3 mt-3" type="text" value={item.text} onChange={(e) => editItemText(item.id, e.target.value)} />
                    <input className="border border-zinc-200 rounded-md p-3 mt-3" type="checkbox" checked={item.done} onChange={() => toggleItem(item.id)} />
                    <button className="bg-red-600 text-white rounded-md p-3 mt-3" onClick={() => deleteItem(item.id)}>Deletar</button>
                </li>
            ))}
        </ul>
        <button className="bg-blue-600 text-white rounded-md p-3 mt-3" onClick={addNewItem}>Adicionar item</button>
    </div>
  );
}
