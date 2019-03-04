import { fromJS } from 'immutable';

const defaultState = {
  loading: false,
  loaded: false,
  data: null,
  error: null,
};

export default actionType => {
  return (state, action) => {
    const nextState = state || fromJS(defaultState);
    switch(action.type) {
      case `${actionType}_REQUEST`:
        return nextState.merge({ loading: true });
      case `${actionType}_SUCCESS`:
        return nextState.merge({ loading: false, loaded: true, data: action.data });
      case `${actionType}_FAILURE`:
        return nextState.merge({ loading: false, loaded: false, error: action.error });
      default:
        return nextState;
    }
  };
};