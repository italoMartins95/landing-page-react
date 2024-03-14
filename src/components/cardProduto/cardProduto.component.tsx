import { useState, useEffect } from 'react';
import { IProdutos } from '../../interfaces/produto.interface';
import Button from '../button/button.component';

import { BsCart3 } from "react-icons/bs";

import './cardProduto.component.scss'

function CardProduto(props: IProdutos) {

    const [textButton, setTextButton] = useState("Adicionar ao carrinho");

    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth < 770) {
                setTextButton("Adicionar");
            } else {
                setTextButton("Adicionar ao carrinho");
            }
        };
    
        handleResize();
        
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='product'>
            <img src={props.media} />
            <div>
                <p>
                    {props.name}
                </p>
                <Button text={textButton}
                        style='button-primary addItem'
                        handleClick={() => console.log(`Adicionando ${props.name} ao carrinho`)}
                > 
                    <BsCart3 />
                </Button>
            </div>
        </div>
    )
}

export default CardProduto;