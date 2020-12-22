import * as TasksActions from '../actions/tasks.actions';

const initialState = {
  tasks: [],
  areTasksLoaded: false,
  selectedTask: null
};

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case TasksActions.loadAllTasksSuccess().type:
    case TasksActions.loadTodayTasksSuccess:
    case TasksActions.loadWeekTasksSuccess:
    case TasksActions.loadCompletedTasksSuccess:
    case TasksActions.loadTrashTasksSuccess:
      debugger;
      return addTasks(state, action.payload);
    case TasksActions.createTaskSuccess:
      return addTask(state, action.payload);
    case TasksActions.updateTaskSuccess:
      return updateTask(state, action.payload);
    case TasksActions.deleteTaskSuccess:
      return removeTask(state, action.payload);
    case TasksActions.loadTaskSuccess:
      return selectTask(state, action.payload);
    case TasksActions.clearSelectedTask:
      return unselectTask(state);
    case TasksActions.patchTaskSuccess:
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

