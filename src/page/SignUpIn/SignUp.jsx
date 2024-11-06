import React from 'react'
import CustomButton from '../../component/CustomButton/CustomButton'
import CustomInput from '../../component/CustomInput/CustomInput'
import './SignUpIn.scss'

const SignUp = () => {
  return (
    <div className='sign-in'>
      <center>
        <h2>I already have an account!</h2>
        <span>Sign in with an email & password</span>
        <br></br>
        <form>
            <CustomInput/>
            <br></br>
            <CustomButton className='custom-button' type="submit">Sign in</CustomButton>
        </form>
        </center>
    </div>
  )
}

export default SignUp