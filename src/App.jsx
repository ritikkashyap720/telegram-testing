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


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/leaderboard",
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
        <img className='backgroundImage' src="https://i.pinimg.com/736x/4c/70/02/4c7002e8e036bc921e6f40ed3e90a19e.jpg" alt="" />
        <RouterProvider router={router} />
      </div>
    </div>
  )
}

export default App
