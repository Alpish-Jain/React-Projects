import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

//Install redux Devtools chrome plugin to visualise states etc.

function App() {

  return (
    <>
      <h1>Learn about redux toolkit</h1>
      <AddTodo />
      <Todos/>
    </>
  )
}

export default App
