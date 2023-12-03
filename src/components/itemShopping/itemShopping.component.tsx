import './itemShopping.component.scss';

import { IItemShopping } from '../../interfaces/itemShopping.interface';

import { CgMathMinus } from "react-icons/cg";
import { CgMathPlus } from "react-icons/cg";
import { FaRegTrashAlt } from "react-icons/fa";

function ItemShopping(props: IItemShopping){
    return (
        <div className='item'>
            <div className='item-details'>
                <div className="image-item">
                    <div className='image-content'>
                        <img src={props.image}/>
                    </div>                    
                </div>
                <p>
                    { props.name }
                </p>
            </div>            
            <div className='manipule-qtd'>
                <span className='control' onClick={() => props.minus(props.id)}>
                    <CgMathMinus />
                </span>
                <div className='qtd-item'>
                    { props.qtd }
                </div>
                <span className='control' onClick={() => props.plus(props.id)}>
                    <CgMathPlus />
                </span>
            </div>
            <FaRegTrashAlt className='trash-item'
                           onClick={() => props.remove(props.id)}
            />
        </div>
    )
}

export default ItemShopping