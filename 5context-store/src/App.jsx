import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserProvider from './context/UserProvider'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Login from './components/LogIn';

const App = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </UserProvider>

  )
}

export default App