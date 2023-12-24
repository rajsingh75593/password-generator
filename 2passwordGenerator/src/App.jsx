import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllow, setNumberAllow] = useState(false)
  const [charAllow, setCharAllow] = useState(false)
  const [password, setPassword] = useState("")

  //use Ref
  let passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllow) str += "0123456789"
    if (charAllow) str += "!@#$%^&*/?"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      setPassword(pass)

    }
  }, [length, numberAllow, charAllow, setPassword])

  const copyPassword = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 8)
    window.navigator.clipboard.writeText(password)

  }, [password])



  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllow, charAllow, passwordGenerator])


  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800">
        <h1 className='text-white text-center my-2 py-4'>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-3">
          <input type="text" value={password} placeholder='password' ref={passwordRef} readOnly className='outline-none w-full py-2 mb-2 rounded-s-md px-3' />
          <button onClick={copyPassword} className='outline-none bg-blue-700 text-white py-2 px-4 rounded-e-md mb-2 shrink-0'>copy</button>
        </div>
        <div className="flex gap-x-2 text-sm my-4 pb-4">
          <div className="flex items-center gap-x-1 px-1">
            <input type="range" min={6} max={100} value={length} onChange={(e) => setLength(e.target.value)} className='curser-pointer' />
            <label htmlFor="length">Length : {length}</label>
          </div>
          <div className="px-1">
            <input type="checkbox" defaultChecked={numberAllow} id='numberInput' onChange={() => setNumberAllow((prev) => !prev)} />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="px-1">
            <input type="checkbox" defaultChecked={charAllow} id='charaInput' onChange={() => setCharAllow((prev) => !prev)} />
            <label htmlFor="charaInput">Charactors</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
