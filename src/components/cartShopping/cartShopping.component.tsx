import React, { useState } from 'react';
import './cartShopping.component.scss'

import ItemShopping from '../itemShopping/itemShopping.component';
import Button from '../button/button.component';

import { ICartShopping } from '../../interfaces/cartShopping.interface';
import { TItemShopping } from '../../types/itemShopping.type';

import { IoMdClose } from "react-icons/io";
import { SlHandbag } from "react-icons/sl";

function CartShopping(props: ICartShopping){

    const [itens, setItens] = useState<Array<TItemShopping>>([]);

    const removeItem = (itemId: number) => {
        const updateItens: Array<TItemShopping> = itens.filter(item => item.id != itemId);

        setItens(updateItens);
    }

    const plusItem = (itemId: number) => {
        const updateItens: Array<TItemShopping> = itens.map(item => {
            if(item.id === itemId) item.qtd++;

            return item
        });        

        setItens(updateItens);
    }

    const minusItem = (itemId: number) => {
        const updateItens: Array<TItemShopping> = itens.map(item => {
            if(item.id === itemId) {
                item.qtd > 1 && item.qtd--;
            };

            return item
        });

        setItens(updateItens);
    }

    return (
        <aside className="cartShopping">
            <div className='header-cart'>            
                <h2>
                    Itens no carrinho
                </h2>
                <IoMdClose className='close' onClick={props.closeCart}/>
            </div>
            
            {
                itens.length > 0 ? 
                    <>
                        <div className='body-cart'>
                            {
                                itens.map(item => {
                                    return <ItemShopping id={item.id}
                                                            name={item.name}
                                                            image={item.image}
                                                            qtd={item.qtd}
                                                            plus={plusItem}
                                                            minus={minusItem}
                                                            remove={removeItem}
                                                            key={item.id}
                                            /> 
                                })
                            }
                        </div>
                        <div className='button'>
                            <Button text='Solicitar orçamento'
                                    style='button-primary'
                                    handleClick={() => console.log('Solicitar orçamento')}
                            />
                        </div>
                    </> : 
                    <>
                        <div className='cartEmpty'>
                            <span>
                                Adicione itens ao seu carrinho! 
                            </span>
                            <SlHandbag />
                        </div>
                    </>                                 
            }
        </aside>
    )
}

export default CartShopping;