import React from "react";
import { Link } from "react-router-dom";
import ConsumoApi from "../img/projetos/ConsumoApi.png";
import FlexEGrid from "../img/projetos/FlexEGrid.png";
import Projetofinal from "../img/projetos/Projetofinal.png";
import Projetojavascript from "../img/projetos/ProjetoJavascript.png";
import ProjetoReact from "../img/projetos/ProjetoReact.png";
import { FaGithub } from "react-icons/fa";
import ReactGA from "react-ga4";

document.title = "Denis Rodrigues - Portfolio";

const Projetos = () => {
  useEffect(() => {
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
        <div className="col">
          <div className="card">
            <div className="row g-0">
              <div
                className="col-md-4"
                style={{ overflow: "auto", height: "20rem" }}
              >
                <img
                  src={FlexEGrid}
                  className="img-fluid rounded-start"
                  alt="projeto utilizando grid box"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">
                    Projeto de Web Design: Melhorando a experiência do usuário
                  </h5>
                  <p className="card-text">
                    Um dos primeiros projetos que desenvolvi de uma página
                    responsiva durante o curso da Udemy. Utilizando técnicas
                    avançadas como flexbox e grid layout, consegui criar um
                    layout estruturado e altamente adaptável para diferentes
                    tamanhos de tela.
                  </p>
                  <p className="card-text">
                    Ao longo do projeto, enfrentei alguns desafios que exigiram
                    muita criatividade e solução de problemas. Foi necessário
                    encontrar maneiras de ajustar o layout em diferentes
                    tamanhos de tela, garantindo que a experiência do usuário
                    fosse sempre excelente, independentemente do dispositivo
                    utilizado.
                  </p>
                  <Link
                    to="https://denisrodrigues-ita.github.io/projeto-responsivo/"
                    type="button"
                    className="btn btn-primary"
                    target="_blank"
                  >
                    Ver Site
                  </Link>
                  <Link
                    to="https://github.com/denisrodrigues-ita/flexblog"
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
                      HTML e CSS.
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="row g-0">
              <div
                className="col-md-4"
                style={{ overflow: "auto", maxHeight: "20rem" }}
              >
                <img
                  src={Projetofinal}
                  className="img-fluid rounded-start"
                  alt="projeto utilizando grid box"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">
                    Projeto Final da Udemy: Criando um Site Responsivo com HTML,
                    CSS e JavaScript
                  </h5>
                  <p className="card-text">
                    O projeto final do curso da Udemy foi uma oportunidade
                    incrível para demonstrar meus conhecimentos em HTML, CSS e
                    JavaScript. O projeto teve como objetivo desenvolver um site
                    funcional e atraente, que pudesse ser acessado em diferentes
                    dispositivos e navegadores.
                  </p>

                  <p className="card-text">
                    Durante o desenvolvimento do projeto, utilizei minhas
                    habilidades em diferentes áreas, como a criação de um layout
                    responsivo com HTML e CSS, a animação de elementos com CSS e
                    o desenvolvimento de interações avançadas com JavaScript.
                  </p>
                  <Link
                    to="https://projeto-curso-udemy.netlify.app/"
                    type="button"
                    className="btn btn-primary"
                    target="_blank"
                  >
                    Ver Site
                  </Link>
                  <Link
                    to="https://github.com/denisrodrigues-ita/ProjetoInfusion"
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
                      HTML, CSS e javascript.
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="row g-0">
              <div
                className="col-md-4"
                style={{ overflow: "auto", height: "20rem" }}
              >
                <img
                  src={Projetojavascript}
                  className="img-fluid rounded-start"
                  alt="projeto utilizando grid box"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">
                    Explorando Manipulação do DOM e Requisições via Fetch API em
                    Meu Projeto Final do Curso Origamid
                  </h5>
                  <p className="card-text">
                    Durante o curso Origamid, tive a oportunidade de desenvolver
                    um projeto de página utilizando HTML, CSS e JavaScript. O
                    objetivo do projeto foi criar uma página web interativa e
                    dinâmica que pudesse ser facilmente manipulada pelo usuário.
                  </p>

                  <p className="card-text">
                    Para atingir esse objetivo, utilizei minhas habilidades em
                    manipulação do DOM e requisições via Fetch API. A
                    manipulação do DOM foi fundamental para a criação de
                    interações personalizadas na página, enquanto as requisições
                    via Fetch API foram utilizadas para carregar e exibir
                    informações dinâmicas na página.
                  </p>
                  <Link
                    to="https://denisrodrigues-ita.github.io/animais-fantasticos/"
                    type="button"
                    className="btn btn-primary"
                    target="_blank"
                  >
                    Ver Site
                  </Link>
                  <Link
                    to="https://github.com/denisrodrigues-ita/animais-fantasticos"
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
                      HTML, CSS e javascript.
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="row g-0">
              <div
                className="col-md-4"
                style={{ overflow: "auto", height: "20rem" }}
              >
                <img
                  src={ProjetoReact}
                  className="img-fluid rounded-start"
                  alt="projeto utilizando grid box"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">
                    Explorando Técnicas Avançadas de React em Meu Projeto Final
                    do Curso Origamid: Uma Rede Social para Amantes de Cães
                  </h5>
                  <p className="card-text">
                    Durante o curso Origamid, desenvolvi uma rede social de
                    cachorros em React, com o objetivo de criar uma plataforma
                    interativa para amantes de cães. O projeto envolveu o uso de
                    várias técnicas avançadas de React, incluindo requisições
                    via Fetch API, hooks, React Router e lazy loading.
                  </p>

                  <p className="card-text">
                    O uso de requisições via Fetch API permitiu a obtenção de
                    dados dinâmicos da API do projeto e a atualização
                    instantânea da página, enquanto os hooks do React foram
                    utilizados para gerenciar o estado da aplicação e facilitar
                    a atualização das informações da página. O uso do React
                    Router foi fundamental para a navegação entre as diferentes
                    seções da aplicação, enquanto o lazy loading garantiu a
                    rápida renderização da página, mesmo com uma grande
                    quantidade de dados.
                  </p>
                  <Link
                    to="https://dogs-and-cats.netlify.app/"
                    type="button"
                    className="btn btn-primary"
                    target="_blank"
                  >
                    Ver Site
                  </Link>
                  <Link
                    to="https://github.com/denisrodrigues-ita/dogs"
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
                      HTML, CSS, Javascript e React.
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="row g-0">
              <div
                className="col-md-4"
                style={{ overflow: "auto", height: "20rem" }}
              >
                <img
                  src={ConsumoApi}
                  className="img-fluid rounded-start"
                  alt="projeto utilizando grid box"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">
                    Explorando as Possibilidades do React: Meu Projeto Pessoal
                    com Requisições via Fetch API, Hooks e React Router
                  </h5>
                  <p className="card-text">
                    Desenvolvi um projeto pessoal de página em React para criar
                    uma experiência de usuário mais dinâmica e interativa. O
                    objetivo do projeto foi explorar as possibilidades do React
                    e criar uma página que fosse funcional.
                  </p>

                  <p className="card-text">
                    O projeto envolveu o uso de várias técnicas avançadas de
                    React, incluindo requisições via fetch API, hooks, React
                    Router e components. Através do uso de requisições via fetch
                    API, pude obter dados dinâmicos para a página e fornecer
                    atualizações instantâneas, enquanto o uso de hooks e
                    components facilitou a gestão do estado da aplicação e a
                    construção da interface do usuário.
                  </p>
                  <p className="card-text">
                    O React Router foi fundamental para a navegação entre as
                    diferentes páginas da aplicação, enquanto o uso de
                    components permitiu a reutilização de código e a construção
                    de uma interface de usuário mais eficiente e organizada.
                  </p>
                  <Link
                    to="https://netcine.vercel.app/"
                    type="button"
                    className="btn btn-primary"
                    target="_blank"
                  >
                    Ver Site
                  </Link>
                  <Link
                    to="https://github.com/denisrodrigues-ita/moviesproject"
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
                      HTML, CSS, Javascript e React.
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projetos;
