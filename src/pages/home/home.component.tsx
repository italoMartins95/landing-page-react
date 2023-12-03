import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { carrouselItens } from '../../products/carousel.itens';
import Button from '../../components/button/button.component';
import ItemCarousel from '../../components/itemCarousel/itemCarousel.component';
import { TCategoryItem } from '../../types/categoryItem.type';

import './home.component.scss';

function Home() {

    const [viewItem, setViewItem] = useState<TCategoryItem>(carrouselItens[0]);

    const navigate = useNavigate();

    const selectItem = (item: TCategoryItem, indexItem: number) => {
        setViewItem(item);
        spinCarousel(indexItem);
    }

    const spinCarousel = (index: number) => {

        let position: number = index + 1;
        let transformPixels: number = 0;
        let widthItem: number = 180;

        const carousel: HTMLDivElement = document.getElementById('carousel') as HTMLDivElement;
        const larguraDaJanela: boolean = Boolean(window.innerWidth <= 430);

        if(position >= 2 && !larguraDaJanela){
            transformPixels = (position - 2) * widthItem;
            carousel.style.transform = `translateY(-${transformPixels}px)`;
        }
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
                        Usamos a Tecnologia para implementar soluções de Segurança e Infraestrutura para sua Empresa e para o seu lar.
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
                <article className='itens'>                   
                    <div className='content'>
                        <div className='carousel' id='carousel'>
                            {
                                carrouselItens.map((item, index) => {
                                    return <ItemCarousel image={item.image}
                                                         category={item.category}
                                                         description={item.description}
                                                         selectItem={() => selectItem(item, index)}
                                                         selected={item == viewItem}
                                                         key={index}
                                            />
                                })
                            }
                        </div>                        
                    </div>                  
                </article>
                <article className='viewItemSelect'>
                    <div className='image'>
                        <img src={viewItem.image}/>
                    </div>
                    <div className='description'>
                        <h1>
                            {viewItem.category}
                        </h1>
                        <p>
                            {viewItem.description}
                        </p>
                        <Button text='Produtos'
                                style='button-primary'
                                handleClick={() => navigate('/produtos')}
                        />                      
                    </div>
                </article>
            </section>
        </main>
    )
}

export default Home;