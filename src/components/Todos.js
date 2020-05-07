import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import List from './List'
import {
  handleAddTodo,
  handleDeleteTodo,
  handleToggle
} from '../actions/todos'

export default function Todos () {
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.todos)
  const input = React.useRef('')

  const addItem = (e) => {
    e.preventDefault()

    dispatch(handleAddTodo(
      input.current.value,
      () => input.current.value = ''
    ))
  }

  const removeItem = (todo) => dispatch(handleDeleteTodo(todo))
  const toggleItem = (id) => dispatch(handleToggle(id))

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type='text'
        placeholder='Add Todo'
        ref={input}
      />
      <button onClick={addItem}>Add Todo</button>

      <List
        toggle={toggleItem}
        items={todos}
        remove={removeItem}
      />
    </div>
  )
}