import { createStore } from 'redux';

function makeAction(original, tail) {
  const { type, ...rest } = original;
  return {
    type: `${type}_${tail}`,
    ...rest,
  };
}

export default reducers => {
  const store = createStore(reducers);
  const next = store.dispatch;
  store.dispatch = (action) => {
    function success(apiOutput) {
      if (apiOutput.statusText === 'OK') {
        next(makeAction({
          ...action,
          ...apiOutput,
        }, 'SUCCESS'));
      } else {
        next(makeAction({
          ...action,
          response: apiOutput.response,
          error: apiOutput.data,
        }, 'FAILURE'))
      }
    }

    function failure(apiOutput) {
      next(makeAction({
        ...action,
        error: apiOutput,
      }), 'FAILURE');
    }

    if (action.promise) {
      next(makeAction(action, 'REQUEST'));
      
      action.promise.then(success, failure);
      return action.promise;
    } else {
      next(action);
    }
  };
  return store;
};