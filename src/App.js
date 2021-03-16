import { useState } from 'react';
import Todo from './components/Todo';
import TodoContext from './context/todoContext';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App(props) {
  const [todos, setTodos] = useState([]);
  const [data, setData] = useState([]);

  let contextValue = {
    todos,
    data,
    addTodo: (taskName) => {
      setTodos([...todos, { task: taskName, done: false }]);
      setData([...todos]);
    },
    completeTodo: (taskName) => {
      const updatedTodos = [...todos];
      const index = updatedTodos.findIndex((item) => item.task === taskName);
      updatedTodos[index].done = true;
      setTodos([...updatedTodos]);
      setData([...todos]);
    },
    showAll: () => {
      setData([...todos]);
    },
    showCompleted: () => setData([...todos.filter(item => item.done)]),
    showPending: () => setData([...todos.filter(item => !item.done)])
  };

  return (
    <TodoContext.Provider value={{ ...contextValue }}>
      <Todo />
    </TodoContext.Provider>
  );
}

export default App;
