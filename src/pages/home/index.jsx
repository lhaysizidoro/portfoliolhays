import React from "react";
import "./home.css";


import perfilhomepage from "./perfilhomepage.png";


import Skills from "../../components/skills/skills";
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'
import email from '../../assets/email.png'
import ProjetosPage from "../projects/projects";



function Home() {
  return (

    <div className="portfolio">

      <div className="home">
        <div className="home-left">

          <h1>Olá, eu sou a Lhays Izidoro </h1>
          <h2> Front-end Developer & Ux Designer

          </h2>
          <div className="social">

            <a href="https://www.linkedin.com/in/lhaysizidoro/">
             <img src={linkedin} alt="" /> </a>
          
          <a href="https://github.com/lhaysizidoro">
          <img src={github} alt="" /></a>

          <a href="mailto:izidorolhays@gmail.com?subject=Contato">
          <img src={email} alt="" />
          </a>

          
          </div>
         

        
          


        </div>

        <div className="home-right">
          <img src={perfilhomepage} alt="Descrição da imagem" />
        </div>



      </div>
      <div className="teste">
        <Skills/>

  <h1> Projetos</h1>
<ProjetosPage/>
    
    
   
      
      </div>

    </div>

  );
}

export default Home;