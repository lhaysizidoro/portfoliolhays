import projeto1 from '../../assets/projeto1.png'
import projeto2 from '../../assets/projeto2.png'
import projeto3 from '../../assets/projeto3.png'

const projetos = [
    {
      id: 1,
      nome: 'Lavanda Cosméticos',
      imagem: projeto1,
      descricao: ' Lavanda é um e-commerce de cosméticos com uma interface moderna e intuitiva desenvolvido em React. Cada item possui uma página detalhada, facilitando a navegação dos clientes. O processo de compra é simples, com um carrinho de compras claro e opções de pagamento seguras.',
      linkgit: 'https://github.com/lhaysizidoro/lavandawebsite',
      linksite: 'https://lavandawebsite.vercel.app/',
      tags: "React", 
    },
    {
        id: 2,
        nome: 'Ux Writing Challenge',
        imagem: projeto2,
        descricao: 'Daily UX Writing Challenge é um desafio de escrita. Alguns desafios devem ser resolvidos utilizando conhecimentos de Ux Writing e proporcionando mensagens de sistemas e aplicativos da maneira mais clara e coerente possível.',
        linksite: 'https://www.behance.net/gallery/151117079/Ux-Writing-Challenge-Parte-1',
        tags: "Ux Design, Ux Writing" 
    },
   
    {
      id: 3,
      nome: 'Previsão do tempo',
      imagem: projeto3,
      descricao: 'A página de previsão do tempo em JavaScript utiliza uma API para fornecer informações meteorológicas atualizadas. Os usuários podem inserir o nome da cidade desejada, e a página exibe a previsão do tempo, incluindo temperatura, condições climáticas e umidade.',
      linkgit: 'https://github.com/lhaysizidoro/weather_forecast',
      linksite: 'https://weather-mu-three.vercel.app/',
  },
 
]

export default projetos
