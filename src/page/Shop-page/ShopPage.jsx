import React from 'react';
import './ShopPage.css';
import Header from '../../component/Header/Header';
import Collections from '../../component/Collections/Collections';

const ShopPage = ({ shopItems }) => {  
  console.log(shopItems, "ShopPage data");

  return (
    <div>
      <Header />
      <div>
        {shopItems?.map((items, index) => (
          <Collections key={items.id} items={items} /> 
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
