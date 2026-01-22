import { useState } from 'react'


import User from './user.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
  <div className="bg-light min-vh-100">
     <User/>
    </div>
  )
}

export default App
