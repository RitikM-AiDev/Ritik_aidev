import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import About from './About.jsx'
import Projects from './Projects.jsx'
import Skills from './Skills.jsx'
import Contact from './Contact.jsx'
const Routes = createBrowserRouter([
 {
      path : "/",
      element : <App/>
     },
     {
      path : "/about",
      element : <About/>
     },
     {
        path : "/projects",
        element : <Projects/>
     },
     {
        path : "/skills",
        element : <Skills/>
     },
     {
        path : "/contact",
        element :<Contact/>
     }
  ]);
createRoot(document.getElementById('root')).render(

    <RouterProvider router={Routes}/>
  
)
