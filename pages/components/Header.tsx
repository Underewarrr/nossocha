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
        <Navbar.Brand className={styles.header_title} href="/">Open-Tibia Course</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className={styles.navbar_toggle} />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="/view/user/course">Cursos</Nav.Link> */}

            <NavDropdown title="Cursos" id="collasible-nav-dropdown">

              <NavDropdown.Item className={styles.header_text} href="/view/user/course/add">
                Adicionar Curso
              </NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Item className={styles.header_text} href="/view/user/course/list">
              Diponiveis
              </NavDropdown.Item>
              <NavDropdown.Item className={styles.header_text} href="/view/user/course/find">
              Procurar
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Conta" id="collasible-nav-dropdown">

              <NavDropdown.Item className={styles.header_text} href="/user/balance/add">
                Adicionar saldo
              </NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item className={styles.header_text} href="/view/user/login">
              Entrar
              </NavDropdown.Item>
              <NavDropdown.Item className={styles.header_text} href="/view/user/register">
              Registrar
              </NavDropdown.Item>
              <NavDropdown.Item className={styles.header_text} href="/view/user/recovery">
              Recuperar
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
