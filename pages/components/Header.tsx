import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from './styles.module.css';

const Header = () => {
  const [email, setEmail] = useState('')


  useEffect(() => {
    const result = window.localStorage.getItem('email');
    setEmail(result);
  }, [])

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        
        <Navbar.Brand className={styles.header_title} href="/">        <img src="https://media.discordapp.net/attachments/920991430133026856/1125516427307266068/logo.png?width=812&height=313" width={200} height={56  }/>
</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className={styles.navbar_toggle} />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="/view/user/course">Cursos</Nav.Link> */}

            <NavDropdown title="Inicial" id="collasible-nav-dropdown">

              <NavDropdown.Item className={styles.header_text} href="/view/user/present/add">
                Cadastrar um presente
              </NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Item className={styles.header_text} href="/view/user/present/list">
              Lista de Presentes
              </NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
          <Nav>
            <Link
            href="/view/user/profile"
            className={styles.header_url}
            >
              {email} 
            </Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
