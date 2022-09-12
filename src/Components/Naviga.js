import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Naviga() {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Student Management System</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Add Student</Nav.Link>
            <Nav.Link href="#features">View Student</Nav.Link>
            <Nav.Link href="#features">Register</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Naviga