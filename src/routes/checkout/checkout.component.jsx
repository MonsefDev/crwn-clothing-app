
import { useContext } from 'react';
import './checkout.styles.scss';
import { CartContext } from '../../contexts/cart.context';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
const CheckOut = () =>{

    const { cartItems,cartTotal} = useContext(CartContext);
    return(
        <div>
            <h1>hello fron checkout</h1>
            <div className='checkout-container'>
                <div className='checkout-header'>
                    <div className='header-block'>
                        <span>Product</span>
                    </div>
                    <div className='header-block'>
                        <span>Description</span>
                    </div>
                    <div className='header-block'>
                        <span>Quantity</span>
                    </div>
                    <div className='header-block'>
                        <span>Remove</span>
                    </div>
                </div>
            </div>
            {
                    cartItems.map((cartItem)=>{
                    return(<CheckoutItem key={cartItem.id} cartItem={cartItem}  />  )

                    })
                }
                <span className='total'>Total : ${cartTotal}</span>
        </div> 
        
    )
}


export default CheckOut;