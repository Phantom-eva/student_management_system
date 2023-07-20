import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import "./Style.css"

const Footer = () => {
    let date = new Date()
    let year = date.getFullYear();
    return (
        <Container fluid className="footer">
      <Row>
        <Col md="6" className="footer-copywright">
          <h3>Designed and developed by Yilin (Michael) Li</h3>
        </Col>
        <Col md="6" className="footer-copywright">
          <h3>Copyright © {year}</h3>
        </Col>
      </Row>
    </Container>
    );
}

export default Footer;