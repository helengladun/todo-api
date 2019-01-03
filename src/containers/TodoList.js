import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import TodoList from "../components/TodoList";
import Todo from "../components/Todo";
import * as todoActions from '../actions/index';
import styled from "styled-components";

const AddButton = styled.button`
  background: grey;
  border: 1px solid darkgrey;
`;

class TodoListContainer extends Component {
  changeTodo = value => {
    this.props.todoActions.changeInput(value);
  };

  addNewTodo = () => {
    const { todo, todoActions } = this.props;
    const button = document.querySelector('#add-button');
    const buttonText = button.innerText.toLowerCase();
    const input = document.querySelector('#add-input');

    if (buttonText === 'add' && todo) {
      todoActions.addTodo(todo);

      this.clearInput(input);
      this.addFocus(input);
    }

    if (buttonText === 'update' && todo) {
      const todoId = input.dataset.todoId;
      this.updateTodo(todoId, todo);
      button.innerText = 'Add';

      this.clearInput(input);
    }
  };

  clearInput = input => {
    input.value = '';
  };

  addFocus = input => {
    input.focus();
  };

  updateTodo = (index, value) => {
    let { todoList, todoActions } = this.props;

    if (todoList[index]) {
      todoActions.updateTodo(index, value);
    }
  };

  removeHandler = index => {
    let { todoList, todoActions, history } = this.props;
    if (todoList[index]) {
      todoActions.removeTodo(index)
    }

    history.push(`/todos`);
  };

  render() {
    const { todoList } = this.props;
    return (
      <div>
        <h1>Add Todo </h1>
        <input id="add-input" type="text" onChange={(e) => this.changeTodo(e.target.value)}/>
        <AddButton id="add-button" onClick={this.addNewTodo}>Add</AddButton>

        <Switch>
          <Route exact path='/todos' render={(props) => (todoList.length > 0 && <TodoList {...props} todoList={todoList}/>)}/>
          <Route path='/todos/:id' render={(props) => (<Todo {...props} updateHandler={this.updateTodo} removeHandler={this.removeHandler} todoList={todoList}/>)} />
        </Switch>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    todo: state.todo,
    todoList: state.todoList
  }
}

function mapDispatchToProps(dispatch) {
  return {
    todoActions: bindActionCreators(todoActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);