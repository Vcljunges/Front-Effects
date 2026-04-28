'use client'
import { useReducer, useState } from "react";
import { listReducer } from "../reducers/listReducers";

export default function Reducer() {
    const [list, dispatch] = useReducer(listReducer, []);
    const [newText, setNewText] = useState("");
    const [editingId, setEditingId] = useState<number | null>(null);
    const [editText, setEditText] = useState("");

    const addNewItem = () => {
        if (newText.trim() === "") return;
        dispatch({ type: 'add', payload: newText });
        setNewText("");
    }

    const startEditing = (id: number, currentText: string) => {
        setEditingId(id);
        setEditText(currentText);
    }

    const saveEdit = (id: number) => {
        dispatch({ type: 'edit', payload: { id, newText: editText } });
        setEditingId(null);
        setEditText("");
    }

    const cancelEdit = () => {
        setEditingId(null);
        setEditText("");
    }

    const toggleItem = (id: number) => {
        dispatch({ type: 'toggle', payload: { id } });
    }

    const deleteItem = (id: number) => {
        dispatch({ type: 'delete', payload: { id } });
    }

    return (
        <div className="flex flex-col flex-1 items-center justify-center min-h-screen gap-5 p-5 bg-zinc-50 font-sans dark:bg-black">
            <h1 className="text-2xl font-bold">Lista de Tarefas</h1>
            <div className="flex flex-row gap-3 dark:bg-gray-900 bg-zinc-50 p-5 rounded-lg border border-zinc-200 dark:border-gray-700 w-full max-w-lg">
                <input
                    className="flex-1 border border-zinc-200 dark:border-gray-700 rounded-lg p-2"
                    type="text"
                    placeholder="Digite uma tarefa"
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && addNewItem()}
                />
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={addNewItem}>Adicionar</button>
            </div>
            <ul className="flex flex-col gap-3 dark:bg-gray-900 bg-zinc-50 p-5 rounded-lg border border-zinc-200 dark:border-gray-700 w-full max-w-lg">
                {list.map((t) => (
                    <li key={t.id} className="flex flex-row items-center gap-3 dark:bg-gray-800 bg-white p-3 rounded-lg border border-zinc-200 dark:border-gray-700">
                        <input
                            type="checkbox"
                            checked={t.done}
                            onChange={() => toggleItem(t.id)}
                        />
                        {editingId === t.id ? (
                            <>
                                <input
                                    className="flex-1 border border-zinc-200 dark:border-gray-700 rounded-lg p-2"
                                    type="text"
                                    value={editText}
                                    onChange={(e) => setEditText(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") saveEdit(t.id);
                                        if (e.key === "Escape") cancelEdit();
                                    }}
                                    autoFocus
                                />
                                <button className="bg-green-500 text-white px-4 py-2 rounded-lg" onClick={() => saveEdit(t.id)}>Salvar</button>
                                <button className="bg-gray-500 text-white px-2 py-2 rounded-lg" onClick={cancelEdit}>Cancelar</button>
                            </>
                        ) : (
                            <>
                                <span className={`flex-1 ${t.done ? "line-through text-gray-400" : ""}`}>
                                    {t.text}
                                </span>
                                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={() => startEditing(t.id, t.text)}>Editar</button>
                                <button className="bg-red-500 text-white px-4 py-2 rounded-lg" onClick={() => deleteItem(t.id)}>Excluir</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
