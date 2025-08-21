
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/homePage'
import NotFound from './pages/notFoundPage'
import LoginPage from './pages/loginPage'
import './App.css'

function App() {


  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
