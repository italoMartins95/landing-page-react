import './button.component.scss'

import { IButton } from '../../interfaces/button.interface';

function Button(props: IButton){
    return (
        <button onClick={props.handleClick} className={props.style}>
            { props.text }
        </button>
    )
}

export default Button;