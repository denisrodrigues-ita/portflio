import React from "react";
import {
  FaReact,
  FaBootstrap,
  FaHtml5,
  FaCss3,
  FaGithub,
} from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import CircularProgressBar from "../components/CircularProgressBar";
import styles from "../css/skills.module.css";

document.title = "Denis Rodrigues - Skills";

const Skills = () => {
  return (
    <>
      <section
        className={`${styles.skills} container mt-5`}
      >
        <h1>Skills.</h1>
        <div className="row row-cols-2 row-cols-md-3 g-2">
          <div className="col">
            <div className="card h-100 text-dark bg-light border-secundary">
              <FaHtml5 size={100} />
              <div className="card-body">
                <h5 className="card-title">HTML5</h5>
                <p className="card-text">
                  HTML é a linguagem de marcação utilizada para criar páginas
                  web.
                </p>
                {/* <!-- Button trigger modal --> */}
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#html"
                >
                  Ver Mais
                </button>

                {/* <!-- Modal --> */}
                <div
                  className="modal fade"
                  id="html"
                  tabIndex="-1"
                  aria-labelledby="html"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="html">
                          <FaHtml5 size={50} /> HTML5
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <p className="my-3 mx-auto">
                          HTML5 é a quinta versão da linguagem de marcação HTML
                          usada para criar e estruturar conteúdo na web,
                          permitindo a criação de páginas mais interativas e com
                          recursos multimídia.
                        </p>
                        <div>
                          <div className="d-flex align-items-baseline justify-content-between my-3">
                            <p>Estrutura do documento</p>
                            <div style={{ width: 80, height: 80 }}>
                              <CircularProgressBar value={96} />
                            </div>
                          </div>
                          <div className="d-flex align-items-baseline justify-content-between my-3">
                            <p>tags semânticas</p>
                            <div style={{ width: 80, height: 80 }}>
                              <CircularProgressBar value={94} />
                            </div>
                          </div>
                          <div className="d-flex align-items-baseline justify-content-between my-3">
                            <p>Utilização de elementos de formulário</p>
                            <div style={{ width: 80, height: 80 }}>
                              <CircularProgressBar value={94} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Fechar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 text-dark bg-light border-secundary">
              <FaCss3 size={100} />
              <div className="card-body">
                <h5 className="card-title">CSS3</h5>
                <p className="card-text">
                  CSS é uma tecnologia utilizada para estilizar páginas web.
                </p>
                {/* <!-- Button trigger modal --> */}
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#css"
                >
                  Ver Mais
                </button>

                {/* <!-- Modal --> */}
                <div
                  className="modal fade"
                  id="css"
                  tabIndex="-1"
                  aria-labelledby="cssLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="cssLabel">
                          <FaCss3 size={50} /> CSS3
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <p className="my-3 mx-auto">
                          CSS3 é a terceira versão da linguagem de estilo em
                          cascata (CSS) usada para definir a aparência e layout
                          de elementos HTML em uma página web. Ele introduz
                          novos recursos, como seletores avançados, efeitos de
                          transição e animação, flexbox e grid layout, entre
                          outros, para permitir que os desenvolvedores criem
                          designs mais sofisticados e responsivos.
                        </p>
                        <div>
                          <div className="d-flex align-items-baseline justify-content-between my-3">
                            <p>Seletores avançados</p>
                            <div style={{ width: 80, height: 80 }}>
                              <CircularProgressBar value={95} />
                            </div>
                          </div>
                          <div className="d-flex align-items-baseline justify-content-between my-3">
                            <p>Box model</p>
                            <div style={{ width: 80, height: 80 }}>
                              <CircularProgressBar value={95} />
                            </div>
                          </div>
                          <div className="d-flex align-items-baseline justify-content-between my-3">
                            <p>Flexbox e grid layout</p>
                            <div style={{ width: 80, height: 80 }}>
                              <CircularProgressBar value={96} />
                            </div>
                          </div>
                          <div className="d-flex align-items-baseline justify-content-between my-3">
                            <p>Transições e animações CSS</p>
                            <div style={{ width: 80, height: 80 }}>
                              <CircularProgressBar value={89} />
                            </div>
                          </div>
                          <div className="d-flex align-items-baseline justify-content-between my-3">
                            <p>Media queries</p>
                            <div style={{ width: 80, height: 80 }}>
                              <CircularProgressBar value={92} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Fechar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 text-dark bg-light border-secundary">
              <TbBrandJavascript size={100} />
              <div className="card-body">
                <h5 className="card-title">Javascript</h5>
                <p className="card-text">
                  JavaScript é utilizada para adicionar interatividade e
                  dinamismo às páginas web.
                </p>
                {/* <!-- Button trigger modal --> */}
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#js"
                >
                  Ver Mais
                </button>

                {/* <!-- Modal --> */}
                <div
                  className="modal fade"
                  id="js"
                  tabIndex="-1"
                  aria-labelledby="jsLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="jsLabel">
                          <TbBrandJavascript size={50} /> Javascript
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <p className="my-3 mx-auto">
                          JavaScript é uma linguagem de programação de alto
                          nível usada para criar aplicativos web interativos e
                          dinâmicos. Ele é executado no lado do cliente, no
                          navegador do usuário, e pode ser usado para manipular
                          elementos HTML, criar animações, validar formulários,
                          enviar e receber dados de um servidor, entre outras
                          funcionalidades. É uma das linguagens de programação
                          mais populares e amplamente utilizadas na web.
                        </p>
                        <div>
                          <div className="d-flex align-items-baseline justify-content-between my-3">
                            <p>Manipulação do DOM</p>
                            <div style={{ width: 80, height: 80 }}>
                              <CircularProgressBar value={94} />
                            </div>
                          </div>
                          <div className="d-flex align-items-baseline justify-content-between my-3">
                            <p>Eventos</p>
                            <div style={{ width: 80, height: 80 }}>
                              <CircularProgressBar value={92} />
                            </div>
                          </div>
                          <div className="d-flex align-items-baseline justify-content-between my-3">
                            <p>Funções</p>
                            <div style={{ width: 80, height: 80 }}>
                              <CircularProgressBar value={96} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Fechar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 text-dark bg-light border-secundary">
              <FaReact size={100} />
              <div className="card-body">
                <h5 className="card-title">React.js</h5>
                <p className="card-text">
                  React é uma biblioteca utilizada para criar interfaces de
                  usuário (UI) em aplicações web.
                </p>
                {/* <!-- Button trigger modal --> */}
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#react"
                >
                  Ver Mais
                </button>

                {/* <!-- Modal --> */}
                <div
                  className="modal fade"
                  id="react"
                  tabIndex="-1"
                  aria-labelledby="reactLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="reactLabel">
                          <FaReact size={50} /> React.js
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <p className="my-3 mx-auto">
                          React, é uma biblioteca JavaScript de código aberto
                          usada para criar interfaces de usuário (UI) em páginas
                          web. Desenvolvida pelo Facebook, ela permite criar
                          componentes reutilizáveis em uma página web, atualizar
                          apenas as partes necessárias da interface quando
                          ocorrerem mudanças e oferece um fluxo de dados
                          unidirecional para gerenciar o estado da aplicação.
                          React é amplamente utilizado no desenvolvimento de
                          aplicativos web modernos e escaláveis.
                        </p>
                        <div>
                          <div className="d-flex align-items-baseline justify-content-between my-3">
                            <p>Manipulação do DOM</p>
                            <div style={{ width: 80, height: 80 }}>
                              <CircularProgressBar value={94} />
                            </div>
                          </div>
                          <div className="d-flex align-items-baseline justify-content-between my-3">
                            <p>Eventos</p>
                            <div style={{ width: 80, height: 80 }}>
                              <CircularProgressBar value={92} />
                            </div>
                          </div>
                          <div className="d-flex align-items-baseline justify-content-between my-3">
                            <p>Funções</p>
                            <div style={{ width: 80, height: 80 }}>
                              <CircularProgressBar value={96} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Fechar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 text-dark bg-light border-secundary">
              <FaReact size={100} />
              <div className="card-body">
                <h5 className="card-title">React Native</h5>
                <p className="card-text">
                  React Native é uma biblioteca para criar aplicativos nativos
                  para iOS e Android.
                </p>
                {/* <!-- Button trigger modal --> */}
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#reactNative"
                >
                  Ver Mais
                </button>

                {/* <!-- Modal --> */}
                <div
                  className="modal fade"
                  id="reactNative"
                  tabIndex="-1"
                  aria-labelledby="reactNativeLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="reactNativeLabel">
                          <FaReact size={50} /> React Native
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <p className="my-3 mx-auto">
                          React Native é um framework de desenvolvimento de
                          aplicativos móveis multiplataforma baseado em React.
                          Ele permite que os desenvolvedores criem aplicativos
                          nativos para iOS e Android usando a mesma base de
                          código JavaScript. O React Native usa uma abordagem de
                          desenvolvimento "escreva uma vez, execute em qualquer
                          lugar" (write once, run anywhere) para criar
                          aplicativos móveis que parecem e funcionam como
                          aplicativos nativos, mas são desenvolvidos de forma
                          mais rápida e eficiente do que os aplicativos nativos
                          tradicionais. Isso o torna uma escolha popular para o
                          desenvolvimento de aplicativos móveis híbridos.
                        </p>
                        <div>
                          <div className="d-flex align-items-baseline justify-content-between my-3">
                            <p>Componentes React</p>
                            <div style={{ width: 80, height: 80 }}>
                              <CircularProgressBar value={96} />
                            </div>
                          </div>
                          <div className="d-flex align-items-baseline justify-content-between my-3">
                            <p>Estilos e layout</p>
                            <div style={{ width: 80, height: 80 }}>
                              <CircularProgressBar value={96} />
                            </div>
                          </div>
                          <div className="d-flex align-items-baseline justify-content-between my-3">
                            <p>Componentes nativos</p>
                            <div style={{ width: 80, height: 80 }}>
                              <CircularProgressBar value={94} />
                            </div>
                          </div>
                          <div className="d-flex align-items-baseline justify-content-between my-3">
                            <p>Estado e ciclo de vida dos componentes</p>
                            <div style={{ width: 80, height: 80 }}>
                              <CircularProgressBar value={94} />
                            </div>
                          </div>
                          <div className="d-flex align-items-baseline justify-content-between my-3">
                            <p>Renderização</p>
                            <div style={{ width: 80, height: 80 }}>
                              <CircularProgressBar value={96} />
                            </div>
                          </div>
                          <div className="d-flex align-items-baseline justify-content-between my-3">
                            <p>Uso de bibliotecas</p>
                            <div style={{ width: 80, height: 80 }}>
                              <CircularProgressBar value={94} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Fechar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 text-dark bg-light border-secundary">
              <FaGithub size={100} />
              <div className="card-body">
                <h5 className="card-title">GitHub</h5>
                <p className="card-text">
                  GitHub é uma plataforma de hospedagem de código-fonte e
                  colaboração de projetos.
                </p>
                {/* <!-- Button trigger modal --> */}
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#github"
                >
                  Ver Mais
                </button>

                {/* <!-- Modal --> */}
                <div
                  className="modal fade"
                  id="github"
                  tabIndex="-1"
                  aria-labelledby="githublLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="githublLabel">
                          <FaGithub size={50} /> GitHub
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <p className="my-3 mx-auto">
                          GitHub é uma plataforma de hospedagem de código-fonte
                          na nuvem, que permite que desenvolvedores e equipes de
                          desenvolvimento colaborem no desenvolvimento de
                          software. Ele permite que os usuários armazenem e
                          compartilhem seus projetos de software com outros
                          desenvolvedores em todo o mundo, controlando o
                          histórico de alterações e o controle de versão do
                          código-fonte. GitHub oferece ferramentas para
                          gerenciar problemas, solicitações de pull, integração
                          contínua, além de facilitar a colaboração em equipe e
                          o compartilhamento de código aberto.
                        </p>
                        <div>
                          <div className="d-flex align-items-baseline justify-content-between my-3">
                            <p>Controle de versão</p>
                            <div style={{ width: 80, height: 80 }}>
                              <CircularProgressBar value={80} />
                            </div>
                          </div>
                          <div className="d-flex align-items-baseline justify-content-between my-3">
                            <p>Gerenciamento de branch e merge</p>
                            <div style={{ width: 80, height: 80 }}>
                              <CircularProgressBar value={78} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 text-dark bg-light border-secundary">
              <FaBootstrap size={100} />
              <div className="card-body">
                <h5 className="card-title">Bootstrap 5</h5>
                <p className="card-text">
                  Bootstrap 5 é um dos frameworks mais populares para
                  desenvolvimento front-end de sites e aplicativos.
                </p>
                {/* <!-- Button trigger modal --> */}
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#bootstrap"
                >
                  Ver Mais
                </button>

                {/* <!-- Modal --> */}
                <div
                  className="modal fade"
                  id="bootstrap"
                  tabIndex="-1"
                  aria-labelledby="bootstrapLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="bootstrapLabel">
                          <FaBootstrap size={50} /> Bootstrap 5
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <p className="my-3 mx-auto">
                          Bootstrap 5 é uma das mais populares bibliotecas de
                          componentes front-end para desenvolvimento web
                          responsivo. Ele fornece um conjunto abrangente de
                          componentes, estilos e utilitários que os
                          desenvolvedores podem usar para criar rapidamente
                          layouts e interfaces de usuário responsivos e
                          atraentes. O Bootstrap é baseado em HTML, CSS e
                          JavaScript e permite que os desenvolvedores criem
                          designs personalizados de maneira fácil e eficiente,
                          além de ser altamente compatível com uma variedade de
                          plataformas e navegadores.
                        </p>
                        <div>
                          <div className="d-flex align-items-baseline justify-content-between my-3">
                            <p>Componentes</p>
                            <div style={{ width: 80, height: 80 }}>
                              <CircularProgressBar value={96} />
                            </div>
                          </div>
                          <div className="d-flex align-items-baseline justify-content-between my-3">
                            <p>Tipografia</p>
                            <div style={{ width: 80, height: 80 }}>
                              <CircularProgressBar value={92} />
                            </div>
                          </div>
                          <div className="d-flex align-items-baseline justify-content-between my-3">
                            <p>Estilos responsivos</p>
                            <div style={{ width: 80, height: 80 }}>
                              <CircularProgressBar value={94} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
