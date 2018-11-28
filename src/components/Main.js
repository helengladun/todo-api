import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import TodoListContainer from "../containers/TodoList";

const Main = () => {
  return (
      <main>
        <Switch>
          <Route exact path='/' render={() => <Redirect to="/todos" />}/>
          <Route path='/todos' component={TodoListContainer} />
        </Switch>
      </main>
  )
};

export default Main;
