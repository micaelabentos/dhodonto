import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import Detail from './Routes/Detail';
import Favs from './Routes/Favs';

import App from './App'
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route path="home" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="dentist/:id" element={<Detail />} />
          <Route path="favs" element={<Favs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter