import React from "react";
import "animate.css";
import styles from "../css/home.module.css";

document.title = "Denis Rodrigues - Home";

setInterval(() => {
  document.querySelector("h1").classList.add("animate__bounce");
  document.querySelector("h1").classList.add("animate__infinite");
  document.querySelector("h1").classList.add("animate__slow");
  document.querySelector("h1").classList.remove("animate__backInUp");
}, 2000);
setInterval(() => {
  document.querySelector("h1").classList.remove("animate__bounce");
}, 4000);
setInterval(() => {
  document.getElementById("p1").classList.remove("animate__backInRight");
  document.getElementById("p1").classList.add("animate__rubberBand");
}, 2000);
setInterval(() => {
  document.getElementById("p1").classList.remove("animate__rubberBand");
}, 7000);

setInterval(() => {
  document.getElementById("p2").classList.remove("animate__backInDown");
  document.getElementById("p2").classList.add("animate__tada");
}, 5000);
setInterval(() => {
  document.getElementById("p2").classList.remove("animate__tada");
}, 10000);

setInterval(() => {
  document.getElementById("p3").classList.remove("animate__backInLeft");
  document.getElementById("p3").classList.add("animate__swing");
}, 8000);
setInterval(() => {
  document.getElementById("p3").classList.remove("animate__swing");
}, 12000);

const Home = () => {
  return (
    <section className={`${styles.homeSection} lh-1`}>
      <h1 className="animate__animated animate__backInUp">
        Denis <br></br>Rodrigues.
      </h1>
      <p id="p1" className="animate__animated animate__backInRight mt-3">
        Desenvolvedor Front-end e Mobile.
      </p>
      <p id="p2" className="animate__animated animate__backInDown">
        Conhecimentos em HTML, CSS, Javascript, React.js, React Native,
        Bootstrap 5 e muito mais.
      </p>
      <p id="p3" className="animate__animated animate__backInLeft">
        Formado em Análise e desenvolvimento de Sistemas.
      </p>
    </section>
  );
};

export default Home;
