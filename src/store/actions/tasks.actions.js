import { axios } from '../../axios';

export const LOAD_ALL_SUCCESS = '[Tasks] LOAD_ALL_SUCCESS';
export const LOAD_TODAY_SUCCESS = '[Tasks] LOAD_TODAY_SUCCESS';
export const LOAD_WEEK_SUCCESS = '[Tasks] LOAD_WEEK_SUCCESS';
export const LOAD_COMPLETED_SUCCESS = '[Tasks] LOAD_COMPLETED_SUCCESS';
export const LOAD_TRASH_SUCCESS = '[Tasks] LOAD_TRASH_SUCCESS'; 
export const CREATE_SUCCESS = '[Task] CREATE_SUCCESS';
export const UPDATE_SUCCESS = '[Task] UPDATE_SUCCESS';
export const DELETE_SUCCESS = '[Task] DELETE_SUCCESS';
export const LOAD_SELECTED_SUCCESS = '[Task] SELECT_SUCCESS';
export const CLEAR_SELECTED = '[Task] CLEAR_SELECTED';
export const PATCH_SUCCESS = '[Task] PATCH_SUCCESS';

const taskUrl = '/task';
const tasksUrl = '/tasks';


export const loadAllTasks = () =>
  dispatch => axios.get(tasksUrl)
    .then(response => dispatch(loadAllTasksSuccess(response.data)))
    .catch(error => console.error(error));

export const loadAllTasksSuccess = tasks => ({
  type: LOAD_ALL_SUCCESS,
  payload: tasks
});

export const loadTodayTasks = () => {
  const fromDate = new Date();
  fromDate.setHours(0, 0, 0, 0);
  const toDate = new Date();
  toDate.setHours(0, 0, 0, 0);
  toDate.setDate(fromDate.getDate() + 1);

  return dispatch => axios.get(`${tasksUrl}?fromDate=${fromDate}toDate=${toDate}`)
    .then(response => dispatch(loadTodayTasksSuccess(response.data)))
    .catch(error => console.error(error));
}

export const loadTodayTasksSuccess = tasks => ({
  type: LOAD_TODAY_SUCCESS,
  payload: tasks
});

export const loadWeekTasks = () => {
  const fromDate = new Date();
  fromDate.setHours(0, 0, 0, 0);
  const toDate = new Date();
  toDate.setHours(0, 0, 0, 0);
  toDate.setDate(fromDate.getDate() + 7);
  return dispatch => axios.get(`${tasksUrl}?fromDate=${fromDate}toDate=${toDate}`)
    .then(response => dispatch(loadWeekTasksSuccess(response.data)))
    .catch(error => console.error(error));
}

export const loadWeekTasksSuccess = tasks => ({
  type: LOAD_WEEK_SUCCESS,
  payload: tasks
});

export const loadCompletedTasks = () =>
  dispatch => axios.get(`${tasksUrl}?filterByStatus=true`)
    .then(response => dispatch(loadCompletedTasksSuccess(response.data)))
    .catch(error => console.error(error));

export const loadCompletedTasksSuccess = tasks => ({
  type: LOAD_COMPLETED_SUCCESS,
  payload: tasks
});

export const loadTrashTasks = () =>
  dispatch => axios.get(`${tasksUrl}?filterByDeleted=true`)
    .then(response => dispatch(loadTrashTasksSuccess(response.data)))
    .catch(error => console.error(error));

export const loadTrashTasksSuccess = tasks => ({
  type: LOAD_TRASH_SUCCESS,
  payload: tasks
});

export const createTask = (task) =>
  dispatch => axios.post(taskUrl, task)
    .then(response => dispatch(createTaskSuccess(response.data)))
    .catch(error => console.error(error));

export const createTaskSuccess = task => ({
  type: CREATE_SUCCESS,
  payload: task
});

export const updateTask = (task) =>
  dispatch => axios.put(`${taskUrl}/${task._id}`, task)
    .then(_ => dispatch(updateTaskSuccess(task)))
    .catch(error => console.error(error));

export const updateTaskSuccess = task => ({
  type: UPDATE_SUCCESS,
  payload: task
});

export const deleteTask = (taskId) =>
  dispatch => axios.delete(`${taskUrl}/${taskId}`)
    .then(_ => dispatch(deleteTaskSuccess(taskId)))
    .catch(error => console.error(error));

export const deleteTaskSuccess = taskId => ({
  type: DELETE_SUCCESS,
  payload: taskId
});

export const loadTask = (taskId) =>
  dispatch => axios.get(`${taskUrl}/${taskId}`)
    .then(response => dispatch(loadTaskSuccess(response.data)))
    .catch(error => console.error(error));

export const loadTaskSuccess = taskId => ({
  type: LOAD_SELECTED_SUCCESS,
  payload: taskId
});

export const clearSelectedTask = () => ({
  type: CLEAR_SELECTED
});

export const patchTask = (taskId, patchDocument) =>
  dispatch => axios.put(`${taskUrl}/${taskId}`, patchDocument)
    .then(response => dispatch(patchTaskSuccess(response.data)))
    .catch(error => console.error(error));

export const patchTaskSuccess = task => ({
  type: PATCH_SUCCESS,
  payload: task
});


