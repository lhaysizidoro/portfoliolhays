import React, { useState } from 'react';
import Modal from 'react-modal';
import '../../pages/projects/projects.css';
import x from '../../assets/x.png'



Modal.setAppElement('#root');

const ProjetoCard = ({ projeto }) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    return (
        <div className="projeto-card">
            <img src={projeto.imagem} alt={projeto.nome} onClick={handleOpenModal} />
            <h1>{projeto.nome}</h1>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={handleCloseModal}
                contentLabel="Detalhes do Projeto"
                className="modal"
            >

{modalIsOpen && (
  <div>
    <img id
      src={x} 
      alt="Descrição da imagem" 
      onClick={handleCloseModal} 
    />
  </div>
)}
                <div className="modal-content">
                    <div className="modal-left">
                        <img src={projeto.imagem} alt={projeto.nome} className="modal-image" />
                    </div>
                    <div className="modal-right">
                        <h2 className="modal-title">{projeto.nome}</h2>
                        <p className="modal-description">{projeto.descricao}</p>

                    </div>

                </div>
                <div className="botao-card">
                    <a href={projeto.linksite}>
                        <button>Ver projeto</button>
                    </a>
                    <a href={projeto.linkgit}>
                        <button>Ver no Github</button>
                    </a>
                </div>
            </Modal>
        </div>
    );
}

export default ProjetoCard;
