import { useState, useEffect } from "react";
import Header from "./components/Header";
import TaskPage from "./components/TaskPage";


export default function TodoApp() {
  const [currentPage, setCurrentPage] = useState("tasks");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("todos");
    if (stored) setTodos(JSON.parse(stored));
  }, []);

  const saveTodos = (updated) => {
    setTodos(updated);
    localStorage.setItem("todos", JSON.stringify(updated));
  };

  const addTodo = (todo) => saveTodos([...todos, todo]);

  const toggleTodo = (id) => {
    saveTodos(
      todos.map(t =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTodo = (id) => {
    saveTodos(todos.filter(t => t.id !== id));
  };

  const archiveTodo = (id) => {
    saveTodos(
      todos.map(t =>
        t.id === id ? { ...t, archived: true } : t
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <div className="max-w-6xl mx-auto p-4">
        {currentPage === "tasks" && (
          <TaskPage
            todos={todos}
            addTodo={addTodo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            archiveTodo={archiveTodo}
          />
        )}

        
      </div>
    </div>
  );
}
