export const getPriorityColor = (priority) => {
  switch (priority) {
    case 'High':
      return 'text-red-600 bg-red-50';
    case 'Medium':
      return 'text-yellow-600 bg-yellow-50';
    case 'Low':
      return 'text-green-600 bg-green-50';
    default:
      return 'text-gray-600 bg-gray-50';
  }
};

export const isOverdue = (date) => {
  return date && new Date(date) < new Date();
};

export const getStats = (todos, categories) => {
  const active = todos.filter(t => !t.completed && !t.archived);
  const completed = todos.filter(t => t.completed && !t.archived);
  const archived = todos.filter(t => t.archived);
  const byCategory = categories.map(cat => ({
    name: cat,
    count: active.filter(t => t.category === cat).length
  }));
  const highPriority = active.filter(t => t.priority === 'High').length;
  const overdue = active.filter(t => t.dueDate && new Date(t.dueDate) < new Date()).length;
  
  return { active: active.length, completed: completed.length, archived: archived.length, byCategory, highPriority, overdue };
};