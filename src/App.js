import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Home'
import Done from './Done'

const App = () => {
  return (
    <BrowserRouter basename='demo-input-strategies'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="done" element={<Done />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
