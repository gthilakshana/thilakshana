
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/homePage'
import NotFound from './pages/notFoundPage'
import LoginPage from './pages/loginPage'
import './App.css'

function App() {


  return (
    <>

      <BrowserRouter>
        <div className='w-full h-[100vh]'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>

    </>
  )
}

export default App
