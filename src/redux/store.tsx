import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { reducer } from './reducer'

export const store = createStore(reducer, applyMiddleware(thunk));

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>

console.log(store.getState());