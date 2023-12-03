import { ICategoryItem } from '../../interfaces/categoryItem.interface';
import './itemCarousel.component.scss'

function ItemCarousel(data: ICategoryItem){
    return (
        <div className={`image-item ${data.selected && 'selected'}`}
             onClick={data.selectItem}
        >
            <img src={data.image}/>
        </div>
    )
}

export default ItemCarousel;