import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const telegramObject = window.Telegram.WebApp;

function App() {
  const [count, setCount] = useState(0)
  if (telegramObject) {
    console.log(telegramObject)
  }
  return (
    <>
    <h1>Done changes</h1>
    <pre className='object'>
      {JSON.stringify(telegramObject)}
    </pre>
    </>
  )
}

export default App
