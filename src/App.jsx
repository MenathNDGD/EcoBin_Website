import React from 'react'
import Home from './Components/Home/Home'
import { Route, Routes } from 'react-router-dom'
import AboutUs from './Components/AboutUs/AboutUs'
import HowToUse from './Components/HowToUse/HowToUse'
import Login from './Components/Login/Login'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/how-to-use' element={<HowToUse/>}/>
        <Route path='/about-us' element={<AboutUs/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App
