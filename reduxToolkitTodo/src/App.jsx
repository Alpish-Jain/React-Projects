import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

//Install redux Devtools chrome plugin to visualise states etc.

function App() {

  return (
    <>
      <h1 className="text-3xl font-bold text-white text-center my-6">
        Learn about Redux Toolkit
      </h1>
      <AddTodo />
      <Todos/>
    </>
  )
}

export default App
