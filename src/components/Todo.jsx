import React, { useContext, useRef } from "react";
import TodoItem from "./TodoItem";
import TodoContext from "../context/todoContext";
import TodoFilter from "./TodoFilter";

function Todo(props) {
  const todoText = useRef(null);
  const todoContext = useContext(TodoContext);
  return (
    <div className="container">
      <form className="row g-2">
        <div className="col-auto">
          <input
            className="form-control"
            type="text"
            ref={todoText}
            onChange={(e) => e.target.value}
          />
        </div>
        <div className="col-auto">
          <button
            type="submit"
            className="btn btn-primary mb-3"
            onClick={(e) => {
              e.preventDefault();
              todoContext.addTodo(todoText.current.value);
              todoText.current.value = "";
            }}
          >
            Add Task
          </button>
        </div>
      </form>
      <TodoItem />
      <TodoFilter />
    </div>
  );
}

export default Todo;
