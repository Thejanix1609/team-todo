import React, { useState } from "react";

export default function TaskForm({ onAdd }) {
  const [text, setText] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text.trim());
    setText("");
  };

  return (
    <form onSubmit={submit} className="mb-6 bg-white p-6 rounded-xl shadow-lg">
  <textarea
    value={text}
    onChange={(e) => setText(e.target.value)}
    placeholder="Escribe la tarea..."
    className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 outline-none mb-3"
  />
  <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
    Agregar tarea
  </button>
</form>
  );
}
