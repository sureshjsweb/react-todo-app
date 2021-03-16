import React, { useContext } from "react";
import TodoContext from "../context/todoContext";

function TodoFilter() {
  const todoContext = useContext(TodoContext);
  return (
    <div>
      <span
        className="mx-3"
        style={{ cursor: "pointer" }}
        onClick={() => todoContext.showAll()}
      >
        All
      </span>
      |
      <span
        className="mx-3"
        style={{ cursor: "pointer" }}
        onClick={() => todoContext.showCompleted()}
      >
        Completed
      </span>
      |
      <span
        className="mx-3"
        style={{ cursor: "pointer" }}
        onClick={() => todoContext.showPending()}
      >
        Pending
      </span>
    </div>
  );
}

export default TodoFilter;
