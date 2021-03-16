import React, { useContext } from "react";
import TodoContext from "../context/todoContext";

function TodoItem(props) {
  const todoContext = useContext(TodoContext);
  return (
    <div className="d-grid gap-3">
      {todoContext.data.map((item, index) => (
        <div key={index} className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value={item.done}
            onChange={() => todoContext.completeTodo(item.task)}
          />
          <label className="form-check-label">{item.task}</label>
        </div>
      ))}
    </div>
  );
}

export default TodoItem;
