import React from "react";
import { Link } from "react-router-dom";

const TodoList = ({ match, todoList }) => (
    <div>
      <h2>Todos List</h2>
      <ul>
        {todoList.length > 0 && todoList.map((item, index) => {
          return (
              <li key={`${index+1}`}>
                <span>{`${index+1}`}. </span>
                <Link to={{ pathname: `${match.url}/${index+1}`, state: { todo: `${item}` } }}>
                  {`${item}`}
                </Link>
              </li>
          )
        })}
      </ul>
    </div>
);

export default TodoList;