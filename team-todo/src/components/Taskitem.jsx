import React from "react";

export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div className={`flex items-center justify-between bg-white p-3 rounded shadow ${task.completed ? "opacity-60" : ""}`}>
      <div>
        <div className="text-sm text-gray-500">Autor: {task.author}</div>
        <div className={`font-medium ${task.completed ? "line-through" : ""}`}>{task.text}</div>
      </div>
      <div className="flex gap-2">
        <button onClick={() => onToggle(task.id)} className="px-3 py-1 rounded border">
          {task.completed ? "Desmarcar" : "Completar"}
        </button>
        <button onClick={() => onDelete(task.id)} className="px-3 py-1 rounded bg-red-500 text-white">
          Eliminar
        </button>
      </div>
    </div>
  );
}
