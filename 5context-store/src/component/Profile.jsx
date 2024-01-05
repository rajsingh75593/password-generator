import React, { useContext, useEffect, useState } from 'react'
import UserContext from '../context/UserContext'

export default function Profile() {
  const { user } = useContext(UserContext)
  const [data, setData] = useState([])

  useEffect(() => {
    setData(user)
    console.log(data);
  }, [user.length])


  return (
    <>
      <div className="container">
        {
          (user <"1")?<div className='text-center my-3 bg-success text-light p-2'>Please Fill Detail for Login</div> :
            <div className='text-center my-3 bg-success text-light p-2'>Student Data</div>
        }
        <table className='table table-bordered'>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Password</th>
            </tr>
            {
              data && data.map((element, indx) => {
                return (
                  <tr key={indx}>
                    <td>{element.name}</td>
                    <td>{element.email}</td>
                    <td>{element.phone}</td>
                    <td>{element.password}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>


      </div>
    </>
  )


}
