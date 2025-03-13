import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Products from './component/productsDet'
import Cart from './component/posts'
import Shop from './component/shop'
import Nav from './component/Nav'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Data from './component/data'
import Posts from './component/posts'
import OnePost from './component/onePost'

function App() {

  return (
    <>
       <BrowserRouter>
      <Nav/>
              <Routes>
                  <Route  path="/" element={<Posts/>} />             
                  <Route  path="/details" element={<OnePost/>} />             
              </Routes>
          </BrowserRouter>
    </>
  )
}

export default App
