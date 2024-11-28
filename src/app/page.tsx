'use client'
import { useState } from "react"
import Form from "./components/Form"
import TodosBridge from "./components/TodosBridge"

export interface PropsTodo {
  id: number
  name: string,
  lastname: string,
  email: string
}

const Home = () => {
  const [todos, setTodos] = useState<PropsTodo[]>([])

  const addTodo = (todo : PropsTodo) => {
    setTodos([...todos, todo])
  }

  return (
    <>
      <Form addTodo={addTodo}/>
      <TodosBridge todos={todos}/>
    </>
  )
}

export default Home