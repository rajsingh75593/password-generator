import React, { useContext, useRef, useId } from 'react'
import UserContext from '../context/UserContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const username = useRef()
  const email = useRef()
  const password = useRef()
  const repassword = useRef()

  let userid = useId()
  let navigate = useNavigate()
  const { setUserData } = useContext(UserContext)

  function submitHandler(e) {
    e.preventDefault()
    let newData = {
      id: userid,
      username: username.current.value,
      email: email.current.value,
      password: password.current.value,
      repassword: repassword.current.value,
    }
    console.log(newData);
    setUserData((old) => {
      return [...old, newData]
    })
    navigate("/")
  }

  return (
    <div className='max-full my-3 '>
      <div className="max-w-xl bg-slate-200 m-auto text-center p-1 rounded ">
        <h2 className='text-green-600 text-xl'>Login</h2>
      </div>
      <form onSubmit={submitHandler}>
        <div className=" max-w-xl m-auto my-2 px-1">
          <label htmlFor={userid}>UserName</label>
          <input
            type="text"
            id={userid}
            name='username'
            ref={username}
            className='rounded w-full border-1 p-1 mb-2 hover:border-gray-600 duration-200'
            placeholder='Name'
            required
          />
        </div>
        <div className=" max-w-xl m-auto my-2 px-1">
          <label htmlFor={userid}>Email</label>
          <input
            type="text"
            id={userid}
            name='email'
            ref={email}
            className='rounded w-full border-1 p-1 mb-2 hover:border-gray-600 duration-200'
            placeholder='Email'
            required
          />
        </div>
        <div className=" max-w-xl m-auto my-2 px-1">
          <label htmlFor={userid}>Password</label>
          <input
            type="text"
            name='password'
            id={userid}
            ref={password}
            className='rounded w-full border-1 p-1 mb-2 hover:border-gray-600 duration-200'
            placeholder='Password'
            required
          />
        </div>
        <div className=" max-w-xl m-auto my-2 px-1">
          <label htmlFor={userid}>Re-Password</label>
          <input
            type="text"
            name='repassword'
            id={userid}
            ref={repassword}
            className='rounded w-full border-1 p-1 mb-2 hover:border-gray-600 duration-200'
            placeholder='Password'
            required
          />
          <button type='submit' className='rounded w-full p-1 bg-gray-300'>Submit</button>
        </div>
      </form>
    </div >
  )
}

export default Login





// import React, { useContext, useState, useId } from 'react'
// import UserContext from '../context/UserContext'
// import { useNavigate } from 'react-router-dom'

// const Login = () => {
//   const [data, setData] = useState({
//     username: "",
//     email: "",
//     password: "",
//     repassword: ""
//   })
//   let userid = useId()
//   let navigate = useNavigate()
//   const { setUserData } = useContext(UserContext)

//   function getInputData(e) {
//     let { name, value } = e.target
//     setData((pre) => {
//       return {
//         ...pre,
//         [name]: value
//       }
//     })
//   }
//   function submitHandler(e) {
//     e.preventDefault()
//     let newData = {
//       id: userid,
//       username: data.username,
//       email: data.email,
//       password: data.password,
//       repassword: data.repassword
//     }
//     setUserData((old) => {
//       return [...old, newData]
//     })
//     if (data)
//       navigate("/")
//   }

//   return (
//     <div className='max-full my-3 '>
//       <div className="max-w-xl bg-slate-200 m-auto text-center p-1 rounded ">
//         <h2 className='text-green-600 text-xl'>Login</h2>
//       </div>
//       <div className="">
//         <form onSubmit={submitHandler}>
//           <div className=" max-w-xl m-auto my-2 px-1">
//             <label htmlFor={userid}>UserName</label>
//             <input
//               type="text"
//               id={userid}
//               name='username'
//               value={data.username}
//               className='rounded w-full border-1 p-1 mb-2 hover:border-gray-600 duration-200'
//               placeholder='Name'
//               onChange={(e) => getInputData(e)}
//             />
//           </div>
//           <div className=" max-w-xl m-auto my-2 px-1">
//             <label htmlFor={userid}>Email</label>
//             <input
//               type="email"
//               id={userid}
//               name='email'
//               value={data.email}
//               className='rounded w-full border-1 p-1 mb-2 hover:border-gray-600 duration-200'
//               placeholder='Email'
//               onChange={(e) => getInputData(e)}
//             />
//           </div>
//           <div className=" max-w-xl m-auto my-2 px-1">
//             <label htmlFor={userid}>Password</label>
//             <input
//               type="password"
//               id={userid}
//               name='password'
//               value={data.password}
//               className='rounded w-full border-1 p-1 mb-2 hover:border-gray-600 duration-200'
//               placeholder='Password'
//               onChange={(e) => getInputData(e)}
//             />
//           </div>
//           <div className=" max-w-xl m-auto my-2 px-1">
//             <label htmlFor={userid}>Re-Password</label>
//             <input
//               type="password"
//               id={userid}
//               name='repassword'
//               value={data.repassword}
//               className='rounded w-full border-1 p-1 mb-2 hover:border-gray-600 duration-200'
//               placeholder='Password'
//               onChange={(e) => getInputData(e)}
//             />
//             <button type='submit' className='rounded w-full p-1 bg-gray-300'>Submit</button>
//           </div>
//         </form>
//       </div >
//     </div >
//   )
// }

// export default Login