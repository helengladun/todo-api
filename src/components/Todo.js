import React, { Component } from "react";
import { Link } from "react-router-dom";

class Todo extends Component {
  constructor(props) {
    super(props);
  }

  handleUpdate = () => {
    const id = this.props.match.params.id - 1;
    const input = document.querySelector('#add-input');
    const button = document.querySelector('#add-button');
    input.value = this.props.todoList[id];
    button.innerText = 'Update';
    input.dataset.todoId = id;
  };

  render () {
    const { match, todoList, removeHandler } = this.props;
    const todoId = match.params.id-1;
    const todo = todoList[todoId];

    return (
        <div>
          <h2>Todo: {match.params.id}</h2>
          <h3>Title: {todo}</h3>
          <button onClick={this.handleUpdate}>Update</button>
          <button onClick={() => removeHandler(todoId)}>Remove</button>
          <div>
            <Link to='/todos'>Back</Link>
          </div>
        </div>
    )
  }
};

export default Todo;