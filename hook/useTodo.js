import { useEffect, useReducer } from "react";

import { todoReducer } from "../08-useReducer/todoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodo = () => {
  const [todos, dispatchTodos] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos) || []);
  }, [todos]);

  const addTodo = (todo) => {
    const action = {
      type: "[TODO] add TODO",
      payload: todo,
    };

    dispatchTodos(action);
    console.log(todo);
  };

  const deleteTodo = (id) => {
    dispatchTodos({
      type: "[TODO] delete TODO",
      payload: id,
    });
  };
  const toogleDoneTodo = (id) => {
    dispatchTodos({
      type: "[TODO] done TODO",
      payload: id,
    });
  };
  return {
    todos,
    pendingTodo: todos.filter((todo) => !todo.done).length,
    addTodo,
    deleteTodo,
    toogleDoneTodo,
  };
  {
    /* En pendingTodo le decimos que cuente o me filtre los elementos que esten en false y me diga cuantos hay */
  }
};
