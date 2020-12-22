import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Component } from 'react';
import { TasksScreen } from './Containers/TasksScreen/TasksScreen';

export class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/tasks" component={TasksScreen}></Route>
          <Route exact  path="/" component={TasksScreen}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
