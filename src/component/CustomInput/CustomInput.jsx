import React, { forwardRef } from 'react'

const CustomInput = React.forwardRef((props, ref)  => {
  return (
    <div>
    
        <input {...otherProps}/>
        {/* <br></br>
        <br></br>
        <input type='password' name='password' placeholder='Enter password '/> */}
       
    </div>
  )
})

export default CustomInput