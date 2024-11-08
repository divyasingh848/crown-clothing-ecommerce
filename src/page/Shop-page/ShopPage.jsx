import React, { useEffect, useState } from 'react';
import './ShopPage.css';
import axios from 'axios';
import Header from '../../component/Header/Header';
import Collections from '../../component/Collections/Collections';

const ShopPage = ({ shopItems }) => {  
  console.log(shopItems, "ShopPage data");
  const [shopData, setShopData] = useState([]);
  useEffect(() => {
    const fetchShopProduct = async ()=>{
 
   try {
     const response = await axios.get('http://localhost:3000/shopModel')
     console.log(response.data,"sdsjfhdsf")
     setShopData(response?.data?.data?.shopItems);
   } catch (error) {
     console.error("error fetching product categories" + error.message)
   }
  }
  fetchShopProduct();
  },[])
  return (
    <div>
      <Header />
      <div>
        {shopData?.map((items, index) => (
          <Collections key={items.id} items={items} /> 
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
