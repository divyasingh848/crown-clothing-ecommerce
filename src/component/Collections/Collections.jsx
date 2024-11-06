import React from 'react'
import  './collections.scss'
import CollectionItem from '../CollectionItem/CollectionItem';
import { Link } from 'react-router-dom';


const CollectionPreveiew = ({items}) => {
  // const {item} = props.items;
    // console.log(props,"Collection");
  return (
    <div className='container'>
      <Link to={`/shop/${items.title}`} className="collection-title">
        <h2>{items.title}</h2>
      </Link>
    <div className='collection-preview'>
  
  <br></br>
        {items?.items?.slice(0,5).map((item,index)=>{
            // console.log(props.item,"Collection");
            return(  // 
            <CollectionItem key={item.id} item={item}/> )
        })}
        
    </div>
    </div>
  )
}

export default CollectionPreveiew