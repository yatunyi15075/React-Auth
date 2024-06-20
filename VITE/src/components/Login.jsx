import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { GoogleLogin } from '@react-oauth/google';
import 'react-toastify/dist/ReactToastify.css';
import {
  Container,
  LoginBox,
  Logo,
  Title,
  Form,
  Input,
  Button,
  StyledLink,
  Divider,
  SocialButtons,
  SocialButton,
} from '../styles/LoginStyles';
import bgvideo from "../assets/bgvideo.mp4";
import logo from "../assets/logo.png";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', { email, password });
      console.log(response.data); // Handle the response as needed

      // Store the JWT token in local storage
      localStorage.setItem('token', response.data.token);

      // Display success toast message
      toast.success('Logged in successfully!');

      // Redirect to the home page or dashboard
      navigate('/dashboard');
    } catch (error) {
      console.error(error.response.data);
      setError(error.response.data.error);

      // Display error toast message
      toast.error('Failed to login. Please check your credentials.');
    }
  };

  const handleGoogleSuccess = (response) => {
    console.log(response);
    // Handle the response and log in the user using the Google account information
  };

  const handleGoogleFailure = (error) => {
    console.error(error);
    toast.error('Google Sign-In was unsuccessful. Please try again.');
  };

  console.log('Rendering Login component'); // Debugging line

  return (
    <Container>
      <ToastContainer />
      <video autoPlay muted loop id="bgvideo" style={{ width: '100%', maxWidth: '100%', maxHeight: '100%' }}>
        <source src={bgvideo} type="video/mp4" />
      </video>
      <LoginBox>
        <Logo src={logo} alt="Your logo" />
        <Title>Login</Title>
        <Form onSubmit={handleSubmit}>
          <Input type="email" placeholder="Email address" required value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
          <StyledLink to="#">Forgot your password?</StyledLink>
          <Button type="submit">Sign in</Button>
        </Form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <Divider>or continue with</Divider>
        <SocialButtons>
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onFailure={handleGoogleFailure}
          />
        </SocialButtons>
        <StyledLink to="/register">Don't have an account yet? Register for free</StyledLink>
      </LoginBox>
    </Container>
  );
};

export default Login;
