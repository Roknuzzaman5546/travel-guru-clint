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
import Authprovider from './Components/Authprovider/Authprovider';
import Contact from './Components/Home/Contact';
import Blog from './Components/Blog/BLog';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Clintprivet from './Components/Privet/Clintprivet';
import Dashbord from './Main/Dashbord';
import Allplace from './Components/Dashbord/Globaldash/Allplace';
import Allhotel from './Components/Dashbord/Globaldash/Allhotel';
import Placedtails from './Components/Home/Placedtails';
const queryClient = new QueryClient()


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
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/blog",
        element: <Clintprivet><Blog></Blog></Clintprivet>
      }
    ]
  },
  {
    path: "/dashbord",
    element: <Clintprivet><Dashbord></Dashbord></Clintprivet>,
    children: [
      {
        path: 'allplace',
        element: <Allplace></Allplace>
      },
      {
        path: 'hotel',
        element: <Allhotel></Allhotel>
      },
      {
        path: 'place/:id',
        element: <Placedtails></Placedtails>,
        loader: () => fetch('http://localhost:5000/place')
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Authprovider>
        <RouterProvider router={router} />
      </Authprovider>
    </QueryClientProvider>
  </React.StrictMode>,
)
