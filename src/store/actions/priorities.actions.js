import { axios } from '../../axios';

export const LOAD_SUCCESS = '[Priorities] LOAD_SUCCESS';
export const prioritiesUrl = '/priorities';

export const loadPriorities = () =>
  dispatch => axios.get(`${prioritiesUrl}`)
    .then(response => dispatch(loadPrioritiesSuccess(response.data)))
    .catch(error => console.error(error));


export const loadPrioritiesSuccess = (priorities) => ({
  type: LOAD_SUCCESS,
  payload: priorities
});

