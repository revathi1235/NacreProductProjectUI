import React, { useState, useRef, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import PurveyLogo from "../Assets/PurveyLogo.png";
import { useNavigate } from 'react-router-dom';
import '../Components/common.css';

function AporaCommonNavbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);

  const handleLogout = () => {
    navigate('/');
  };

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  // Function to close the navbar when clicking outside
  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  // Effect to handle clicks outside of the navbar
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='stickynavbar' ref={navbarRef}>
      <Navbar expand="lg" style={{backgroundColor: "rgb(156, 153, 153)"}} expanded={isOpen}>
        <Container fluid>
          <Navbar.Brand>
            <img src={PurveyLogo} alt="" style={{ height: "30px" }} />
            <span className='wms-navbar' style={{ color: "WHITE" }}> Apora</span>
          </Navbar.Brand>

          <Navbar.Toggle onClick={handleToggle} aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link onClick={handleLogout}>
                <FontAwesomeIcon icon={faPowerOff} style={{ fontSize: "20px", color: "green" }} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default AporaCommonNavbar;