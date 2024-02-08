import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-700" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justiify-center gap-x-16 shadow-lg bg-white px-3 py-2 rounded-xl">
          <button className=' outline-none px-3 py-1 rounded-full text-white shadow-sm' onClick={() => setColor("red")} style={{ backgroundColor: "red" }}>red</button>
          <button className=' outline-none px-3 py-1 rounded-full text-white shadow-sm' onClick={() => setColor("green")} style={{ backgroundColor: "green" }}>green</button>
          <button className=' outline-none px-3 py-1 rounded-full text-white shadow-sm' onClick={() => setColor("blue")} style={{ backgroundColor: "blue" }}>blue</button>
          <button className=' outline-none px-3 py-1 rounded-full text-white shadow-sm' onClick={() => setColor("maroon")} style={{ backgroundColor: "maroon" }}>maroon</button>
          <button className=' outline-none px-3 py-1 rounded-full text-white shadow-sm' onClick={() => setColor("brown")} style={{ backgroundColor: "brown" }}>brown</button>
          <button className=' outline-none px-3 py-1 rounded-full text-white shadow-sm' onClick={() => setColor("teal")} style={{ backgroundColor: "teal" }}>teal</button>
          <button className=' outline-none px-3 py-1 rounded-full text-white shadow-sm' onClick={() => setColor("fuchsia")} style={{ backgroundColor: "fuchsia" }}> fuchsia</button>
        </div>
      </div>
    </div>
  )
}

export default App
