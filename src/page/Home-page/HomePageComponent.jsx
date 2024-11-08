import React,{useEffect} from 'react'
import MenuItem from '../../component/MenuItem/MenuItem'
import './HomePageComponent.style.css'
import { useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import Header from '../../component/Header/Header'
import axios from 'axios'

const HomePageComponent = () => {
 const [categoryData, setCategoryData] = useState([]);
console.log(categoryData,"heyxx")
 useEffect(() => {
   const fetchCategories = async ()=>{

  try {
    const response = await axios.get('http://localhost:3000/product-categories')
    console.log(response.data,"sdsjfhdsf")
    setCategoryData(response?.data?.data?.products);
  } catch (error) {
    console.error("error fetching product categories" + error.message)
  }
 
 }
 fetchCategories();
 },[])
 
  return (
    <>
    <Header/>
    <div className='home-page'>
        {/* <h1>Hello, HomePageComponent</h1> */}
     <div className='directory-menu'>
        {categoryData.map((product,index)=>
          <MenuItem key={product.id} product={product}/>
        )}
     
     </div>    
    </div>
    </>
  )
}

export default HomePageComponent