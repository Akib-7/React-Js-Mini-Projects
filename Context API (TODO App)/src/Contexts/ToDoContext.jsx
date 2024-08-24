import { createContext, useContext, useEffect, useState } from "react";

const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  {
    /**
    IMPORTANT READ FIRST !
    The check in the second useEffect is used to prevent saving an empty array to localStorage when the component first mounts. Even though the first useEffect runs first to load data, React triggers the second useEffect immediately after the initial render, before the todos are populated. Without the check, the empty initial state would overwrite any existing data in localStorage.
    */
  }
  // Load todos from localStorage when the app loads
  useEffect(() => {
    const savedTodos = localStorage.getItem("savedTodos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
      console.log("Getting DATA");
    }
  }, []);
  // Saving todos in local Storage
  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("savedTodos", JSON.stringify(todos));
      console.log("Saving DATA");
      console.log(todos);
    }
  }, [todos]);

  const toggleComplete = (todo, status) => {
    setTodos(
      todos.map((item) =>
        item.id === todo.id ? { ...item, completed: status } : item
      )
    );
  };

  const add = (text) => {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        msg: text,
        completed: false,
      },
    ]);
  };

  const del = (todo) => {
    const filteredTodos = todos.filter((item) => item.id !== todo.id);
    setTodos(filteredTodos);
  };

  const save = (todo, newMsg) => {
    setTodos(
      todos.map((item) =>
        item.id === todo.id ? { ...item, msg: newMsg } : item
      )
    );
  };

  return (
    <TodoContext.Provider value={{ todos, add, del, save, toggleComplete }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => {
  return useContext(TodoContext);
};
