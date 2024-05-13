import React from 'react'
import Home from './Components/Home/Home'
import { Route, Routes } from 'react-router-dom'
import AboutUs from './Components/AboutUs/AboutUs'
import HowToUse from './Components/HowToUse/HowToUse'
import LoginReg from './Components/LoginReg/LoginReg'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/how-to-use' element={<HowToUse/>}/>
        <Route path='/about-us' element={<AboutUs/>}/>
        <Route path='/login-reg' element={<LoginReg/>}/>
      </Routes>
    </div>
  )
}

export default App
