import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import navLogo from './assets/bloglogo.svg';
import { Link } from 'react-router-dom';
// import Blogs from './blogs';
// import aboutMe from './aboutme';
function NavBar() {
  return (
    <Navbar expand="lg" id='navcolor'>
      
        <Navbar.Brand href="/">
            <img 
            src={navLogo}
            width="75"
            height="75"
            className="d-inline-block align-top"></img>
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/blog-react/Contact">Contact</Nav.Link>
            <Nav.Link href="/blog-react/Blogs">Blogs</Nav.Link>
            <Nav.Link href="/blog-react/Aboutme">About Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
     
    </Navbar>
  );
}

export default NavBar