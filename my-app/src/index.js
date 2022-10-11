import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Container, Nav, Navbar, NavDropdown, Image, FormText, ListGroup } from 'react-bootstrap';
import { Facebook, Pinterest, Twitter, Instagram, HouseFill, Search, PersonFill, Cart } from 'react-bootstrap-icons';

const Murphys = () => (
    <Navbar>
      <Container>
        <Nav>
          <Image src='https://courses.ics.hawaii.edu/ics314f22/morea/ui-frameworks/experience-islandsnow-bootstrap-logo.png' size='medium' className="justify-content-left" />
        </Nav>
        <Nav>
          <ListGroup className="justify-content-right me-auto p-3">
            Home
            About Us
            St. Patrick's Day
            To Go Ordering
            <ListGroup>
              <Nav.Link><Instagram/></Nav.Link>
              <Nav.Link><Facebook/></Nav.Link>
              <Nav.Link><Twitter/></Nav.Link>
            </ListGroup>
          </ListGroup>
        </Nav>
      </Container>
    </Navbar>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Murphys />);