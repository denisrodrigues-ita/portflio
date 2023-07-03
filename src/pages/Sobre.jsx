import React from "react";
import ReactGA from "react-ga4";
import styles from "../css/sobre.module.css";
import sobreJson from "../data/sobre.json";

const Sobre = () => {
  document.title = "Denis Rodrigues - Sobre";
  React.useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);
  return (
    <section
      className={`${styles.sobre} container justify-content-center align-items-center fs-5 mt-5`}
    >
      <h1>Sobre.</h1>

      {sobreJson.map((item, index) => (
        <div
          key={index}
          className={`${styles.divReverse} row mb-5 align-items-center`}
        >
          <div className="col-12 col-md-6">
            <p>{item.text}</p>
          </div>
          <div className="col-12 col-md-6">
            <img
              className="img-fluid rounded"
              loading="lazy"
              src={item.ilustracao}
              alt="ilustracao"
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Sobre;
