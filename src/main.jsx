import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Components/HomePg/Home';
import Root from './Components/Root/Root';
import AddProduct from './Components/AllForms/AddProduct';
import UpdateProduct from './Components/AllForms/UpdateProduct';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/add",
        element: <AddProduct />
      },
      {
        path: "/update",
        element: <UpdateProduct />
      }
    ]
  }

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
