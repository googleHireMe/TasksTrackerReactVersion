import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import { Component } from 'react';
import TasksScreen from './Containers/TasksScreen/TasksScreen';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { prioritiesReducer } from './store/reducers/priorities.reducer';
import { tasksReducer } from './store/reducers/tasks.reducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { ConnectedRouter } from 'connected-react-router';

const history = createBrowserHistory();

const createRootReducer = (history) => combineReducers({
  tasks: tasksReducer,
  priorities: prioritiesReducer,
  router: connectRouter(history),
});

const configureStore = (preloadedState) => createStore(
  createRootReducer(history),
  composeWithDevTools(applyMiddleware(routerMiddleware(history), thunk))
);

const store = configureStore();

export class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
              <Route path="/tasks" component={TasksScreen}></Route>
              <Route exact path="/" component={TasksScreen}></Route>
            </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}
