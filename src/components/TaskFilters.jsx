import React from 'react';

export default function TaskFilters({
  filter,
  setFilter,
  selectedCategory,
  setSelectedCategory,
  categories
}) {
  return (
    <>
      <div className="flex gap-2 mb-4 flex-wrap">
        <button
          onClick={() => setFilter('all')}
          className={`px-3 py-1 rounded ${
            filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter('active')}
          className={`px-3 py-1 rounded ${
            filter === 'active' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
        >
          Active
        </button>
        <button
          onClick={() => setFilter('completed')}
          className={`px-3 py-1 rounded ${
            filter === 'completed' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
        >
          Completed
        </button>
      </div>

      <div className="flex gap-2 mb-4 flex-wrap">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-3 py-1 rounded text-sm ${
            selectedCategory === 'all'
              ? 'bg-purple-500 text-white'
              : 'bg-gray-100'
          }`}
        >
          All Categories
        </button>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1 rounded text-sm ${
              selectedCategory === cat
                ? 'bg-purple-500 text-white'
                : 'bg-gray-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </>
  );
}
