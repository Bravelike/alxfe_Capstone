import React, { useState } from 'react';
import TaskFilters from './TaskFilters';
import TaskInput from './TaskInput';
import TodoItem from './TodoItem';
import { categories } from '../utils/constants';

export default function TasksPage({ todos, updateTodos }) {
  const [filter, setFilter] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  const addTodo = (newTodo) => {
    const todo = {
      id: Date.now(),
      text: newTodo.text,
      completed: false,
      category: newTodo.category,
      priority: newTodo.priority,
      dueDate: newTodo.dueDate,
      createdAt: new Date().toISOString(),
      archived: false
    };
    updateTodos([...todos, todo]);
  };

  const toggleTodo = (id) => {
    updateTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    updateTodos(todos.filter(todo => todo.id !== id));
  };

  const startEdit = (todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  const saveEdit = () => {
    updateTodos(
      todos.map(todo =>
        todo.id === editingId ? { ...todo, text: editText } : todo
      )
    );
    setEditingId(null);
    setEditText('');
  };

  const archiveTodo = (id) => {
    updateTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, archived: true } : todo
      )
    );
  };

  const clearCompleted = () => {
    updateTodos(todos.filter(todo => !todo.completed));
  };

  const getFilteredTodos = () => {
    return todos.filter(todo => {
      if (todo.archived) return false;
      
      const matchesFilter =
        filter === 'all' ? true :
        filter === 'active' ? !todo.completed :
        todo.completed;
      const matchesCategory =
        selectedCategory === 'all' || todo.category === selectedCategory;
      return matchesFilter && matchesCategory;
    });
  };

  const filteredTodos = getFilteredTodos();

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-4">My Tasks</h2>
        
        <TaskFilters
          filter={filter}
          setFilter={setFilter}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          categories={categories}
        />

        <TaskInput onAdd={addTodo} selectedCategory={selectedCategory} />

        <div className="space-y-2">
          {filteredTodos.length === 0 ? (
            <p className="text-gray-400 text-center py-8">No tasks found</p>
          ) : (
            filteredTodos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                editingId={editingId}
                editText={editText}
                setEditText={setEditText}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
                onStartEdit={startEdit}
                onSaveEdit={saveEdit}
                onArchive={archiveTodo}
              />
            ))
          )}
        </div>

        {todos.filter(t => t.completed && !t.archived).length > 0 && (
          <button
            onClick={clearCompleted}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Clear Completed
          </button>
        )}
      </div>
    </div>
  );
}
