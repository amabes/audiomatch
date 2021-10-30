import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import isLocalhost from '../utils/isLocalHost';

// import monitorReducersEnhancer from './enhancers/monitorReducers'
// import loggerMiddleware from './middleware/logger'
import reducer from './reducer'; // import rootReducer from './reducers/index';

const addPromiseSupport = (store) => {
  const rawDispatch = store.dispatch;
  return (action) => {
    if (typeof action.then === 'function') {
      return action.then(rawDispatch);
    }
    return rawDispatch(action);
  };
};

export default function configureStore(preloadedState) {
  const middlewares = [thunkMiddleware]; // loggerMiddleware
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer]; // monitorReducersEnhancer
  const composedEnhancers = isLocalhost ? composeWithDevTools(...enhancers) : middlewareEnhancer;
  const store = createStore(reducer, preloadedState, composedEnhancers); // rootReducer

  store.dispatch = addPromiseSupport(store);

  return store;
}
