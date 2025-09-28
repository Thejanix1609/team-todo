import React, { useState, useEffect } from "react";
import Login from "./components/login";
import TaskForm from "./components/TaskForm";
import SearchBar from "./components/SearchBar";
import TaskList from "./components/TaskList";

const TASKS_KEY = "team-todo-tasks";
const USER_KEY = "team-todo-user";

export default function App() {
  const [tasks, setTasks] = useState(() => {
    try {
      const raw = localStorage.getItem(TASKS_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  const [user, setUser] = useState(() => localStorage.getItem(USER_KEY) || "");
  const [query, setQuery] = useState("");
  const [showCompleted, setShowCompleted] = useState(true);

  useEffect(() => {
    localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    if (user) localStorage.setItem(USER_KEY, user);
    else localStorage.removeItem(USER_KEY);
  }, [user]);

  const addTask = (text) => {
    if (!user) return alert("Inicia sesión primero");
    const newTask = {
      id: Date.now().toString() + Math.random().toString(36).slice(2, 7),
      author: user,
      text,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTasks((t) => [newTask, ...t]);
  };

  const toggleComplete = (id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  // Filtrado por búsqueda y estado
  const filtered = tasks.filter((t) => {
    const matchesQuery =
      t.author.toLowerCase().includes(query.toLowerCase()) ||
      t.text.toLowerCase().includes(query.toLowerCase());
    const matchesCompleted = showCompleted ? true : !t.completed;
    return matchesQuery && matchesCompleted;
  });

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-3xl mx-auto">
        <header className="mb-4">
          <h1 className="text-3xl font-bold text-center text-indigo-600">
            Team To-Do
          </h1>
          <p className="text-center text-sm text-gray-600">
            Crea y comparte tareas entre dos usuarios
          </p>
        </header>

        {!user ? (
          <Login onLogin={(name) => setUser(name)} />
        ) : (
          <>
            <div className="mb-4 flex items-center justify-between">
              <div>Usuario: <strong>{user}</strong></div>
              <button
                onClick={() => setUser("")}
                className="text-sm text-red-600 hover:underline"
              >
                Cerrar sesión
              </button>
            </div>

            <TaskForm onAdd={addTask} />

            <SearchBar
              query={query}
              setQuery={setQuery}
              showCompleted={showCompleted}
              setShowCompleted={setShowCompleted}
            />

            <TaskList
              tasks={filtered}
              onToggle={toggleComplete}
              onDelete={deleteTask}
            />
          </>
        )}
      </div>
    </div>
  );
}

