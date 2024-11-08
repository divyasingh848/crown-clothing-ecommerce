import React, { useState, useEffect } from 'react';
import CustomButton from '../CustomButton/CustomButton';
import CustomInput from '../CustomInput/CustomInput';
import axios from 'axios';  // Don't forget to import axios
import './SignIn.scss';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const newError = {};
    if (!email) {
      newError.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newError.email = 'Email address is invalid';
    }

    if (password.length < 6) {
      newError.password = 'Password length should be more than 6 characters';
    }

    setError(newError);
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setIsSubmitting(true);

    // Check if there are any errors
    if (Object.keys(error).length === 0) {
        try {
            // Send the email and password to the backend
            const response = await axios.post('http://localhost:3000/signIn', {
                email,
                password
            });

            // If the sign-in is successful, you should get a success response
            console.log('Sign-in successful:', response.data);
            alert('Sign-in successful!');
        } catch (err) {
            // Handle error if the sign-in failed
            console.error('Sign-in failed:', err);
            alert('Sign-in failed. Please check your credentials and try again.');
        } finally {
            setIsSubmitting(false);
        }
    } else {
        alert('Please fix the errors before submitting.');
    }
};


  return (
    <div className='sign-in'>
      <h2>I already have an account!</h2>
      <span>Sign in with an email & password</span>

      <form onSubmit={handleSubmit}>
        <CustomInput
          label="Email"
          type="email"
          name="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {error.email && <p style={{ color: 'red' }}>{error.email}</p>}

        <CustomInput
          label="Password"
          type="password"
          name="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error.password && <p style={{ color: 'red' }}>{error.password}</p>}

        <CustomButton className='custom-button' type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Signing in...' : 'Sign in'}
        </CustomButton>
      </form>
    </div>
  );
};

export default SignIn;
