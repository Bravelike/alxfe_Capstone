import React from 'react';
import { List, BarChart3, Archive } from 'lucide-react';

export default function Header({ currentPage, setCurrentPage }) {
  return (
    <div className="bg-blue-600 text-white p-4 shadow-lg">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Todo Master</h1>
        <nav className="flex gap-2">
          <button
            onClick={() => setCurrentPage('tasks')}
            className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
              currentPage === 'tasks' ? 'bg-white text-blue-600' : 'bg-blue-700'
            }`}
          >
            <List size={20} /> Tasks
          </button>
          <button
            onClick={() => setCurrentPage('stats')}
            className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
              currentPage === 'stats' ? 'bg-white text-blue-600' : 'bg-blue-700'
            }`}
          >
            <BarChart3 size={20} /> Statistics
          </button>
          <button
            onClick={() => setCurrentPage('archive')}
            className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
              currentPage === 'archive' ? 'bg-white text-blue-600' : 'bg-blue-700'
            }`}
          >
            <Archive size={20} /> Archive
          </button>
        </nav>
      </div>
    </div>
  );
}
