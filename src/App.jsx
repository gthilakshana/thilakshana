import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import { Meta } from "react-head";
import Home from './pages/homePage'
import NotFound from './pages/notFoundPage'
import LoginPage from './pages/loginPage'
import './App.css'

function App() {
  return (
    <>

      {/* <Meta
        name="keywords"
        content="Gavrawa Thilakshana, gavrawa, thilakshana, Full Stack Developer, React, Node.js, Python, Docker, AWS, Ubuntu, CentOS, Jenkins, Postman, MongoDB, MySQL, Java, C++, Linux, Tailwind, Bootstrap, GitHub"
      /> */}

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
