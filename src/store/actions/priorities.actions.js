import { axios } from '../../axios';

export const LOAD_SUCCESS = '[Priorities] LOAD_SUCCESS';

export const loadPriorities = () =>
  dispatch => axios.get()
    .then(priorities => dispatch(loadPrioritiesSuccess(priorities)))
    .catch(error => console.error(error));


export const loadPrioritiesSuccess = (priorities) => ({
  type: LOAD_SUCCESS,
  payload: priorities
});

