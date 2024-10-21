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
        <img className='backgroundImage' src="https://i.pinimg.com/736x/7f/be/8a/7fbe8ac6505a6165e17f827205cf857a.jpg" alt="" />
        <RouterProvider router={router} />
      </div>
    </div>
  )
}

export default App
