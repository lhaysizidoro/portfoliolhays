import React from "react";
import "./about.css"
import Skills from "../../components/skills/skills";
import sobreimg from './sobreimg.png'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'




function About() {
  return (
    <div className="about">
      <div className="about-center">
        <div className="about-right">
          <img src={sobreimg} alt="" />
        </div>
        <div className="about-left">
          <h1>Olá,

            meu nome é Lhays Izidoro! </h1>
          <p>



            Sou desenvolvedora front-end e estudante de Tecnologia da Informação. 
            Estou aprimorando minhas habilidades em ReactJS e JavaScript com o objetivo de me especializar e aprender front-end, mas também acho importante explorar o back-end também.
            <br/>
            Curiosidade: Sou Antropóloga por formação. Isso me ajuda a entender melhor os usuários e a criar cenários de pesquisa. Esta é uma habilidade muito importante para entender a experiência do usuário, já que também me dedico aos campos de UX/UI. 
            <br/>
            Espero que gostem do meu portfólio!
          </p>

          <div className="social">

            <a href="https://www.linkedin.com/in/lhaysizidoro/">
              <img src={linkedin} alt="" /> </a>

            <a href="https://github.com/lhaysizidoro">
              <img src={github} alt="" /></a>
          </div>

        </div>
      </div>
      <Skills />
    </div>
  )
}
export default About;