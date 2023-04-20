import React from "react";
import ilustracao1 from "../img/sobre/ilustracao1.jpg";
import ilustracao2 from "../img/sobre/ilustracao2.jpg";
import ilustracao3 from "../img/sobre/ilustracao3.jpg";
import ilustracao4 from "../img/sobre/ilustracao4.jpg";
import ilustracao5 from "../img/sobre/ilustracao5.jpg";
import ilustracao6 from "../img/sobre/ilustracao6.jpg";
import ReactGA from "react-ga4";

import styles from "../css/sobre.module.css";

document.title = "Denis Rodrigues - Sobre";

const Sobre = () => {
  React.useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);
  return (
    <section
      className={`${styles.sobre} container justify-content-center align-items-center fs-5 mt-5`}
    >
      <h1>Sobre.</h1>
      <div className="row my-5 align-items-center">
        <div className="col-12 col-md-6">
          <p>
            Olá, meu nome é Denis Rodrigues, sou um desenvolvedor front-end e
            mobile com habilidades em HTML, CSS, Javascript, React.js, React
            Native, Bootstrap 5 e muito mais. Atualmente estou cursando o último
            ano da faculdade de Análise e Desenvolvimento de Sistemas, além de
            ter estagiado em uma empresa de tecnologia, o que me proporcionou
            experiência prática na área.
          </p>
        </div>
        <div className="col-12 col-md-6">
          <img
            className="img-fluid rounded"
            loading="lazy"
            src={ilustracao1}
            alt="ilustracao"
          />
        </div>
      </div>

      <div className="row my-5 align-items-center">
        <div className="col-12 col-md-6 order-1 order-md-0">
          <img
            className="img-fluid rounded"
            loading="lazy"
            src={ilustracao2}
            alt="ilustracao"
          />
        </div>
        <div className="col-12 col-md-6 order-0 order-md-1">
          <p>
            Sou apaixonado por desenvolvimento web e mobile, e tenho como
            objetivo criar interfaces de alta qualidade e experiências
            intuitivas para os usuários. Busco sempre me manter atualizado sobre
            as tendências e novidades do mercado, e estou constantemente
            aprimorando minhas habilidades através da aprendizagem e troca de
            experiências com profissionais do mercado.
          </p>
        </div>
      </div>

      <div className="row my-5 align-items-center">
        <div className="col-12 col-md-6">
          <p>
            Minhas habilidades em resolução de problemas, comunicação e
            colaboração em equipe me permitem trabalhar em projetos complexos e
            ambientes acelerador. Acredito na importância da colaboração e do
            compartilhamento de ideias com outros desenvolvedores e colegas de
            trabalho, para que possamos alcançar os melhores resultados.
          </p>
        </div>
        <div className="col-12 col-md-6">
          <img
            className="img-fluid rounded"
            loading="lazy"
            src={ilustracao3}
            alt="ilustacao"
          />
        </div>
      </div>
      <div className="row my-5 align-items-center">
        <div className="col-12 col-md-6 order-1 order-md-0">
          <img
            className="img-fluid rounded"
            loading="lazy"
            src={ilustracao4}
            alt="ilustracao"
          />
        </div>
        <div className="col-12 col-md-6 order-0 order-md-1">
          <div className="row "></div>
          <p>
            Como desenvolvedor, meu compromisso é criar interfaces web e mobile
            de alta qualidade que sejam intuitivas, funcionais e agradáveis aos
            usuários. Além disso, possuo habilidades sólidas em resolução de
            problemas e colaboração em equipe.
          </p>
        </div>
      </div>
      <div className="row my-5 align-items-center">
        <div className="col-12 col-md-6">
          <p>
            Estou sempre buscando expandir minhas habilidades e conhecimentos
            por meio da aprendizagem contínua e da exploração de novas
            tecnologias e ferramentas. Também valorizo a colaboração e o
            compartilhamento de ideias com outros desenvolvedores e colegas de
            trabalho.
          </p>
        </div>
        <div className="col-12 col-md-6">
          <img
            className="img-fluid rounded"
            loading="lazy"
            src={ilustracao5}
            alt="ilustracao"
          />
        </div>
      </div>
      <div className="row my-5 align-items-center">
        <div className="col-12 col-md-6 order-1 order-md-0">
          <img
            className="img-fluid rounded"
            loading="lazy"
            src={ilustracao6}
            alt="ilustracao"
          />
        </div>
        <div className="col-12 col-md-6 order-0 order-md-1">
          <p>
            Se você está procurando um desenvolvedor front-end apaixonado e
            altamente motivado para trabalhar em sua equipe, entre em contato
            comigo. Será um prazer conversar com você.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
