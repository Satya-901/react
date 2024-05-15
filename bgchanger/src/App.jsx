import { useState } from "react"


function App() {

  const [color, setColor] = useState("black")

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }} >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-warp justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl" >
          <button onClick={() => setColor("red")} className="outline-none px-4 rounded-full py-1" style={{ backgroundColor: "red" }}>Red</button>
          <button onClick={() => setColor("Yellow")} className="outline-none px-4 rounded-full py-1" style={{ backgroundColor: "Yellow" }}>Yellow</button>
          <button onClick={() => setColor("Blue")} className="outline-none px-4 rounded-full py-1" style={{ backgroundColor: "Blue" }}>Blue</button>
          <button onClick={() => setColor("Green")} className="outline-none px-4 rounded-full py-1" style={{ backgroundColor: "Green" }}>Green</button>
          <button onClick={() => setColor("Orange")} className="outline-none px-4 rounded-full py-1" style={{ backgroundColor: "Orange" }}>Orange</button>
          <button onClick={() => setColor("Purple")} className="outline-none px-4 rounded-full py-1" style={{ backgroundColor: "Purple" }}>Purple</button>
        </div>
      </div>
    </div>
  )
}

export default App
