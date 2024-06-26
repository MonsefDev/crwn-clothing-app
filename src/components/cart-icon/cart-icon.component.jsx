import { useContext } from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import { CartContext } from '../../contexts/cart.context';


const CartIcon =()=>{
    const {isCartOpen,setIsCartOpen,carCount}=useContext(CartContext);
    const toggleOpenCart=()=>{ setIsCartOpen(!isCartOpen)}
    return(
        <div className='cart-icon-container' onClick={toggleOpenCart}>
            <ShoppingIcon  className='shopping-icon'/>
            <span className='item-count'>{carCount}</span>
        </div>
    )
}


export default CartIcon;