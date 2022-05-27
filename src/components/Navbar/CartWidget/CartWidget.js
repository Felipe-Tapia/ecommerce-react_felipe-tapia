import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './CartWidget.css'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
export const CartWidget = () => {
    return (
        <div className="cart_widget"> 
            <FontAwesomeIcon icon={faCartShopping} className='cart_icon'/>
        </div>
    )
}
