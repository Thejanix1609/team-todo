import React from "react";
import TaskItem from "./Taskitem";

export default function TaskList({ tasks, onToggle, onDelete }) {
  if (!tasks.length) {
    return <div className="text-center text-gray-500">No hay tareas.</div>;
  }

  return (
    <div className="space-y-2">
      {tasks.map((t) => (
        <TaskItem key={t.id} task={t} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </div>
  );
}
