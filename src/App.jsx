import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoApp from './TodoApp'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TodoApp />
      <div className="bg-red-500 text-white p-4 text-3xl">
        Tailwind Test
      </div>

    </>
  )
}

export default App
