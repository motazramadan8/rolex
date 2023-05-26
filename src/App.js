import React from 'react'
import Home from './Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeDark from './HomeDark';


const App = () => {
  return (
    <>
      

      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="dark" element={<HomeDark />} />
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
