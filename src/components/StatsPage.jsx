import React from 'react';
import { categories } from '../utils/constants';
import { getStats } from '../utils/helpers';

export default function StatsPage({ todos }) {
  const stats = getStats(todos, categories);
  
  return (
    <div className="space-y-4">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-6">Statistics</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="text-3xl font-bold text-blue-600">{stats.active}</div>
            <div className="text-sm text-gray-600">Active Tasks</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="text-3xl font-bold text-green-600">{stats.completed}</div>
            <div className="text-sm text-gray-600">Completed</div>
          </div>
          <div className="bg-red-50 p-4 rounded-lg">
            <div className="text-3xl font-bold text-red-600">{stats.highPriority}</div>
            <div className="text-sm text-gray-600">High Priority</div>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <div className="text-3xl font-bold text-yellow-600">{stats.overdue}</div>
            <div className="text-sm text-gray-600">Overdue</div>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-4">Tasks by Category</h3>
        <div className="space-y-2">
          {stats.byCategory.map(cat => (
            <div key={cat.name} className="flex items-center gap-3">
              <div className="w-32 text-sm font-medium">{cat.name}</div>
              <div className="flex-1 bg-gray-200 rounded-full h-6">
                <div
                  className="bg-blue-500 h-6 rounded-full flex items-center justify-end px-2"
                  style={{
                    width: `${stats.active > 0 ? (cat.count / stats.active) * 100 : 0}%`
                  }}
                >
                  <span className="text-xs text-white font-semibold">{cat.count}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
