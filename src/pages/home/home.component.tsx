import { useNavigate } from 'react-router-dom';
import { categoryItens } from '../../categorys/category.itens';
import Button from '../../components/button/button.component';

import { SlHandbag } from "react-icons/sl";
import { LiaFileContractSolid } from "react-icons/lia";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { RiVerifiedBadgeLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { PiHandshake } from "react-icons/pi";

import './home.component.scss';

function Home() {

    const navigate = useNavigate();

    return(
        <main>
            <section className="wellcome">
                <div className='welcomeText'>
                    <h1>Tecnologia</h1>
                    <h2>que te proporciona segurança, conforto e praticidade</h2>
                </div>
            </section>
            <section className="about" id='about'>
                <aside className='texts'>
                    <h1>Sobre nós</h1>
                    <p>
                        Usamos Tecnologia para implementar soluções de Segurança e infraestrutura em sua empresa e no seu lar.
                    </p>
                    <p>
                        Conte com profissionais qualificados para acompanhar você desde a venda, instalação, treinamento e manutenção dos seus equipamentos.
                    </p>
                    <p>
                        Nosso objetivo é garantir a satisfação dos nossos clientes, com ênfase na região metropolitana de Recife.
                    </p>
                </aside>
                <aside className='image-work'>
                </aside>                
            </section>
            <section className='works'>
                <h1>
                    Serviços por categoria
                </h1>
                <article className='content'>  
                {
                    categoryItens.map((category, index) => {
                        return (
                            <aside key={index}>
                                <img src={category.image} />
                                <span>
                                    <h3>
                                        {category.category}
                                    </h3>
                                    <p>
                                        {category.description}
                                    </p>
                                    <Button text='Produtos'
                                            style='button-primary'
                                            handleClick={() => navigate('/produtos')}
                                    />  
                                </span>
                            </aside>
                        )
                    })
                }
                                      
                </article>
            </section>
            <section className='steps'>
                <span className='progress'></span>
                <article className='reverse'>
                    <p>
                        Selecione os itens que você deseja e adicione ao carrinho
                    </p>
                    <div>
                        <SlHandbag />
                    </div>
                </article>
                <article>
                    <p>
                        Solicite um orçamento para os itens que você escolheu
                    </p>
                    <div>
                        <MdOutlineMarkEmailUnread />
                    </div>                    
                </article>
                <article  className='reverse'>
                    <p>
                        Realize o seu cadastro com algumas informações simples como nome, email e telefone para que possamos montar a sua proposta
                    </p>
                    <div>
                        <FaRegUser />
                    </div>                    
                </article>
                <article>
                    <p>
                        Dentro de poucos minutos você receberá uma proposta com a descrição dos equipamentos e serviços escolhidos por você
                    </p>
                    <div>
                        <LiaFileContractSolid />
                    </div>
                </article>
                <article className='reverse'>
                    <p>
                        Se você ficar satisfeito com a proposta, fechamos o negocio e um proficional qualificado irá até você para realizar a sua instalação completa
                    </p>
                    <div>
                        <PiHandshake />
                    </div>                    
                </article>
                <article >
                    <p>
                        Em nossa área para os clientes, você poderá acompanhar todas as suas compras e visualizar se os seus equipamentos estão em garantia.
                    </p>
                    <div>
                        <RiVerifiedBadgeLine />
                    </div>                    
                </article>
            </section>
        </main>
    )
}

export default Home;