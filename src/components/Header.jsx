import React from "react";
import { NavLink, Link } from "react-router-dom";
import {
  AiOutlineWhatsApp,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
import styles from "../css/header.module.css";

const Header = () => {
  return (
    <header className={styles.headerCustom}>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <div></div>
          <button
            className="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="sobre">
                  Sobre
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="skills">
                  Skills
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="projetos">
                  Projetos
                </NavLink>
              </li>

              <div className={`${styles.socialMidias} d-flex`}>
                <Link href="https://wa.me/+5535984484087" target="_blank">
                  <AiOutlineWhatsApp />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/denisrodrigues-ita/"
                  target="_blank"
                >
                  <AiOutlineLinkedin />
                </Link>
                <Link
                  href="https://github.com/denisrodrigues-ita"
                  target="_blank"
                >
                  <AiOutlineGithub />
                </Link>
                <Link
                  href="https://www.instagram.com/denisrodrigues.ita/"
                  target="_blank"
                >
                  <AiOutlineInstagram />
                </Link>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
