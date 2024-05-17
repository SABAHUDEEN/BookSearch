// import'./Components/style.module.css';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Dashboard from './Components/Dashboard';
//Import react router dom
import {createBrowserRouter, RouterProvider}from 'react-router-dom'
import About from './Components/About';
import Contact from './Components/Contact';


//lets create a router
const router = createBrowserRouter([
  {
    path:'/',
    element:<div><Login/></div>
  },
  {
    path:'/register',
    element:<div><Register/></div>
  },
  {
    path:'/forgot-password',
    element:<div><ForgotPassword/></div>
  },
  {
    path:'/Dashboard',
    element:<div><Dashboard/></div>
  },
  {
    path:'/about',
    element:<><About/></>
  },
  {
    path:'/contact',
    element:<><Contact/></>
  }
])

const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
  
    </div>
  )
}

export default App
