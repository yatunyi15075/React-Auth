import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { GoogleLogin } from '@react-oauth/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import 'react-toastify/dist/ReactToastify.css';
import {
  Container,
  RegisterBox,
  Logo,
  Title,
  Form,
  Input,
  Button,
  StyledLink,
  Divider,
  SocialButtons,
  SocialButton,
} from '../styles/RegisterStyles';
import bgvideo from "../assets/bgvideo.mp4";
import logo from "../assets/logo.png";

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users/register', {
        fullName,
        email,
        password,
      });
      toast.success('Registered successfully!');
      console.log(response.data); // Handle the response as needed
    } catch (error) {
      toast.error('Failed to register. Please try again.');
      console.error(error.response.data);
    }
  };


  const handleGoogleSuccess = (response) => {
    console.log(response);
    // Handle the response and register the user using the Google account information
  };

  const handleGoogleFailure = (error) => {
    console.error(error);
    toast.error('Google Sign-In was unsuccessful. Please try again.');
  };

  const handleGithubSuccess = (response) => {
    console.log(response);
    // Handle the response and register the user using the GitHub account information
  };

  const handleGithubFailure = (error) => {
    console.error(error);
    toast.error('GitHub Sign-In was unsuccessful. Please try again.');
  };

  return (
    <Container>
      <ToastContainer />
      <video autoPlay muted loop id="bgvideo" style=
      {{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: '0', left: '0' }}>
        <source src={bgvideo} type="video/mp4" />
      </video>
      <RegisterBox>
        <Logo src={logo} alt="Your logo" />
        <Title>Register</Title>
        <Form onSubmit={handleSubmit}>
          <Input type="text" placeholder="Full name" required value={fullName} onChange={(e) => setFullName(e.target.value)} />
          <Input type="email" placeholder="Email address" required value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
          <Button type="submit">Register</Button>
        </Form>
        <Divider>or continue with</Divider>
        <SocialButtons>
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onFailure={handleGoogleFailure}
            style={{ width: '100%', marginBottom: '10px' }}
          />
          <SocialButton onClick={handleGithubSuccess}>
            <FontAwesomeIcon icon={faGithub} size="2x" />
            Sign in with GitHub
          </SocialButton>
        </SocialButtons>
        <StyledLink to="/">Already have an account? Login</StyledLink>
      </RegisterBox>
    </Container>
  );
};

export default Register;
