//rfce
import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom'
import Home from './pages/Home'
import MainLayout from './layout/MainLayout'
import JobsPage from './pages/JobsPage'
import NotFound from './pages/NotFound'


const router = createBrowserRouter(  
  createRoutesFromElements(
  <Route path='/' element={<MainLayout/>}>
    <Route index element = {<Home/>}/>
    <Route path='/jobsPage' element = {<JobsPage/>}/>
    <Route path='/*' element = {<NotFound/>}/>
  </Route>
  
  )
)

const App = () => {

  return <RouterProvider router={router}/>
}

export default App
