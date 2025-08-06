import { useEffect, useState } from 'react'
import classes from './styles.module.css'
import TodoItem from './components/todo-item'
import TodoDetails from './components/todo-details'
import { Skeleton } from '@mui/material'

function App() {
  const [todoList, setTodoList] = useState([])
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")
  const [todoDetails, setTodoDetails] = useState(null)
  const [openDialog, setOpenDialog] = useState(false)

  async function fetchListOfTodos() {
    try {
      setLoading(true)
      const apiResponse = await fetch("https://dummyjson.com/todos")
      const result = await apiResponse.json()
      console.log(result)

  /*  example for todo array      result is
  todos=[ 
  {id: 2 todo: "Memorize a poem',completed: true, userId: 46},
 {id: 3, todo: 'Watch a classic movie', completed: true, userId: 68},
 {id: 4, todo: 'Watch a documentary', completed: false, userId: 84}
] */


      if (result.todos && result.todos.length > 0) {
        setTodoList(result.todos)
        setErrorMsg('')
      } else {
        setTodoList([])
        setErrorMsg('No todos found.')
      }
    } catch (error) {
      console.error(error)
      setErrorMsg("Some error occurred while fetching todos.")
    } finally {
      setLoading(false)
    }
  }

  async function fetchDetailsOfCurrentTodo(getcurrentTodoId) {
    console.log(getcurrentTodoId)
    try {
      const apiResponse = await fetch(`https://dummyjson.com/todos/${getcurrentTodoId}`)
      const details = await apiResponse.json()
      console.log(details)

      if (details) {
        setTodoDetails(details)
        setOpenDialog(true)
      } else {
        setTodoDetails(null)
        setOpenDialog(false)
      }
    } catch (error) {
      console.error(error)
      console.log("Some error occurred while fetching todo details.")
    }
  }

  useEffect(() => {
    fetchListOfTodos()
  }, [])

  if (loading) {
    return <Skeleton variant="rectangular" width={650} height={650} />
  }

  return (
    <div className={classes.mainWrapper}>
      <h1 className={classes.headerTitle}>To-do App using React and Material UI</h1>

      <div className={classes.todoListWrapper}>
        {todoList && todoList.length > 0 ? (
          todoList.map((todoItem) => (
            <TodoItem
              key={todoItem.id}
              fetchDetailsOfCurrentTodo={fetchDetailsOfCurrentTodo}
              todo={todoItem}
            />
          ))
        ) : (
          <p>No todos available.</p>
        )}
      </div>

      <TodoDetails
        openDialoge={openDialog}
        setOpenDialoge={setOpenDialog}
        todoDetails={todoDetails}
        settodoDetails={setTodoDetails}
      />
    </div>
  )
}

export default App
