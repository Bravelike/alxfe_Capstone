export const loadTodos = async () => {
  try {
    const stored = localStorage.getItem('todos-data');
    if (stored) {
      return JSON.parse(stored);
    }
    return [];
  } catch (error) {
    console.log('No existing todos');
    return [];
  }
};

export const saveTodos = async (todos) => {
  try {
    localStorage.setItem('todos-data', JSON.stringify(todos));
  } catch (error) {
    console.error('Error saving todos:', error);
  }
};