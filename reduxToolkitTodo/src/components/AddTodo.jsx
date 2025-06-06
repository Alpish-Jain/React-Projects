import React, { useState } from 'react'
import {useDispatch} from 'react-redux'

import { addTodo } from '../features/todo/todoSlice' //that's why we exported the reducers in todoSlice

function AddTodo() {

    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

    return (
        <form onSubmit={addTodoHandler} className="flex flex-col sm:flex-row items-center gap-4 mt-12">
          <input
            type="text"
            className="w-full sm:w-auto bg-zinc-800 text-white placeholder-gray-400 rounded-md border border-zinc-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-600 outline-none py-2 px-4 transition duration-200"
            placeholder="Enter a Todo..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-6 rounded-md text-base transition duration-200"
          >
            Add Todo
          </button>
        </form>
      )
}

export default AddTodo