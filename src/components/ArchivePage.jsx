import React from 'react';
import { CheckCircle2, Trash2 } from 'lucide-react';
import { getPriorityColor } from '../utils/helpers';

export default function ArchivePage({ todos, updateTodos }) {
  const archivedTodos = todos.filter(t => t.archived);

  const unarchiveTodo = (id) => {
    updateTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, archived: false } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    updateTodos(todos.filter(todo => todo.id !== id));
  };
  
  return (
    <div className="space-y-4">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-4">Archived Tasks</h2>
        
        <div className="space-y-2">
          {archivedTodos.length === 0 ? (
            <p className="text-gray-400 text-center py-8">No archived tasks</p>
          ) : (
            archivedTodos.map(todo => (
              <div
                key={todo.id}
                className="flex items-center gap-3 p-3 border rounded-lg bg-gray-50"
              >
                <CheckCircle2
                  className={todo.completed ? 'text-green-500' : 'text-gray-400'}
                  size={24}
                />
                <div className="flex-1">
                  <span className={todo.completed ? 'line-through text-gray-400' : ''}>
                    {todo.text}
                  </span>
                  <div className="flex gap-2 mt-1">
                    <span className={`text-xs px-2 py-1 rounded ${getPriorityColor(todo.priority)}`}>
                      {todo.priority}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-blue-50 text-blue-600">
                      {todo.category}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => unarchiveTodo(todo.id)}
                  className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
                >
                  Restore
                </button>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="p-2 text-red-500 hover:bg-red-50 rounded"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
