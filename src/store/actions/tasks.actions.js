const LOAD = '[Tasks] LOAD';
const LOAD_SUCCESS = '[Tasks] LOAD_SUCCESS';
const LOAD_ALL = '[Tasks] LOAD_ALL';
const LOAD_ALL_SUCCESS = '[Tasks] LOAD_ALL_SUCCESS';
const LOAD_TODAY = '[Tasks] LOAD_TODAY';
const LOAD_TODAY_SUCCESS = '[Tasks] LOAD_TODAY_SUCCESS';
const LOAD_WEEK = '[Tasks] LOAD_WEEK';
const LOAD_WEEK_SUCCESS = '[Tasks] LOAD_WEEK_SUCCESS';
const LOAD_COMPLETED = '[Tasks] LOAD_COMPLETED';
const LOAD_COMPLETED_SUCCESS = '[Tasks] LOAD_COMPLETED_SUCCESS';
const LOAD_TRASH = '[Tasks] LOAD_TRASH';
const LOAD_TRASH_SUCCESS = '[Tasks] LOAD_TRASH_SUCCESS';

const CREATE = '[Task] CREATE';
const CREATE_SUCCESS = '[Task] CREATE_SUCCESS';
const UPDATE = '[Task] UPDATE';
const UPDATE_SUCCESS = '[Task] UPDATE_SUCCESS';
const DELETE = '[Task] DELETE';
const DELETE_SUCCESS = '[Task] DELETE_SUCCESS';
const LOAD_SELECTED = '[Task] LOAD_SELECTED';
const LOAD_SELECTED_SUCCESS = '[Task] SELECT_SUCCESS';
const CLEAR_SELECTED = '[Task] CLEAR_SELECTED';
const PATCH = '[Task] PATCH';
const PATCH_SUCCESS = '[Task] PATCH_SUCCESS';

export const loadTasks = () => ({
  type: LOAD
});

export const loadTasksSuccess = (tasks) => ({
  type: LOAD_SUCCESS,
  payload: tasks
});

export const loadAllTasks = () => ({
  type: LOAD_ALL
});

export const loadAllTasksSuccess = tasks => ({
  type: LOAD_ALL_SUCCESS,
  payload: tasks
});

export const loadTodayTasks = () => ({
  type: LOAD_TODAY
});

export const loadTodayTasksSuccess = tasks => ({
  type: LOAD_TODAY_SUCCESS,
  payload: tasks
});

export const loadWeekTasks = () => ({
  type: LOAD_WEEK
});

export const loadWeekTasksSuccess = tasks => ({
  type: LOAD_WEEK_SUCCESS,
  payload: tasks
});

export const loadCompletedTasks = () => ({
  type: LOAD_COMPLETED
});

export const loadCompletedTasksSuccess = tasks => ({
  type: LOAD_COMPLETED_SUCCESS,
  payload: tasks
});

export const loadTrashTasks = () => ({
  type: LOAD_TRASH
})

export const loadTrashTasksSuccess = tasks => ({
  type: LOAD_TRASH_SUCCESS,
  payload: tasks
});

export const createTask = task => ({
  type: CREATE,
  payload: task
});

export const createTaskSuccess = task => ({
  type: CREATE_SUCCESS,
  payload: task
});

export const updateTask = task => ({
  type: UPDATE,
  payload: task
});

export const updateTaskSuccess = task => ({
  type: UPDATE_SUCCESS,
  payload: task
});

export const deleteTask = taskId => ({
  type: DELETE,
  payload: taskId
});

export const deleteTaskSuccess = taskId => ({
  type: DELETE_SUCCESS,
  payload: taskId
});

export const loadTask = taskId => ({
  type: LOAD_SELECTED,
  payload: taskId
});

export const loadTaskSuccess = taskId => ({
  type: LOAD_SELECTED_SUCCESS,
  payload: taskId
});

export const clearSelectedTask = () => ({
  type: CLEAR_SELECTED
});

export const patchTask = patchObj => ({
  type: PATCH,
  payload: { taskId: patchObj.taskId, patchDocument: patchObj.patchDocument }
});

export const patchTaskSuccess = task => ({
  type: PATCH_SUCCESS,
  payload: task
});


