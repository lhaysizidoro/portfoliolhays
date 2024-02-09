import React from "react";
import "./skills.css"


import css from '../../assets/css.png'
import html from '../../assets/html.png'
import js from '../../assets/js.png'
import python from '../../assets/python.png'
import react from '../../assets/react.png'
import figma from '../../assets/figma.png'
import ui from '../../assets/ui.png'
import pesquisa from '../../assets/pesquisa.png'

function Skills() {
  return (
    <div className="about">

      <section>
        <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#A1B5D8" fill-opacity="1" d="M0,224L48,240C96,256,192,288,288,298.7C384,309,480,299,576,282.7C672,267,768,245,864,229.3C960,213,1056,203,1152,202.7C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </section>

      <div className="skill">
        <h1>SKILLS</h1>

        <div className="skill-icon">
          <div className="skill-item"> <p>CSS</p>  <img src={css} alt="" /> </div>
          <div className="skill-item"> <p> HTML</p>  <img src={html} alt="" /> </div>
          <div className="skill-item">  <p>JavaScript</p> <img src={js} alt="" /> </div>
          <div className="skill-item">  <p>Python</p> <img src={python} alt="" /> </div>
          <div className="skill-item">  <p>React</p> <img src={react} alt="" /> </div>
          <div className="skill-item">  <p>Figma</p> <img src={figma} alt="" /> </div>
          <div className="skill-item">  <p>Ux Design</p> <img src={ui} alt="" /> </div>
          <div className="skill-item">  <p>Pesquisa</p> <img src={pesquisa} alt="" /> </div>
        </div>

      </div>
    </div>
  )
}
export default Skills;