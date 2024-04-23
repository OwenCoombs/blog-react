import NavBar from "./navbar";
import Logo from "./assets/owencircle.png";
import { Link } from "react-router-dom";
import linkdin from "./assets/linkedin.svg"
function Contact(){
    return(
    <div>
        <NavBar />
        
        <div className="text-center container border border-black rounded">
            <img src={Logo}></img>
            <div className="row">
                <div className="col">
                    <Link  to={"https://www.linkedin.com/feed/" }>linkedin</Link>
                </div>
                <div className="col">
                    <Link  to={"owencoombs03@gmail.com" }>Email</Link>
                </div>
                <div className="col">
                    <Link to={"https://www.facebook.com/owen.coombs.1441?mibextid=LQQJ4d"}>FaceBook</Link>
                </div>
        </div>
    </div>
</div>
    )
}




export default Contact