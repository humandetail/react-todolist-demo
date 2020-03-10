import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { handleList } from './reducers';

const store = createStore(handleList, applyMiddleware(thunk));

export default store;