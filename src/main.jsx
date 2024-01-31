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
import Singlehoteldetails from './Components/Home/Singlehoteldetails';
import Userhome from './Components/Dashbord/Userdash/Userhome';
import Choicelist from './Components/Dashbord/Userdash/Choicelist';
import Adminhome from './Components/Dashbord/Admindash/Adminhome';
import Addplace from './Components/Dashbord/Admindash/Addplace';
import Addhotel from './Components/Dashbord/Admindash/Addhotel';
import Manageplace from './Components/Dashbord/Admindash/Manageplace';
import Managehotel from './Components/Dashbord/Admindash/Managehotel';
import Payment from './Components/Dashbord/Globaldash/Payment';
import Review from './Components/Dashbord/Userdash/Review';
import Alluser from './Components/Dashbord/Admindash/Alluser';
import Paymenthistory from './Components/Dashbord/Userdash/Paymenthistory';
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
        path: 'allplace',
        element: <Allplace></Allplace>
      },
      {
        path: 'hotel',
        element: <Allhotel></Allhotel>
      },
      {
        path: '/place/:id',
        element: <Placedtails></Placedtails>,
        loader: () => fetch('http://localhost:5000/place')
      },
      {
        path: '/hotel/:id',
        element: <Singlehoteldetails></Singlehoteldetails>,
        loader: () => fetch('http://localhost:5000/hotel')
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
        path: 'userhome',
        element: <Userhome></Userhome>
      },
      {
        path: 'choicelist',
        element: <Choicelist></Choicelist>
      },
      {
        path: 'adminhome',
        element: <Adminhome></Adminhome>
      },
      {
        path: 'addplace',
        element: <Addplace></Addplace>
      },
      {
        path: 'addhotel',
        element: <Addhotel></Addhotel>
      },
      {
        path: 'manageplace',
        element: <Manageplace></Manageplace>
      },
      {
        path: 'managehotel',
        element: <Managehotel></Managehotel>
      },
      {
        path: 'payment',
        element: <Payment></Payment>,
      },
      {
        path: 'addreview',
        element: <Review></Review>
      },
      {
        path: 'users',
        element: <Alluser></Alluser>
      },
      {
        path: "payhistory",
        element: <Paymenthistory></Paymenthistory>
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
