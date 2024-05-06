// import import { Link } from "react-router-dom"
import NavBar from "./navbar"
import logo from "./assets/owencircle.png"
import aboutLogo from './assets/aboutpic1.png'
import { Link } from "react-router-dom"

function aboutMe(){
    return(
<div>
        <NavBar />
       
    <div className="mt-2">
        <div className="d-flex justify-content-center">
       <img src={aboutLogo} id="aboutpic"></img>
       </div>
        <div className="container text-center mt-5 p-2 ">
       <h4>Im Owen. a Full-Stack Software Engineer.</h4>
       <p>I thrive in the world of code, where I blend creativity with functionality to craft digital solutions that 
        empower businesses and individuals alike. With a robust skill set spanning both front-end and back-end development, 
        I specialize in weaving intricate webs of code that transform ideas into reality. From crafting elegant user interfaces
         to architecting 
        scalable backend systems, I relish every challenge that comes my way.</p>
        <h4>Tech Enthusiast</h4>
        <p>Innovation is my playground, and technology is my muse. I'm always on the lookout for the
             latest advancements in the tech sphere, eager to explore how they can be harnessed to elevate user experiences 
            and streamline processes. Whether it's diving into the realms of artificial intelligence, blockchain, or the Internet of Things, 
            I'm continually expanding my toolkit to stay at the forefront of technological evolution.</p>
        
        <h4>Sports Aficionado</h4>
        <p>Beyond the screen, you'll often find me immersed in the world of sports. Whether it's cheering on my favorite team from the sidelines or 
            hitting the court for a friendly game, sports invigorate both my body and mind. I believe in the power of sports to unite communities, 
            foster camaraderie, and instill invaluable 
            life lessons such as teamwork, perseverance, and sportsmanship.</p>
            <h4>Devoted to Development</h4>
            <p>But amidst the excitement of new tech and the thrill of the game, there's one constant in my life:
                 my unwavering love for software development. It's not just a profession; it's a passion that fuels my drive to innovate, 
                 create, and make a meaningful impact in the digital landscape.
                So whether you're looking to revolutionize your digital presence, explore cutting-edge technologies,
                 or simply geek out over the latest sports scores, I'm here to embark on that journey with you. 
                 Let's build something extraordinary together!</p>
                    <hr></hr>
                <h2 className="mt-5 p-2">Check Out My Projects</h2>
                <Link to={"https://github.com/OwenCoombs"}>
                <button className="rounded bg-dark text-light" id>
                    My Projects
                </button>
                </Link>
       </div>
       
    </div>
        <hr></hr>
    <footer className="text-center">
        <h7>Test Footer</h7>
    </footer>
</div> 
    )

    
}

export default aboutMe
