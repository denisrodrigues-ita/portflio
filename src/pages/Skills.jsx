import React from "react";
import {
  FaReact,
  FaBootstrap,
  FaHtml5,
  FaCss3,
  FaGithub,
  FaNode,
} from "react-icons/fa";
import {
  TbBrandJavascript,
  TbBrandTailwind,
  TbBrandTypescript,
} from "react-icons/tb";
import { SiChakraui, SiNextdotjs } from "react-icons/si";
import styles from "../css/skills.module.css";
import ReactGA from "react-ga4";

const Skills = () => {
  document.title = "Denis Rodrigues - Skills";
  React.useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  return (
    <>
      <section className={`${styles.skills} container mt-5`}>
        <h1>Principais Skills.</h1>
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
              <TbBrandTypescript size={100} />
              <div className="card-body">
                <h5 className="card-title">Typescript</h5>
                <p className="card-text">
                  Typescript é uma extensão da linguagem JavaScript, adicionando
                  recursos de tipagem estática opcional ao JavaScript.
                </p>
                {/* <!-- Button trigger modal --> */}
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#ts"
                >
                  Ver Mais
                </button>

                {/* <!-- Modal --> */}
                <div
                  className="modal fade"
                  id="ts"
                  tabIndex="-1"
                  aria-labelledby="tsLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="tsLabel">
                          <TbBrandTypescript size={50} /> Typescript
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
                          TypeScript é uma linguagem de programação de código
                          aberto desenvolvida pela Microsoft. Ela é uma extensão
                          da linguagem JavaScript, adicionando recursos de
                          tipagem estática opcional ao JavaScript. Em outras
                          palavras, o TypeScript permite que você escreva
                          JavaScript com a adição de tipos estáticos. Uma das
                          principais vantagens do TypeScript é fornecer mais
                          segurança e confiabilidade ao desenvolvimento de
                          software, detectando erros comuns em tempo de
                          compilação.
                        </p>
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
              <TbBrandTailwind size={100} />
              <div className="card-body">
                <h5 className="card-title">Tailwind</h5>
                <p className="card-text">
                  Tailwind é um framework de CSS de última geração projetado
                  para facilitar o desenvolvimento de interfaces de usuário
                  responsivas e escaláveis.
                </p>
                {/* <!-- Button trigger modal --> */}
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#tailwind"
                >
                  Ver Mais
                </button>

                {/* <!-- Modal --> */}
                <div
                  className="modal fade"
                  id="tailwind"
                  tabIndex="-1"
                  aria-labelledby="tailwindLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="tailwindLabel">
                          <TbBrandTailwind size={50} /> Tailwind
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
                          Tailwind é um framework de CSS de última geração
                          projetado para facilitar o desenvolvimento de
                          interfaces de usuário responsivas e escaláveis. Ele
                          difere dos frameworks tradicionais de CSS, como
                          Bootstrap ou Foundation, ao adotar uma abordagem
                          utility-first (utilidade em primeiro lugar), o que
                          significa que você constrói seu design combinando
                          pequenas classes de utilidade em vez de escrever CSS
                          personalizado.
                        </p>
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
              <SiChakraui size={100} />
              <div className="card-body">
                <h5 className="card-title">Chakra UI</h5>
                <p className="card-text">
                  O "chakra UI" é uma biblioteca de componentes de interface de
                  usuário (UI) para React, um popular framework JavaScript usado
                  para construir interfaces de usuário.
                </p>
                {/* <!-- Button trigger modal --> */}
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#chakraui"
                >
                  Ver Mais
                </button>

                {/* <!-- Modal --> */}
                <div
                  className="modal fade"
                  id="chakraui"
                  tabIndex="-1"
                  aria-labelledby="chakrauiLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="chakrauiLabel">
                          <SiChakraui size={50} /> Chakra UI
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
                          O "chakra UI" é uma biblioteca de componentes de
                          interface de usuário (UI) para React, um popular
                          framework JavaScript usado para construir interfaces
                          de usuário. Chakra UI oferece uma coleção de
                          componentes reutilizáveis e acessíveis que facilitam o
                          desenvolvimento de interfaces modernas e responsivas.
                          Aqui estão alguns pontos principais sobre o Chakra UI:{" "}
                          <br></br>1 - Componentes Acessíveis <br></br>2 -
                          Tematização Fácil <br></br>3 - Estilo Integrado{" "}
                          <br></br>4 - Responsividade <br></br>5 -Componentes
                          Moduláveis
                        </p>
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
              <SiNextdotjs size={100} />
              <div className="card-body">
                <h5 className="card-title">Next.js</h5>
                <p className="card-text">
                  Next.js é um framework de desenvolvimento web construído sobre
                  o React, desenvolvido pela Vercel. Ele oferece uma série de
                  funcionalidades que facilitam a criação de aplicações web e
                  sites estáticos otimizados, rápidos e escaláveis
                </p>
                {/* <!-- Button trigger modal --> */}
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#nextjs"
                >
                  Ver Mais
                </button>

                {/* <!-- Modal --> */}
                <div
                  className="modal fade"
                  id="nextjs"
                  tabIndex="-1"
                  aria-labelledby="nextjsLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="nextjsLabel">
                          <SiNextdotjs size={50} /> Next.js
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
                          Next.js é um framework de desenvolvimento web
                          construído sobre o React, desenvolvido pela Vercel.
                          Ele oferece uma série de funcionalidades que facilitam
                          a criação de aplicações web e sites estáticos
                          otimizados, rápidos e escaláveis. Aqui estão alguns
                          dos principais recursos e vantagens do Next.js:{" "}
                          <br></br>1 - Renderização do lado do servidor (SSR){" "}
                          <br></br>2 - Renderização do lado do cliente (CSR){" "}
                          <br></br>3 - Incremental Static Regeneration (ISR)
                        </p>
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
              <FaNode size={100} />
              <div className="card-body">
                <h5 className="card-title">Node.js</h5>
                <p className="card-text">
                  Node.js é um ambiente de execução de JavaScript que permite
                  executar código JavaScript no lado do servidor. Node.js é
                  construído sobre o motor V8 do Google Chrome, que compila
                  JavaScript diretamente para código de máquina, tornando a
                  execução do código muito rápida.
                </p>
                {/* <!-- Button trigger modal --> */}
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#nodejs"
                >
                  Ver Mais
                </button>

                {/* <!-- Modal --> */}
                <div
                  className="modal fade"
                  id="nodejs"
                  tabIndex="-1"
                  aria-labelledby="nodejsLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="nodejsLabel">
                          <FaNode size={50} /> Node.js
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
                          Node.js é um ambiente de execução de JavaScript que
                          permite executar código JavaScript no lado do
                          servidor. Desenvolvido por Ryan Dahl em 2009, Node.js
                          é construído sobre o motor V8 do Google Chrome, que
                          compila JavaScript diretamente para código de máquina,
                          tornando a execução do código muito rápida. Aqui estão
                          alguns aspectos importantes e vantagens do Node.js:
                          <br></br>1 - JavaScript no lado do servidor
                          <br></br>2 - Modelo de E/S não bloqueante
                          <br></br>3 - Extensibilidade e modularidade
                          <br></br>4 - Comunidade ativa e ecossistema robusto
                          <br></br>5 - Desempenho e escalabilidade
                        </p>
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
        </div>
      </section>
    </>
  );
};

export default Skills;
