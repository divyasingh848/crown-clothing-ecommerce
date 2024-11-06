import React from 'react'
import './MenuItem.scss'

const MenuItem = (props) => {
 const {id,title,imageUrl} = props.product;
  return (
    <div className='menu-item'>
    <div className='background-image' style={{backgroundImage:`url(${imageUrl})`}}> </div>
    <div className='content'>
        <div className='title'>{title.toUpperCase()}</div>
        <div className='subtitle'>Shop now</div>
    </div>
</div>
  )
}

export default MenuItem