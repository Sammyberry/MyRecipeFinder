import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Pages/Home/Home'
import About from "../src/components/Pages/About/About"
import Recipes from './components/Pages/Recipes/Recipes'
import PopUp from './components/Pages/Recipes/Product/PopUp'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/recipes' element={<Recipes />}></Route>
        <Route path='/recipes/details' element={<PopUp />}></Route>
      </Routes>


    </>
  )
}

export default App

