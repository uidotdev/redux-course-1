import * as React from 'react'
import ConnectedTodos from './Todos'
import ConnectedGoals from './Goals'
import { useSelector, useDispatch } from 'react-redux'
import { handleInitialData } from '../actions/shared'

export default function App () {
  const dispatch = useDispatch()
  const loading = useSelector((state) => state.loading)

  React.useEffect(() => {
    dispatch(handleInitialData())
  }, [dispatch])

  if (loading === true) {
    return <h3>Loading</h3>
  }

  return (
    <div>
      <ConnectedTodos />
      <ConnectedGoals />
    </div>
  )
}