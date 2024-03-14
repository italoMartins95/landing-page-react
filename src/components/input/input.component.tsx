import { IInput } from "../../interfaces/input.interface";

import './input.component.scss'

function Input(props: IInput){

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        props.handleOnChange(value);
    };

    return(
        <div className="input">
            {
                props.children &&
                props.children
            }
            <input type={props.type} 
                   placeholder={props.placeholder}
                   onChange={handleChange}
            />
        </div>
    )
}

export default Input;