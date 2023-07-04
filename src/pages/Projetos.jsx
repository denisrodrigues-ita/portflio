import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import ReactGA from "react-ga4";
import styles from "../css/projetos.module.css";
import projetosJson from "../data/projetos.json";

const Projetos = () => {
  document.title = "Denis Rodrigues - Portfolio";
  React.useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  React.useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    const tooltipList = [...tooltipTriggerList].map(
      (tooltipTriggerEl) => new window.bootstrap.Tooltip(tooltipTriggerEl)
    );
  }, []);

  return (
    <section className="container mt-5">
      <h1>Principais Projetos.</h1>
      <div className="row row-cols-1 g-2">
        {projetosJson.map((projeto, index) => (
          <div className="col" key={index}>
            <div className="card">
              <div className="row g-0">
                <div
                  className={`${styles.projetos} col-md-4`}
                  style={{ overflow: "auto", height: "20rem" }}
                >
                  <img
                    src={projeto.img}
                    className="img-fluid rounded-start"
                    alt="projeto utilizando grid box"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{projeto.title}</h5>
                    {projeto.description.map((item, index) => (
                      <p key={index} className="card-text">
                        {item}
                      </p>
                    ))}
                    <Link
                      to={projeto.link}
                      type="button"
                      className="btn btn-primary"
                      target="_blank"
                    >
                      Ver Site
                    </Link>
                    <Link
                      to={projeto.github}
                      type="button"
                      target="_blank"
                      className="text-dark mx-3"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-custom-class="custom-tooltip"
                      data-bs-title="Ver código no Github"
                    >
                      <FaGithub size={30} />
                    </Link>
                    <p className="card-text mt-2">
                      <small className="text-body-secondary">
                        <strong>Tecnologias: </strong>
                        {projeto.stack}
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projetos;
