import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import ItemDetail from './Pages/Itemdetail'


function App() {

  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path="/item/:id" element={<ItemDetail />} />
   </Routes>
   </BrowserRouter>
  )
}

export default App
