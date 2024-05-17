import React from 'react'
import Home from './Components/Home/Home'
import { Route, Routes } from 'react-router-dom'
import AboutUs from './Components/AboutUs/AboutUs'
import HowToUse from './Components/HowToUse/HowToUse'
import Login from './Components/Login/Login'
import Registration from './Components/Registration/Registration'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/how-to-use' element={<HowToUse/>}/>
        <Route path='/about-us' element={<AboutUs/>}/>
        <Route path='/user-login' element={<Login/>}/>
        <Route path='/user-reg' element={<Registration/>}/>
      </Routes>
      <ToastContainer/>
    </div>
  )
}

export default App
