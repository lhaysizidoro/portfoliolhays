import React from 'react';
import ProjetoCard from '../../components/projectCard/projectCard'
import './projects.css';
import projetos from './dataprojects';




const ProjetosPage = () => {
    return (
        

        <div className="projetos-container">
        
            {projetos.map((projeto) => (
                <ProjetoCard key={projeto.id} projeto={projeto} />
            ))}

        
        </div>
    );
};

export default ProjetosPage;