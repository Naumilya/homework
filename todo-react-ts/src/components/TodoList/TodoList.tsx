import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { checkTodo, deleteTodo, selectTodoForEdit } from '../../stores/actions'
import { RootState } from '../../stores/reducers'
import { TodoPanel } from '../TodoPanel/TodoPanel'
import { TodoItem } from './TodoItem/TodoItem'

export const TodoList: FC = () => {
	const dispatch = useDispatch()
	const todos = useSelector((state: RootState) => state.todos)
	const todoIdForEdit = useSelector((state: RootState) => state.todoIdForEdit)

	return (
		<div>
			{todos.map(todo => {
				if (todo.id === todoIdForEdit) {
					return (
						<TodoPanel
							key={todo.id}
							mode='edit'
							editTodo={{ name: todo.name, description: todo.description }}
						/>
					)
				}
				return (
					<TodoItem
						key={todo.id}
						todo={todo}
						checkTodo={() => dispatch(checkTodo(todo.id))}
						deleteTodo={() => dispatch(deleteTodo(todo.id))}
						selectTodoIdForEdit={() => dispatch(selectTodoForEdit(todo.id))}
					/>
				)
			})}
		</div>
	)
}
