import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Home = () => {
  const { userData } = useContext(UserContext)
  return (
    <>
      {
        (userData < 1) ? <h1 className='max-w-7xl m-auto my-3 text-center py-2  bg-slate-500 text-white/60 font-bold'>Please Fill Login Form</h1> :

          <div className="flex flex-wrap w-full my-3">
            <div className="md:px-6 sm:px-0 m-auto">
              <table>
                <thead>
                  <tr className='flex-wrap w-lvw m-auto items-center justify-center bg-slate-500 text-white/60'>
                    <th className='w-lvw py-1 border border-collapse border-gray-600 text-center'>UserId</th>
                    <th className='w-lvw py-1 border border-collapse border-gray-600 text-center'>UserName</th>
                    <th className='w-lvw py-1 border border-collapse border-gray-600 text-center'>Email</th>
                    <th className='w-lvw py-1 border border-collapse border-gray-600 text-center'>Password</th>
                    <th className='w-lvw py-1 border border-collapse border-gray-600 text-center'>Re-Password</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    userData?.map((item, index) => (
                      <tr key={index}>
                        <td className='w-lvw border border-collapse border-gray-600 text-center'>{item.id}</td>
                        <td className='w-lvw border border-collapse border-gray-600 text-center'>{item.username}</td>
                        <td className='w-lvw border border-collapse border-gray-600 text-center'>{item.email}</td>
                        <td className='w-lvw border border-collapse border-gray-600 text-center'>{item.password}</td>
                        <td className='w-lvw border border-collapse border-gray-600 text-center'>{item.repassword}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
      }
    </>
  )
}

export default Home