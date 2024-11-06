import React from 'react'
import MenuItem from '../../component/MenuItem/MenuItem'
import './HomePageComponent.style.css'
import { useState } from 'react'
// import HomePageComponent from './page/Home-page/HomePageComponent'
// import productCategories from './page/Home-page/Product-categories'
import {Routes,Route} from 'react-router-dom'
import Header from '../../component/Header/Header'

const HomePageComponent = (props) => {
 
  return (
    <>
    <Header/>
    <div className='home-page'>
        {/* <h1>Hello, HomePageComponent</h1> */}
     <div className='directory-menu'>
        {props.productCategories.map((product,index)=>
          <MenuItem key={product.id} product={product}/>
        )}
     
     </div>    
    </div>
    </>
  )
}

export default HomePageComponent