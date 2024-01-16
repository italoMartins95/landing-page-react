import { IProdutos } from '../../interfaces/produto.interface';
import Button from '../button/button.component';

import './cardProduto.component.scss'

function CardProduto(props: IProdutos) {
    return (
        <div className='product'>
            <img src={props.media} />
            <div>
                <p>
                    {props.name}
                </p>
                <Button text='Adicionar ao carrinho'
                        style='button-primary addItem'
                        icon={true}
                        handleClick={() => console.log(`Adicionando ${props.name} ao carrinho`)}
                />
            </div>
        </div>
    )
}

export default CardProduto;