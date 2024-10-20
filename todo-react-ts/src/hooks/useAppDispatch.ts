import { useDispatch } from 'react-redux'
import { Dispatch } from 'redux'
import { TodoActionTypes } from '../stores/actions'

export const useAppDispatch = () => useDispatch<Dispatch<TodoActionTypes>>()
