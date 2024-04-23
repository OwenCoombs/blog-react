import { Link } from "react-router-dom"
import NavBar from "./navbar"
import logo from "./assets/owencircle.png"


function App() {
  return (
  <div>
      <NavBar />
    <div className="h-100 p-5 text-center"
      style={{ color: 'white' }}>
        <img src={logo}></img>
     
      
    </div>
  </div>
  )
}


export default App
