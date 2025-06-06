import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../features/todo/todoSlice'

function Todos() {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()
  const [editText, setEditText] = useState('')
  const [editableTodoId, setEditableTodoId] = useState(null)

  const handleEdit = (todo) => {
    setEditableTodoId(todo.id)
    setEditText(todo.text)
  }

  const handleSave = (id) => {
    dispatch(updateTodo({ id, text: editText }))
    setEditableTodoId(null)
    setEditText('')
  }

  return (
    <>
      <h2 className="text-white text-2xl mb-4">Todos</h2>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex items-center justify-between bg-zinc-800 px-4 py-3 rounded"
            key={todo.id}
          >
            <input
              className={`text-white bg-transparent border-b border-gray-400 focus:outline-none px-2 py-1 flex-1 mr-4 ${
                todo.id === editableTodoId ? 'border-white' : 'border-transparent'
              }`}
              value={todo.id === editableTodoId ? editText : todo.text}
              onChange={(e) => setEditText(e.target.value)}
              readOnly={todo.id !== editableTodoId}
            />

            {todo.id === editableTodoId ? (
              <button
                onClick={() => handleSave(todo.id)}
                className="ml-2 bg-green-600 hover:bg-green-700 p-2 rounded"
              >
                <img
                  src="https://www.svgrepo.com/show/521819/save.svg"
                  alt="Save"
                  className="w-5 h-5"
                />
              </button>
            ) : (
              <button
                onClick={() => handleEdit(todo)}
                className="ml-2 bg-blue-500 hover:bg-blue-600 p-2 rounded"
              >
                <img
                  src="https://www.svgrepo.com/show/42233/pencil-edit-button.svg"
                  alt="Edit"
                  className="w-5 h-5"
                />
              </button>
            )}

            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="ml-2 bg-red-500 hover:bg-red-600 p-2 rounded"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos
