import { useState } from 'react';
import { Link, useNavigate, To} from 'react-router-dom';
import './header.component.scss'

import CartShopping from '../cartShopping/cartShopping.component';

import { CgMenuLeft } from "react-icons/cg";
import { BsCart3 } from "react-icons/bs";
import { GrClose } from "react-icons/gr";

function Header() {
    const [viewCart, setViewCart] = useState<boolean>(false);
    const [navVisible, setNavVisible] = useState<boolean>(false);

    const navigate = useNavigate();

    const openCloseMenus = (menu: 'cart' | 'nav', view: boolean): void => {
        switch(menu){
            case 'cart':
                setViewCart(view);
                setNavVisible(false);
                break
            case 'nav':
                setViewCart(false);
                setNavVisible(view);
                break
            default:
                setViewCart(false);
                setNavVisible(false);
        }
    }

    const goToAbout = async (): Promise<void> => {
        openCloseMenus('nav', false);
      
        await navigate("/");

        const about: HTMLDivElement = document.getElementById('about') as HTMLDivElement;

        about.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <header>
                {
                    navVisible ?
                        <GrClose className='hamburguer-menu' onClick={() => openCloseMenus('nav', false)}/> :
                        <CgMenuLeft className='hamburguer-menu' onClick={() => openCloseMenus('nav', true)}/>
                }                               
                <nav className={`${!navVisible && 'hidden'}`}>
                    <ul>
                        <li onClick={() => openCloseMenus('nav', false)}>
                            <Link to="/" className='Link'>Início</Link>
                        </li>
                        <li onClick={goToAbout}>
                            Sobre nós
                        </li>
                        <li onClick={() => openCloseMenus('nav', false)}>
                            <Link to="/produtos" className='Link'>Produtos</Link>
                        </li>
                        <li onClick={() => openCloseMenus('nav', false)}>
                            <Link to="/login" className='Link'>Área do cliente</Link>
                        </li>
                    </ul>
                </nav>
                <BsCart3 onClick={() => {openCloseMenus('cart', !viewCart)}}/>
            </header>
            {
                viewCart && <CartShopping closeCart={() => openCloseMenus('cart', false)}/>
            }
        </>        
    )
}

export default Header;