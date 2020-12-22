import * as PrioritiesActions from '../actions/priorities.actions';

const initialState = {
  priorities: []
};

export const prioritiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case PrioritiesActions.loadPrioritiesSuccess:
      return addPriorities(state, action.payload);
    default:
      return state;
  }
}

const addPriorities = (state, priorities) => ({ ...state, priorities });

