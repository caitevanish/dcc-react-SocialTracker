import React from 'react';
import { Nav, Container} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';


const NavBar = (props) => { 


  return (  

    <Navbar variant="dark">
    <Container>
    <Navbar.Brand href="#home">IdeationStation</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#MyPosts">My Posts</Nav.Link>
    </Nav>
    </Container>
    </Navbar>
  
  );
}
 
export default NavBar;
