import './button.component.scss'

import { IButton } from '../../interfaces/button.interface';

import { BsCart3 } from "react-icons/bs";

function Button(props: IButton){
    return (
        <button onClick={props.handleClick} className={props.style}>
            { props.text }
            {
                props.icon && 
                    <BsCart3 />
            }
        </button>
    )
}

export default Button;