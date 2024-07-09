import { useState } from 'react'
import './App.css'
import Header from './Header'
import CountdownTimer from './CountdownTimer'
import Home from './Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
     
      {/*Header*/}
      <Header></Header>
      <CountdownTimer></CountdownTimer>
      <Home></Home>
      {/*Home*/}
    </div>
  )
}

export default App
