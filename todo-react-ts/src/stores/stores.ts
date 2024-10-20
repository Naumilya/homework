import { createStore } from 'redux'
import { todoReducer } from './reducers'

const store = createStore(todoReducer)
export type RootState = ReturnType<typeof todoReducer>

export default store
