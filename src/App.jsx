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
        <img className='backgroundImage' src="https://i.pinimg.com/736x/8b/32/c6/8b32c66bdd3c347b43d7985272c6f0de.jpg" alt="" />
        <RouterProvider router={router} />
      </div>
    </div>
  )
}

export default App
