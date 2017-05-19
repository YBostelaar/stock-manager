import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import * as appReducers from 'app/ducks';

let middleware = applyMiddleware(thunk.withExtraArgument());

if (__DEV__ && __CLIENT__ && typeof window.devToolsExtension === 'function') {
    middleware = compose(middleware, window.devToolsExtension());
}

export default createStore(combineReducers({
    ...appReducers,
    form: formReducer,
}), middleware);
