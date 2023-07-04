import React from 'react';
import styles from './Header.module.css'; // CSS module for header styles

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="https://i.postimg.cc/6qxrVM7V/chat.png" alt="Logo" />
      </div>
      <nav className={styles.nav}>
        <ul>
          <li><a href="#the-couple">O Casal</a></li>
          <li><a href="#details">Detalhes do Casamento</a></li>
          <li><a href="#gift-list">Lista de Presente</a></li>
          <li><a href="#rsvp">Confirme sua Presença!</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
