import React from 'react';
import { CheckCircle2, Circle, Trash2, Edit2, Archive } from 'lucide-react';
import { getPriorityColor, isOverdue } from '../utils/helpers';

export default function TodoItem({
  todo,
  editingId,
  editText,
  setEditText,
  onToggle,
  onDelete,
  onStartEdit,
  onSaveEdit,
  onArchive
}) {
  return (
    <div
      className={`flex items-center gap-3 p-3 border rounded-lg ${
        todo.completed ? 'bg-gray-50' : 'bg-white'
      }`}
    >
      <button onClick={() => onToggle(todo.id)}>
        {todo.completed ? (
          <CheckCircle2 className="text-green-500" size={24} />
        ) : (
          <Circle className="text-gray-400" size={24} />
        )}
      </button>
      
      {editingId === todo.id ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && onSaveEdit()}
          onBlur={onSaveEdit}
          className="flex-1 px-2 py-1 border rounded"
          autoFocus
        />
      ) : (
        <div className="flex-1">
          <span className={todo.completed ? 'line-through text-gray-400' : ''}>
            {todo.text}
          </span>
          <div className="flex gap-2 mt-1 flex-wrap">
            <span className={`text-xs px-2 py-1 rounded ${getPriorityColor(todo.priority)}`}>
              {todo.priority}
            </span>
            <span className="text-xs px-2 py-1 rounded bg-blue-50 text-blue-600">
              {todo.category}
            </span>
            {todo.dueDate && (
              <span
                className={`text-xs px-2 py-1 rounded ${
                  isOverdue(todo.dueDate)
                    ? 'bg-red-50 text-red-600'
                    : 'bg-gray-50 text-gray-600'
                }`}
              >
                Due: {new Date(todo.dueDate).toLocaleDateString()}
              </span>
            )}
          </div>
        </div>
      )}
      
      <button
        onClick={() => onStartEdit(todo)}
        className="p-2 text-blue-500 hover:bg-blue-50 rounded"
      >
        <Edit2 size={18} />
      </button>
      <button
        onClick={() => onArchive(todo.id)}
        className="p-2 text-gray-500 hover:bg-gray-50 rounded"
      >
        <Archive size={18} />
      </button>
      <button
        onClick={() => onDelete(todo.id)}
        className="p-2 text-red-500 hover:bg-red-50 rounded"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
}