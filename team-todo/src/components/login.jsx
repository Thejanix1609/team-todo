import React, { useState } from "react";

export default function Login({ onLogin }) {
  const [name, setName] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    onLogin(name.trim());
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-2">Team To-Do</h1>
        <p className="text-center text-gray-500 mb-6">Crea y comparte tareas entre dos usuarios</p>

        <h2 className="text-lg font-semibold mb-2">Iniciar sesión</h2>
        <form onSubmit={submit} className="space-y-4">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Tu nombre (ej. Usuario A)"
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 outline-none"
          />
          <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
            Entrar
          </button>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => onLogin("Usuario A")}
              className="flex-1 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
            >
              Usuario A
            </button>
            <button
              type="button"
              onClick={() => onLogin("Usuario B")}
              className="flex-1 bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition"
            >
              Usuario B
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

