import NavBar from "./navbar";
import Logo from "./assets/owencircle.png";
import { Link } from "react-router-dom";
import linkdin from "./assets/linkedin.svg"
import email from "./assets/envelope.svg"
import facebook from "./assets/facebook.svg"
function Contact(){
    return(
    <div>
        <NavBar />
        
        <div className="text-center container border border-black rounded">
            <img src={Logo}></img>
            <div className="row">
                <div className="col">
                <Link to={"https://www.linkedin.com/in/owen-coombs-ab029b254/"} id="linkdinpic">
                <img src={linkdin} id="linkdin"></img>
                </Link>
                </div>
                <div className="col">
                    <Link  to={"owencoombs03@gmail.com" }>
                        <img src={email} id="email"></img>
                    </Link>
                </div>
                <div className="col">
                    <Link to={"https://www.facebook.com/owen.coombs.1441?mibextid=LQQJ4d"}>
                        <img src={facebook} id="facebook"></img>
                    </Link>
                </div>
        </div>
    </div>
</div>
    )
}




export default Contact