import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'


import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

import './index.css'
import PricingPage from './pages/pricing';
import Error from './Error';
import SignInPage from './pages/signInPage';
import SignUpPage from './pages/signUpPage';

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<Error/>

  },
  {
    path:"/pricing",
    element:<PricingPage/>
  },
  {
    path:"/sign-in",
    element:<SignInPage/>
  },
  {
    path:"/sign-up",
    element:<SignUpPage/>
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>,
)
