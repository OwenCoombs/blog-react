import NavBar from "./navbar";
import Button from 'react-bootstrap/Button';
import mindreader from './assets/mindreader.png';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import weatherapp from './assets/weatherapp.png';
import tictactoe from './assets/tictactoe.svg';
import restmenu from './assets/restmenu.svg';
import { Link } from "react-router-dom";
import todo from './assets/Todolist.png';
import social from './assets/Socialreact.png'



function Projects() {
    return (
        <div className="text-center">
            <NavBar />
            <div className="text-center">
                <h1 id="projectsH1">Projects</h1>
            </div>
            <div className="container p-3">
                <div className="row align-items-start">
                    <div className="col">
                        <Link to={'https://github.com/OwenCoombs'}>
                            <img src={mindreader} className="rounded" id="imagesP"></img>
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={'https://github.com/OwenCoombs'}>
                            <img src={weatherapp} className="rounded" id="imagesP"></img>
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={'https://github.com/OwenCoombs'}>
                            <img src={tictactoe} className="rounded" id="imagesP"></img>
                        </Link>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col">
                        <Link to={'https://github.com/OwenCoombs'}>
                            <img src={restmenu} className="rounded" id="imagesP"></img>
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={'https://github.com/OwenCoombs'}>
                            <img src={todo} className="rounded" id="imagesP"></img>
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={'https://github.com/OwenCoombs'}>
                            <img src={social} className="rounded" id="imagesP"></img>
                        </Link>
                    </div>
                </div>
                <div className="row align-items-end">
                    <div className="col">
                    </div>
                    <div className="col">
                    </div>
                    <div className="col">
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;


