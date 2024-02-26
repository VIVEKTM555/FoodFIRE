import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Contact from './component/Contact';
import About from './component/About';
import Ok from './component/Ok';
import Error from './component/Error';
import RestaurantMenu  from './component/RestaurantMenu';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Ok />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/restaurants/:resId',
        element: <RestaurantMenu />,
      },
      
    ],
    errorElement: <Error />,
    
  },
  // {
  //   path: '/about',
  //   element: <About />,
  // },
  // {
  //   path: '/contact',
  //   element: <Contact />,
  // },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
