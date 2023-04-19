import React from "react";
import {
  AiOutlineWhatsApp,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import styles from "../css/footer.module.css";

const Footer = () => {
  return (
    <footer className="container my-5 d-flex justify-content-center">
      <Link
        target="_blank"
        to="https://wa.me/5535984484087"
        className={`${styles.footerLink}`}
      >
        <AiOutlineWhatsApp size={50} />
      </Link>
      <Link
        className={`${styles.footerLink}`}
        target="_blank"
        to="https://www.linkedin.com/in/denisrodrigues-ita/"
      >
        <AiOutlineLinkedin size={50} />
      </Link>
      <Link
        className={`${styles.footerLink}`}
        target="_blank"
        to="https://github.com/denisrodrigues-ita"
      >
        <AiOutlineGithub size={50} />
      </Link>
      <Link
        className={`${styles.footerLink}`}
        target="_blank"
        to="https://www.instagram.com/denisrodrigues.ita/"
      >
        <AiOutlineInstagram size={50} />
      </Link>
    </footer>
  );
};

export default Footer;
