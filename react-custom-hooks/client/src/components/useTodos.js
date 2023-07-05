import { useEffect, useState } from 'react';

export function useTodos() {
  const [todos, setTodos] = useState();
  const [error, setError] = useState();
  useEffect(() => {
    const getTodos = async () => {
      try {
        const response = await readTodos();
        setTodos(response);
      } catch (err) {
        setError(err);
      }
    };
    if (!todos) getTodos();
  }, [todos]);

  async function addTodo(newTodo) {
    try {
      const todoItem = await createTodo(newTodo);
      setTodos([...todos, todoItem]);
    } catch (err) {
      setError(err);
    }
  }

  async function toggleCompleted(todoId) {
    try {
      const filteredTodos = todos.filter((todo) => todo.todoId === todoId);
      filteredTodos[0].isCompleted = !filteredTodos[0].isCompleted;
      const completedTodo = await updateTodo(filteredTodos[0]);
      const updatedTodo = todos.map((todo) =>
        completedTodo.todoId === todo.todoId ? completedTodo : todo
      );
      setTodos(updatedTodo);
    } catch (err) {
      setError(err);
    }
  }

  return {
    isLoading: todos === undefined && error === undefined,
    error,
    todos,
    addTodo,
    toggleCompleted,
  };
}

async function readTodos() {
  const res = await fetch('/api/todos');
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return await res.json();
}

async function createTodo(todo) {
  const req = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(todo),
  };
  const res = await fetch('/api/todos', req);
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return await res.json();
}

async function updateTodo(todo) {
  const req = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ isCompleted: todo.isCompleted }),
  };
  const res = await fetch(`/api/todos/${todo.todoId}`, req);
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return await res.json();
}
