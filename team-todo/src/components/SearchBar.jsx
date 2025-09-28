import React from "react";

export default function SearchBar({ query, setQuery, showCompleted, setShowCompleted }) {
  return (
    <div className="mb-4 flex gap-2 items-center">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar por autor o texto..."
        className="flex-1 border rounded p-2"
      />
      <label className="flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          checked={showCompleted}
          onChange={(e) => setShowCompleted(e.target.checked)}
        />
        Mostrar completadas
      </label>
    </div>
  );
}
