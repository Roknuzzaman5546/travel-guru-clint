import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Main/Main';
import Home from './Components/Home/Home';
import Destination from './Components/Destination/Destination';
import Regoser from './Components/Authentication/Regoser';
import Login from './Components/Authentication/Login';
import Errorepage from './Components/Errorepage/Errorepage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Errorepage></Errorepage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/destination",
        element: <Destination></Destination>
      },
      {
        path: "/register",
        element: <Regoser></Regoser>
      },
      {
        path: "/login",
        element: <Login></Login>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
