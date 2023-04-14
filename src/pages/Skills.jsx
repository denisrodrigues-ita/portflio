import React from "react";
import html from "../img/skills/html.svg";
import css from "../img/skills/css.svg";
import js from "../img/skills/javascript.svg";
import react from "../img/skills/react.svg";
import github from "../img/skills/github.svg";
import styles from "../css/skills.module.css";

const Skills = () => {
  return (
    <section
      className={`${styles.skills} container d-flex justify-content-center align-items-center mt-5 fs-5`}
    >
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <div className="col">
          <div className="card">
            <img src={html} className="card-img-top" alt="html logo" />
            <div className="card-body">
              <h5 className="card-title">HTML5</h5>
              <p className="card-text">
                HTML é a linguagem de marcação utilizada para criar páginas web.
                Ela é composta por um conjunto de elementos que definem a
                estrutura e o conteúdo da página, como títulos, parágrafos,
                imagens e links.
              </p>
              <a href="#" className="btn btn-primary">
                Ver Mais
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={css} className="card-img-top" alt="css logo" />
            <div className="card-body">
              <h5 className="card-title">CSS3</h5>
              <p className="card-text">
                CSS é a sigla para Cascading Style Sheets, que em português
                significa "Folhas de Estilo em Cascata". É uma tecnologia
                utilizada para estilizar páginas web criadas com HTML,
                permitindo que você personalize a aparência de elementos como
                fontes, cores, tamanhos e posições.
              </p>
              <a href="#" className="btn btn-primary">
                Ver Mais
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={js} className="card-img-top" alt="javascript logo" />
            <div className="card-body">
              <h5 className="card-title">Javascript</h5>
              <p className="card-text">
                JavaScript é uma linguagem de programação utilizada para
                adicionar interatividade e dinamismo às páginas web. Com ela, é
                possível criar animações, validar formulários, fazer requisições
                a servidores, entre outras funcionalidades.
              </p>
              <a href="#" className="btn btn-primary">
                Ver Mais
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={react} className="card-img-top" alt="react logo" />
            <div className="card-body">
              <h5 className="card-title">React.js</h5>
              <p className="card-text">
                React é uma biblioteca de JavaScript utilizada para criar
                interfaces de usuário (UI) em aplicações web. Ele permite a
                criação de componentes reutilizáveis, tornando o desenvolvimento
                de aplicações web mais eficiente e escalável.
              </p>
              <a href="#" className="btn btn-primary">
                Ver Mais
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={react} className="card-img-top" alt="react native logo" />
            <div className="card-body">
              <h5 className="card-title">React Native</h5>
              <p className="card-text">
                React Native é uma estrutura de desenvolvimento de aplicativos
                móveis que utiliza a biblioteca React para criar aplicativos
                nativos para iOS e Android. Com React Native, é possível
                desenvolver aplicativos móveis utilizando JavaScript e
                componentes reutilizáveis, proporcionando uma experiência de
                desenvolvimento semelhante à do React para a web.
              </p>
              <a href="#" className="btn btn-primary">
                Ver Mais
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={github} className="card-img-top" alt="git hub logo" />
            <div className="card-body">
              <h5 className="card-title">GitHub</h5>
              <p className="card-text">
                GitHub é uma plataforma de hospedagem de código-fonte e
                colaboração de projetos. Ela permite que desenvolvedores
                compartilhem e trabalhem em conjunto em projetos de software,
                versionando e controlando alterações no código.
              </p>
              <a href="#" className="btn btn-primary">
                Ver Mais
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
