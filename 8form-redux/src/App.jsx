import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import TodoForm from './adminSection/TodoForm'

import AdminHome from './adminSection/AdminHome'
import Maincategory from './adminSection/Maincategory/Maincategory'
import Subcategory from './adminSection/subcategory/Subcategory'
import Brand from './adminSection/brand/Brand'
import Product from './adminSection/product/Product'

function App() {
  const [data, setData] = useState()
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home setData={setData} />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />


          <Route path='/admin-home' element={<AdminHome />} />
          <Route path='/admin-maincategory' element={<Maincategory />} />
          <Route path='/admin-subcategory' element={<Subcategory />} />
          <Route path='/admin-brand' element={<Brand />} />
          <Route path='/admin-product' element={<Product />} />

          <Route path='/todo-form' element={<TodoForm data={data} setData={setData} />} />


        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
