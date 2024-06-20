import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { GoogleLogin } from '@react-oauth/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', {
        email,
        password,
      });
      toast.success('Logged in successfully!');
      console.log(response.data); // Handle the response as needed
    } catch (error) {
      toast.error('Failed to log in. Please try again.');
      console.error(error.response.data);
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

  const handleGithubSuccess = (response) => {
    console.log(response);
    // Handle the response and log in the user using the GitHub account information
  };

  const handleGithubFailure = (error) => {
    console.error(error);
    toast.error('GitHub Sign-In was unsuccessful. Please try again.');
  };

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
          <Button type="submit">Login</Button>
        </Form>
        <Divider>or continue with</Divider>
        <SocialButtons>
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onFailure={handleGoogleFailure}
            style={{ width: '100%', marginBottom: '10px' }}
          />
          <SocialButton onClick={handleGithubSuccess}>
            <FontAwesomeIcon icon={faGithub} style={{ marginRight: '8px' }} />
            Sign in with GitHub
          </SocialButton>
        </SocialButtons>
        <StyledLink to="/register">Don't have an account? Register</StyledLink>
      </LoginBox>
    </Container>
  );
};

export default Login;
