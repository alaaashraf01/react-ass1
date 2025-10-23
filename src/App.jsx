import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import First from './Components/First/First'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'

function App() {
 
const routers= createBrowserRouter([{path:'',element:<Layout/>,
  children:[
    {index:true,element:<First/> },
    {path:'about',element:<About/> },
    {path:'portfolio',element:<Portfolio/> },
    {path:'contact',element:<Contact/> },
  ]
}])
  return<>
  <RouterProvider router={routers}>

  </RouterProvider>
  </>
}

export default App
