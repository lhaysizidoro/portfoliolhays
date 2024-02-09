import React, { useState } from 'react';
import github from './../../assets/github.png'
import olho from './../../assets/olho.png'




const ProjetoCard = ({ projeto }) => {
    const [hovered, setHovered] = useState(false);

    const handleButtonClick = () => {
        // Adicione a lógica desejada quando o botão for clicado
        console.log(`Botão do Projeto ${projeto.nome} clicado`);
    };


    return (
        <div className="projeto-card"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img
                src={projeto.imagem}
                alt={projeto.nome}
            />
            {hovered && (
                <div className="overlay">
                    <p>{projeto.descricao}</p>

                </div>


            )}

            <h1>{projeto.nome}</h1>
            <div className="botoes">

                <div className="botao-card">
                    <a id='site' href={projeto.linksite}>
                        <button className='botao-card'>
                            <img src={olho} ></img>
                        </button> </a>

                </div>
                <div className="botao-card">
                    <a id='git' href={projeto.linkgit}>
                        <button className='botao-card'>
                            <img src={github} ></img>
                        </button> </a>
                </div>
            </div>
            <p>Tags: {projeto.tags}</p>


        </div>




    )
}







export default ProjetoCard;
