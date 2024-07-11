import React, { useState,useEffect } from 'react';
import * as Components from './Components';
import axios from 'axios';
const Login = ({ a }) => {
  const [signIn, toggle] = useState(a);
  useEffect(()=>{
    toggle(a);
  },[a])
  const handleLogin = async(event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');
    try{
      const userData={
        email,
        password
      }
      const response =await axios.post('https://b-bbackend.vercel.app/user/Login',userData);
      localStorage.setItem('accesstoken',response.data.accesstoken)
        window.location.href='/'
      
      
    }
    catch(err){
      console.error(err)
      if (err.response.data.msg.toLowerCase()==='user not verified') {
        alert(`${err.response.data.msg} plz verify on registered email`);
      }
    }finally {
      event.target.reset(); // Reset form fields
    }
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const username = formData.get('username');
    const email = formData.get('email');
    const password = formData.get('password');
    const phoneNumber = Number(formData.get('Phone_number'));

    if (isNaN(phoneNumber)) {
      alert('Please enter a valid phone number');
      return;
    }

    const userData = {
      username,
      email,
      password,
      Phone_number:phoneNumber,
    };

    try {
      const response = await axios.post('https://b-bbackend.vercel.app/user/register', userData);
      console.log(response);
      alert('Registration successful! Please verify your email to complete the sign-up process.');
      
    } catch (error) {
      console.error('Error registering user:', error);
      // Handle error logic here (e.g., showing an error message)
    }finally {
      event.target.reset(); // Reset form fields
    }
  };

  return (
    <div className='body'>
      <Components.Container>
        <Components.SignUpContainer signinIn={signIn}>
          <Components.Form onSubmit={handleSignUp}>
            <Components.Title>Create Account</Components.Title>
            <Components.Input
              type='text'
              placeholder='Name'
              name="username"
            />
            <Components.Input
              type='email'
              name="email"
              placeholder='Email'/>
            <Components.Input
              type='password'
              name='password'
              placeholder='Password'/>
            <Components.Input
              type='tel'
              name='Phone_number'
              placeholder='Mobile'/>
            <Components.Button type='submit'>Sign Up</Components.Button>
          </Components.Form>
        </Components.SignUpContainer>

        <Components.SignInContainer signinIn={signIn}>
          <Components.Form onSubmit={handleLogin} >
            <Components.Title>Sign in</Components.Title>
            <Components.Input
              type='email'
              placeholder='Email'
              name='email'
            />
            <Components.Input
              type='password'
              name='password'
              placeholder='Password'
            />
            <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
            <Components.Button type='submit'>Sign In</Components.Button>
          </Components.Form>
        </Components.SignInContainer>

        <Components.OverlayContainer signinIn={signIn}>
          <Components.Overlay signinIn={signIn}>
            <Components.LeftOverlayPanel signinIn={signIn}>
              <Components.Title>Welcome Back!</Components.Title>
              <Components.Paragraph>
                To keep connected with us please login with your personal info
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(true)}>
                Login
              </Components.GhostButton>
            </Components.LeftOverlayPanel>

            <Components.RightOverlayPanel signinIn={signIn}>
              <Components.Title>Hello, Friend!</Components.Title>
              <Components.Paragraph>
                Enter Your personal details and start journey with us
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(false)}>
                Register Yourself
              </Components.GhostButton>
            </Components.RightOverlayPanel>
          </Components.Overlay>
        </Components.OverlayContainer>
      </Components.Container>
    </div>
  );
};

export default Login;
