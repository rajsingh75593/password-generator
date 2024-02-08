import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className=" shadow w-full h-14  sticky top-0 z-50 mt-7 ">
      <div className="flex justify-center bg-white border-gray-300 min-h-full items-center max-w-screen px-2 md:mx-6 m-auto">
        <Link to="/" className="w-1/3 ">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT40IRteH8XAs8hmMeAKE_1cs11ZdZgGaI3mA&usqp=CAU" alt="" className='w-14 text-red-700' />
        </Link>
        <div className=" w-1/3 text-center flex justify-around items-center list-none te">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => `duration-200 ${isActive ? "text-orange-700" : "text-gray-700"}  hover:text-orange-700 lg:p-0`}>
              Home
            </NavLink>
          </li>
        </div>
        <div className="w-1/3 list-none flex items-end justify-end">
          <li><NavLink to="/login" className={({ isActive }) => `${isActive ? " text-orange-700" : "text-gray-700"} duration-200 hover:text-orange-700 pe-1 md:pe-4`}>Login</NavLink></li>
        </div>
      </div>
    </header>
  )
}

export default Header