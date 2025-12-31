import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { priorities } from '../utils/constants';

export default function TaskInput({ onAdd, selectedCategory }) {
  const [newTodo, setNewTodo] = useState('');
  const [selectedPriority, setSelectedPriority] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleAdd = () => {
    if (newTodo.trim()) {
      onAdd({
        text: newTodo,
        category: selectedCategory === 'all' ? 'Other' : selectedCategory,
        priority: selectedPriority || 'Medium',
        dueDate: dueDate || null
      });
      setNewTodo('');
      setSelectedPriority('');
      setDueDate('');
    }
  };

  return (
    <div className="flex gap-2 mb-4">
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleAdd()}
        placeholder="Add a new task..."
        className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <select
        value={selectedPriority}
        onChange={(e) => setSelectedPriority(e.target.value)}
        className="px-3 py-2 border rounded-lg"
      >
        <option value="">Priority</option>
        {priorities.map(p => (
          <option key={p} value={p}>{p}</option>
        ))}
      </select>
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="px-3 py-2 border rounded-lg"
      />
      <button
        onClick={handleAdd}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center gap-2"
      >
        <Plus size={20} /> Add
      </button>
    </div>
  );
}
