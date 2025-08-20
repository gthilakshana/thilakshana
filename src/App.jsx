
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/homePage'
import NotFound from './pages/notFoundPage'
import './App.css'

function App() {


  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
