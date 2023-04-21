import React from "react";
import "animate.css";
import styles from "../css/home.module.css";
import ReactGA from "react-ga4";
import imageProfile from "../img/denis.png";

document.title = "Denis Rodrigues - Home";

const Home = () => {
  React.useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  const titleRef = React.useRef(null);
  const p1Ref = React.useRef(null);
  const p2Ref = React.useRef(null);
  const p3Ref = React.useRef(null);

  React.useEffect(() => {
    const titleEl = titleRef.current;
    const p1El = p1Ref.current;
    const p2El = p2Ref.current;
    const p3El = p3Ref.current;

    const animateTitle = () => {
      titleEl.classList.add(
        "animate__bounce",
        "animate__infinite",
        "animate__slow"
      );
      titleEl.classList.remove("animate__backInUp");
      setTimeout(() => {
        titleEl.classList.remove("animate__bounce");
      }, 2000);
    };

    const animateP1 = () => {
      p1El.classList.remove("animate__backInRight");
      p1El.classList.add("animate__rubberBand");
      setTimeout(() => {
        p1El.classList.remove("animate__rubberBand");
      }, 5000);
    };

    const animateP2 = () => {
      p2El.classList.remove("animate__backInDown");
      p2El.classList.add("animate__tada");
      setTimeout(() => {
        p2El.classList.remove("animate__tada");
      }, 7000);
    };

    const animateP3 = () => {
      p3El.classList.remove("animate__backInLeft");
      p3El.classList.add("animate__swing");
      setTimeout(() => {
        p3El.classList.remove("animate__swing");
      }, 8000);
    };

    animateTitle();
    setTimeout(() => {
      animateP1();
      setTimeout(() => {
        animateP2();
        setTimeout(() => {
          animateP3();
        }, 3000);
      }, 2000);
    }, 4000);
  }, []);

  return (
    <section className={`${styles.homeSection} lh-1`}>
      <div className="row d-flex justify-content-start align-items-center">
        <div className="col-12 col-md-6">
          <h1
            ref={titleRef}
            className="animate__animated animate__backInUp text-start"
          >
            Denis <br></br>Rodrigues.
          </h1>
          <p
            ref={p1Ref}
            className="animate__animated animate__backInRight mt-3 text-start"
          >
            Desenvolvedor Front-end e Mobile.
          </p>
          <p
            ref={p2Ref}
            className="animate__animated animate__backInDown text-start"
          >
            Conhecimentos em HTML, CSS, Javascript, React.js, React Native,
            Bootstrap 5 e muito mais.
          </p>
          <p
            ref={p3Ref}
            className="animate__animated animate__backInLeft text-start"
          >
            Análise e desenvolvimento de Sistemas.
          </p>
        </div>
        <div className="col-12 col-md-6">
          <img src={imageProfile} alt="Denis Rodrigues" className="img-fluid" />
        </div>
      </div>
    </section>
  );
};

export default Home;
