import React, { useEffect, useState } from 'react'
import './CollectionItem.scss'
import CustomButton from '../CustomButton/CustomButton';

const CollectionItem = ({item}) => {
    // const {id,name,price,imageUrl} = props.item;
    // const [collectionItem, setCollectionItem] = useState();
    // useEffect(() => {
    //   first
    
    //   return () => {
    //     second
    //   }
    // }, [third])
    
  return (
    <div className='collection-item'>
        {/* {props.items.map((item,index)=>{
            <> */}
 <div className='image' style={{backgroundImage:`url(${item.imageUrl})`}}></div>
 <div className='collection-footer'>
     <span className='name'>{item.name}</span>
     <span className='price'>{item.price}</span>
     <CustomButton>Add To Cart</CustomButton>
 </div>
       
    </div>
  )
}

export default CollectionItem