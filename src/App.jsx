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
      element: <Home/>,
    },
    {
      path: "/leaderboard",
      element: <Leaderboard/>,
    },
    {
      path:"/tasks",
      element: <Tasks/>
    },
    {
      path:"/walloffame",
      element: <WallOfFame/>
    }
  ]);

  return (
      <RouterProvider router={router} />
  )
}

export default App
