import React from "react";
import { Link } from "react-router-dom";
import ConsumoApi from "../img/projetos/ConsumoApi.png";
import Dashboard from "../img/projetos/Dashboard.png";
import FlexEGrid from "../img/projetos/FlexEGrid.png";
import Projetofinal from "../img/projetos/Projetofinal.png";
import Projetojavascript from "../img/projetos/ProjetoJavascript.png";
import ProjetoReact from "../img/projetos/ProjetoReact.png";
import ProjetoClima from "../img/projetos/ProjetoClima.png";
import { FaGithub } from "react-icons/fa";
import ReactGA from "react-ga4";
import styles from "../css/projetos.module.css";

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
        <div className="col">
          <div className="card">
            <div className="row g-0">
              <div
                className={`${styles.projetos} col-md-4`}
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

        <div className="col">
          <div className="card">
            <div className="row g-0">
              <div
                className={`${styles.projetos} col-md-4`}
                style={{ overflow: "auto", height: "20rem" }}
              >
                <img
                  src={ProjetoClima}
                  className="img-fluid rounded-start"
                  alt="projeto clima"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">
                    Consultando o clima com o consumo da API WeatherAPI
                    utilizando Tailwind, TypeScript e Next.js
                  </h5>
                  <p className="card-text">
                    Este projeto consiste em um aplicativo de previsão do tempo
                    que consome a API WeatherAPI, desenvolvido utilizando as
                    tecnologias Tailwind, TypeScript e Next.js.
                  </p>
                  <p className="card-text">
                    Para lidar com a formatação e exibição dos dados da API,
                    utilizei o TypeScript, uma linguagem de programação tipada
                    que me permitiu definir tipos de dados mais precisos e
                    garantir a integridade dos dados em tempo de compilação.
                  </p>
                  <p className="card-text">
                    Além disso, o Next.js foi escolhido como o framework
                    principal para o projeto, oferecendo uma base sólida para o
                    desenvolvimento de aplicações React com renderização do lado
                    do servidor (SSR). Ele possibilitou uma construção eficiente
                    do aplicativo, fornecendo recursos avançados de roteamento e
                    gerenciamento de estado.
                  </p>
                  <p className="card-text">
                    Quanto ao aspecto visual, optei pelo Tailwind CSS, uma
                    estrutura de design utilitária que me permitiu criar uma
                    interface moderna e estilizada de forma rápida e
                    consistente. Através do uso de classes pré-definidas e uma
                    abordagem baseada em componentes, pude personalizar o estilo
                    do aplicativo de acordo com as necessidades do projeto.
                  </p>

                  <Link
                    to="https://projeto-clima.vercel.app/"
                    type="button"
                    className="btn btn-primary"
                    target="_blank"
                  >
                    Ver Site
                  </Link>
                  <Link
                    to="https://github.com/denisrodrigues-ita/api-weather"
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
                      Tailwind, Typescript e Next.
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
                className={`${styles.projetos} col-md-4`}
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
                className={`${styles.projetos} col-md-4`}
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
                className={`${styles.projetos} col-md-4`}
                style={{ overflow: "auto", height: "20rem" }}
              >
                <img
                  src={Dashboard}
                  className="img-fluid rounded-start"
                  alt="consumo de api com dashboard"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">
                    Visualização de Dados com React e Vite: Construindo um
                    Dashboard Dinâmico com Chart.js e APIs
                  </h5>
                  <p className="card-text">
                    O projeto que desenvolvi foi um dashboard utilizando as
                    tecnologias React e Vite, juntamente com a biblioteca
                    Chart.js para visualização de dados. O objetivo principal
                    foi criar um painel interativo que consumisse uma API e
                    exibisse os dados em gráficos.
                  </p>
                  <p className="card-text">
                    A biblioteca Chart.js foi utilizada para criar diferentes
                    tipos de gráficos, como gráficos de barra, linhas e torta.
                    Foi necessário compreender a documentação e personalizar as
                    configurações e estilos dos gráficos de acordo com as
                    necessidades do projeto.
                  </p>
                  <p className="card-text">
                    No geral, o projeto exigiu um bom conhecimento em React e
                    Vite, além de familiaridade com a biblioteca Chart.js. A
                    integração de tecnologias diferentes e a comunicação com a
                    API foram parte fundamental do desenvolvimento, resultando
                    em um dashboard funcional e visualmente atraente capaz de
                    exibir dados de forma clara e intuitiva.
                  </p>

                  <Link
                    to="https://dashboard-ddev.vercel.app/"
                    type="button"
                    className="btn btn-primary"
                    target="_blank"
                  >
                    Ver Site
                  </Link>
                  <Link
                    to="https://github.com/denisrodrigues-ita/dashboard"
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
                      HTML, CSS, Javascript, React e biblioteca Chart.js.
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
