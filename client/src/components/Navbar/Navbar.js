import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "./logo192.svg";
import { Link } from "react-router-dom";

// css file
import "./Style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
  const [expand, setExpand] = useState(false);

  return (
    <Navbar expanded={expand} fixed="top" expand="md" sticky="top">
      <Container className="navborder">
        <Navbar.Brand href="/portfolio" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
          &nbsp;
          <div className="brand-content">Student Management System</div>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            setExpand(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/create" onClick={() => setExpand(false)}>
                Add student information
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;