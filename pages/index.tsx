import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { Navbar, Nav, Card, ListGroup, Container, Button, Alert } from "react-bootstrap";
import PresentList from "./components/PresentList";
import { MDBBreadcrumb, MDBBreadcrumbItem, MDBCol, MDBRow } from "mdb-react-ui-kit";
import styles from './App.module.css';

export default function Index() {
  const [presentList, setPresentList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPresentList = async () => {
      try {
        const response = await axios.get('/api/present/list');
        setPresentList(response.data);
        setLoading(false);
        console.log('API response:', response.data);
      } catch (error) {
        console.error('Error fetching present list:', error);
        setLoading(false);
      }
    };

    fetchPresentList();
  }, []);

  return (
    <>
      <Navbar expand="md" variant="dark" className={styles.navbar}>
        <Navbar.Toggle aria-controls="menu-hamburger" className={styles.menuHamburger} />
        <Navbar.Collapse id="menu-hamburger">
          <Nav className="mr-auto">
            <Nav.Link href="#the-couple">O Casal</Nav.Link>
            <Nav.Link href="#details">Detalhes do Casamento</Nav.Link>
            <Nav.Link href="#gift-list">Lista de Presente</Nav.Link>
            <Nav.Link href="#rsvp">Confirme sua Presença!</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className={styles.coverPage}>
        <img className={`img-fluid ${styles.bannerDesktop}`} src="https://i.postimg.cc/W1yJ65CD/home-cover-desktop.png" alt="Casamento Clara e Leonardo" />
        <Container>
          <img className={`img-fluid ${styles.bannerMobile}`} src="https://i.postimg.cc/Dw0XX9jk/home-cover-mobile.png" alt="Casamento Clara e Leonardo" />
        </Container>
      </div>

      <div id="the-couple" className={styles.couple}>
        <Container>
          <img className={`img-banner-title ${styles.imgCoupleBanner}`} src="https://i.postimg.cc/sfGHpLLW/clara-e-leonardo.png" alt="Clara e Leonardo" />
          <div className={styles.columnsCouple}>
            <div className={styles.her}>
              <div className={styles.textBio}>
                <h1>Ela</h1>
                <p className={styles.hoverTheMouse}>(passe o mouse)</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className={styles.clara}>
                <img className="img-fluid" src="https://i.postimg.cc/9fzYcR59/Clara.jpg" alt="Nome da Noiva: Clara" title="Clara" />
              </div>
            </div>
            <div className={styles.ringMenu}>
              <a href="#home">
                <img className={`arrows ${styles.topArrow}`} src="https://i.postimg.cc/hvN0YK3m/top.png" alt="Inicio" />
              </a>
              <img className="img-fluid ring" src="img/icons/ring.png" alt="Aliança" />
              <a href="#details">
                <img className={`arrows ${styles.detailsArrow}`} src="https://i.postimg.cc/X7T2HkTP/details-down.png" alt="Detalhes do Casamento" />
              </a>
            </div>
            <div className={styles.his}>
              <div className={styles.textBio}>
                <h1>Ele</h1>
                <p className={styles.hoverTheMouse}>(passe o mouse)</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className={styles.leo}>
                <img className="img-fluid" src="https://i.postimg.cc/SKbbqK8g/Leo.jpg" alt="Nome do Noivo: Leonardo" title="Leonardo" />
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div id="details" className={styles.details}>
        <Container>
          <h1 className={styles.titleDetails}>Detalhes do Casamento</h1>
          <div className={styles.detailsContent}>
            <div className={styles.infoBlock}>
              <div className={styles.infoIcon}>
                <img className="img-fluid" src="https://i.postimg.cc/4dY6w1Sh/clock.png" alt="Relógio" />
              </div>
              <div className={styles.infoText}>
                <h2>Cerimônia</h2>
                <p>12 de agosto de 2023</p>
                <p>17:00</p>
                <p>Igreja Santa Clara</p>
              </div>
            </div>
            <div className={styles.infoBlock}>
              <div className={styles.infoIcon}>
                <img className="img-fluid" src="https://i.postimg.cc/1zYvmBQF/wedding-rings.png" alt="Alianças" />
              </div>
              <div className={styles.infoText}>
                <h2>Festa</h2>
                <p>19:00</p>
                <p>Salão dos Noivos</p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <PresentList />

     
    </>
  );
}
