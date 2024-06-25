import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className='w-full h-screen duration-200'
      style={{ backgroundColor: color }}
    >
      <div className='fixed flex flex-wrap justify-center botttom-12 inset-x-0 px-2 rounded-3xl'>
        <div className='flex flex-wrap justify center gap-3 shadow-lg bg-white inset-x-0 px-3 py-2 rounded-br-3xl'>
          <button onClick={() => setColor("red")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "red" }}>Red</button>
          <button onClick={() => setColor("indigo")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "indigo" }}>Indigo</button>
          <button onClick={() => setColor("green")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "green" }}>Green</button>
          <button onClick={() => setColor("lavender")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "lavender" }}>Lavender</button>
          <button onClick={() => setColor("lime")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "lime" }}>Lime</button>
          <button onClick={() => setColor("purple")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "purple" }}>Purple</button>
          <button onClick={() => setColor("gold")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "gold" }}>Gold</button>
        </div>
      </div>
    </div>
  )
}

export default App
