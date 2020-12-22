import * as TasksActions from '../actions/tasks.actions';

const initialState = {
  tasks: [],
  areTasksLoaded: false,
  selectedTask: null
};

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case TasksActions.LOAD_ALL_SUCCESS:
    case TasksActions.LOAD_TODAY_SUCCESS:
    case TasksActions.LOAD_WEEK_SUCCESS:
    case TasksActions.LOAD_COMPLETED_SUCCESS:
    case TasksActions.LOAD_TRASH_SUCCESS:
      return addTasks(state, action.payload);
    case TasksActions.CREATE_SUCCESS:
      return addTask(state, action.payload);
    case TasksActions.UPDATE_SUCCESS:
      return updateTask(state, action.payload);
    case TasksActions.deleteTaskSuccess:
      return removeTask(state, action.payload);
    case TasksActions.LOAD_SELECTED_SUCCESS:
      return selectTask(state, action.payload);
    case TasksActions.CLEAR_SELECTED:
      return unselectTask(state);
    case TasksActions.PATCH_SUCCESS:
      return updateTask(state, action.payload);
    default:
      return state;
  }
};

const addTasks = (state, tasks) => ({ ...state, tasks });
const addTask = (state, task) => ({ ...state, tasks: state.tasks.concat([task]) });
const updateTask = (state, task) => ({ ...state, tasks: state.tasks.map(t => t._id === task._id ? task : t) });
const removeTask = (state, taskId) => ({ ...state, tasks: state.tasks.filter(t => t._id !== taskId) });
const selectTask = (state, task) => ({ ...state, selectedTask: task });
const unselectTask = (state) => ({ ...state, selectedTask: null });

