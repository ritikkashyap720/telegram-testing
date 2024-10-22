import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import Leaderboard from './pages/Leaderboard';
import WallOfFame from './pages/WallOfFame';
import { useState } from 'react';
import Logo from "./assets/Logo.png"

const telegramObject = window.Telegram.WebApp;

function App() {
  const [loading, setLoading] = useState(true);
  var [progress,setProgress]= useState(20)

  setTimeout(()=>{
    setProgress(100)
  },2000)

  setTimeout(()=>{
    setLoading(false)
  },3000)
  
  

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/groups",
      element: <Leaderboard />,
    },
    {
      path: "/tasks",
      element: <Tasks />
    },
    {
      path: "/walloffame",
      element: <WallOfFame />
    }
  ]);


  return (
    <div className='parent'>
      <div className="appBody">
        <img className='backgroundImage' src="https://i.pinimg.com/736x/8b/32/c6/8b32c66bdd3c347b43d7985272c6f0de.jpg" alt="" />
        {loading ?
          <div className='loading'>
            <img src={Logo} alt="Logo" />
            <div className="bottombar">
              <h1>Wall Trek</h1>
              <div className="loadingBar">
                <div style={{width:`${progress}%`}} className="loadingProgress">
                </div>
              </div>
            </div>
          </div>
          : <RouterProvider router={router} />}
          
      </div>
    </div>
  )
}

export default App
