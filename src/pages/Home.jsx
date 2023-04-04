import React from "react";
import "animate.css";

setInterval(() => {
  document.querySelector("h1").classList.add("animate__bounce");
  document.querySelector("h1").classList.add("animate__infinite");
  document.querySelector("h1").classList.add("animate__slow");
  // document.querySelector("h1").classList.add("animate__delay-5s");
  document.querySelector("h1").classList.remove("animate__backInUp");
}, 1000);
setInterval(() => {
  document.querySelector("h1").classList.remove("animate__bounce");
}, 5000);

const Home = () => {
  return (
    <section>
      <h1 className="animate__animated animate__backInUp">
        Denis <br></br>Rodrigues.
      </h1>
      <p className="animate__animated animate__backInRight animate__delay-1s">
        Desenvolvedor Front-end e Mobile.
      </p>
      <p className="animate__animated animate__backInDown animate__delay-2s">
        Conhecimentos em HTML, CSS, Javascript, React.js, React Native,
        Bootstrap 5.
      </p>
      <p className="animate__animated animate__backInLeft animate__delay-3s">
        Formado em Análise e desenvolvimento de Sistemas.
      </p>
    </section>
  );
};

export default Home;
