import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TasksPage from './components/TasksPage';
import StatsPage from './components/StatsPage';
import ArchivePage from './components/ArchivePage';
import { loadTodos, saveTodos } from './utils/storage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('tasks');
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const loaded = await loadTodos();
      setTodos(loaded);
    };
    fetchTodos();
  }, []);

  const updateTodos = async (updatedTodos) => {
    await saveTodos(updatedTodos);
    setTodos(updatedTodos);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <div className="max-w-6xl mx-auto p-4">
        {currentPage === 'tasks' && (
          <TasksPage todos={todos} updateTodos={updateTodos} />
        )}
        {currentPage === 'stats' && (
          <StatsPage todos={todos} />
        )}
        {currentPage === 'archive' && (
          <ArchivePage todos={todos} updateTodos={updateTodos} />
        )}
      </div>
    </div>
  );
}