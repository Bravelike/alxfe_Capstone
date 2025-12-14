import { useState } from "react";

export default function TaskPage({
  todos,
  addTodo,
  toggleTodo,
  deleteTodo,
  archiveTodo
}) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (!text.trim()) return;

    addTodo({
      id: Date.now(),
      text,
      completed: false,
      archived: false
    });

    setText("");
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">My Tasks</h2>

      <div className="flex gap-2 mb-4">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-1 border p-2 rounded"
          placeholder="Add task"
        />
        <button onClick={handleAdd} className="bg-blue-500 text-white px-4 rounded">
          Add
        </button>
      </div>

      {todos.filter(t => !t.archived).map(todo => (
        <div key={todo.id} className="flex gap-3 mb-2">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
          <span className={todo.completed ? "line-through" : ""}>
            {todo.text}
          </span>
          <button onClick={() => archiveTodo(todo.id)}>Archive</button>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
