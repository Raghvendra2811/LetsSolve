import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Home from './Home'
const Allroutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>} />
        </Routes>
    </div>
  )
}

export default Allroutes