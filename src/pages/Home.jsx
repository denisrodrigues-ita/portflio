import React from "react";
import styles from "../css/home.module.css";
import ReactGA from "react-ga4";
import imageProfile from "../img/denis.png";
import TypeWriter from "../components/TypeWriter";
import { BsDownload } from "react-icons/bs";
import cv from "../assets/CV.pdf";

const Home = () => {
  const texto1 = "Desenvolvedor Front-end e Mobile.";
  const texto2 =
    "Conhecimentos em HTML, CSS, Javascript, React.js, React Native, Bootstrap 5 e muito mais.";
  const texto3 = "Análise e desenvolvimento de Sistemas.";

  document.title = "Denis Rodrigues - Home";
  React.useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  return (
    <section className={`${styles.homeSection} container lh-1`}>
      <div className="row d-flex justify-content-start align-items-center w-100">
        <div className="col-12 col-md-6">
          <h1 className="text-start">
            Denis <br></br>Rodrigues.
          </h1>
          <p className="mt-3 text-start">
            {<TypeWriter text={texto1} time={60} />}
          </p>
          <p className="text-start">{<TypeWriter text={texto2} time={25} />}</p>
          <p className="text-start">{<TypeWriter text={texto3} time={50} />}</p>
          <div className="d-flex">
            <a
              href={cv}
              target="_blank"
              rel="noreferrer"
              download
              className={`btn btn-primary mt-3`}
            >
              Currículo <BsDownload />
            </a>
          </div>
        </div>
        <div className={`${styles.avatar} col-12 col-md-6 mt-5`}>
          <img src={imageProfile} alt="Denis Rodrigues" className="img-fluid" />
        </div>
      </div>
    </section>
  );
};

export default Home;
