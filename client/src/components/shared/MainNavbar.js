import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MainNavbar = () => {
  
  return(
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">DPL Handyman</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/workers">Workers</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}


export default MainNavbar;