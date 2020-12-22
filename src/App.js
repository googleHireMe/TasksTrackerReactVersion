import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Component } from 'react';
import TasksScreen from './Containers/TasksScreen/TasksScreen';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { prioritiesReducer } from './store/reducers/priorities.reducer';
import { tasksReducer } from './store/reducers/tasks.reducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReduces = combineReducers({
  tasks: tasksReducer,
  priorities: prioritiesReducer
})

const store = createStore(rootReduces, composeWithDevTools(applyMiddleware(thunk)));

export class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/tasks" component={TasksScreen}></Route>
            <Route exact path="/" component={TasksScreen}></Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}
