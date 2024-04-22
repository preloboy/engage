import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Create from './components/create.tsx';
import Login from './components/login.tsx';


const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/login", element: <Login/> },
  { path: "/create", element: <Create/> },
  { path: "/test", element: <div>Hello world!</div> },
], { basename: '/engage' });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
