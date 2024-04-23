import { Link } from "react-router-dom"
import NavBar from "./navbar"
import logo from "./assets/owencircle.png"


function App() {
  return (
  <div>
      <NavBar />
      <div className="d-flex justify-content-center mt-1">
    <Link to={"https://github.com/OwenCoombs"}>
      <h1 id="projects">Projects</h1>
    </Link>
    </div>
      <div className="d-flex  justify-content-center mt-1">
    <Link to={"/Contact"}>
      <h1 id="projects">Contact</h1>
    </Link>
    </div>
      <div className="d-flex justify-content-center mt-1">
      <Link to="/Aboutme">
      <h1 id="projects">About</h1>
    </Link>
    </div>
    <div className="d-flex justify-content-center" id="h6left">
      <h5 id="h6font">Owen Coombs</h5>
    </div>
      <div className="d-flex justify-content-center" id="h6left">
        <p>Full-Stack Software Egineer</p>
      </div>
      
  </div>
  )
}


export default App
