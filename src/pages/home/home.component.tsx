import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { carrouselItens } from '../../products/carousel.itens';
import Button from '../../components/button/button.component';
import { TCategoryItem } from '../../types/categoryItem.type';

import { SlHandbag } from "react-icons/sl";
import { LiaFileContractSolid } from "react-icons/lia";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { RiVerifiedBadgeLine } from "react-icons/ri";
import { MdArrowBack } from "react-icons/md";
import { MdArrowForward } from "react-icons/md";

import './home.component.scss';

function Home() {

    const [viewItem, setViewItem] = useState<TCategoryItem>(carrouselItens[0]);
    const [carouselPosition, setCarouselPosition] = useState<number>(0);
    const [viewButtonBack, setViewButtonBack] = useState<boolean>(false);
    const [viewButtonFor, setViewButtonFor] = useState<boolean>(true);

    const navigate = useNavigate();

    const spinCarousel = (direction: 'left' | 'right') => {
        const forWard: boolean = Boolean(direction == 'right');

        const carousel: HTMLDivElement = document.getElementById('carousel') as HTMLDivElement;

        const widthWindow: number = window.innerWidth;
        const widthItem: number = 280 + 30;
        const itensPerWindow: number = Math.floor(widthWindow / widthItem);
        const carouselPagesCount: number = carrouselItens.length - itensPerWindow;

        let positionNow: number = carouselPosition;
        
        forWard ? positionNow++ : positionNow--;

        if(positionNow > 0){
            setViewButtonBack(true);
        } else {
            setViewButtonBack(false);
        };

        if(positionNow >= carouselPagesCount){
            setViewButtonFor(false);
        } else {
            setViewButtonFor(true);
        };

        carousel.style.transform = `translateX(-${widthItem * positionNow}px)`;

        setCarouselPosition(positionNow);
    }

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
                        Usamos Tecnologia para implementar soluções de Segurança e infraestrutura em empresa e no seu lar.
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
                    Nossos serviços por categoria
                </h1>
                <div className='content'>
                    {viewButtonBack && 
                        <MdArrowBack className='arrow back' onClick={() => spinCarousel('left')}/>
                    }
                    <div className='carousel' id='carousel'>
                        {
                        carrouselItens.map((item, index) => {
                            return (
                                <div className='item' key={index} onClick={() => setViewItem(item)}>
                                    <div className='image-item'>
                                        <img src={item.image} />
                                    </div>
                                    <div className='details'>
                                        <div className='description'>
                                            <h1>
                                                {item.category}
                                            </h1>
                                            <p>
                                                {item.description}
                                            </p>
                                            <Button text='Produtos'
                                                    style='button-primary'
                                                    handleClick={() => navigate('/produtos')}
                                            />                      
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        }
                    </div>  
                    {viewButtonFor && 
                        <MdArrowForward className='arrow for' onClick={() => spinCarousel('right')}/>
                    }                      
                </div>
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
                    <p className='hidden'></p>
                </article>
                <article>
                    <p className='hidden'></p>
                    <div>
                        <MdOutlineMarkEmailUnread />
                    </div>
                    <p>
                        Solicite um orçamento para os itens que você escolheu
                    </p>                    
                </article>
                <article className='reverse'>
                    <p>
                        Dentro de poucos minutos você receberá uma proposta com a descrição dos equipamentos e serviços escolhidos por você
                    </p>
                    <div>
                        <LiaFileContractSolid />
                    </div>
                    <p className='hidden'></p>
                </article>
                <article>
                    <p className='hidden'></p>
                    <div>
                        <RiVerifiedBadgeLine />
                    </div>
                    <p>
                        Negócio fechado! Um proficional vai até você para realizar a sua instalação completa.
                    </p>
                </article>
            </section>
        </main>
    )
}

export default Home;