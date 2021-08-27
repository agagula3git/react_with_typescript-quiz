import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { reducer } from './reducer'

export const store = createStore(reducer, applyMiddleware(thunk));
console.log(store.getState());