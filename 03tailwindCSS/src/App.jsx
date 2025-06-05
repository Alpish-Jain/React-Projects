import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <h1 className='bg-green-400'>Tailwind test</h1>
      <Card  title="Mountain Sunrise"
  description="A beautiful view of the sunrise in the mountains."
  imageUrl="https://source.unsplash.com/random/400x200"/>
    </>
  )
}

export default App
