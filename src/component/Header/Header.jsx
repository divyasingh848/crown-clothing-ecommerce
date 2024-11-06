import React from 'react'
import Logo from "../../assets/crwns.svg?react"
import './Header.css'
import { Link } from 'react-router-dom'
import CartIcon from '../CartItem/CartIcon'
const Header = () => {
  return (
    <div>
    <div className='header'>
        <div className='logo-conatiner'>
         <Logo className='logo'/>
        </div>
        <div className='options'>
         
          <Link to='/shop' className='option'>
        SHOP
      </Link>
      <Link to='/signin' className='option'>
        SIGN IN
      </Link>
      <Link to='/contact' className='option'>
        CONTACT
      </Link>
      {/* <Link to='/cart' className='option'> */}
        <CartIcon />
      {/* </Link> */}
         
        </div>
    </div>
    </div>
  ) 
}


export default Header