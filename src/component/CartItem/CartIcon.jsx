import React, { useState } from 'react'
import ShoppingBagSvg from '../../assets/shopping-bag.svg?react'
import './CartIcon.css'
import CartDropdown from '../CartDropdown/CartDropdown';

const CartIcon = () => {
    const [hidden, setHidden] = useState(false);

    const handleDropdown =()=>{
   setHidden(!hidden)
    }
  return (
    <div className='cart-icon'>
        <ShoppingBagSvg className="shopping-icon" onClick={handleDropdown} />
        {hidden ? <CartDropdown/> : null }
    </div>
  )
}

export default CartIcon