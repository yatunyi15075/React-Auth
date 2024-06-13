import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Container,
  RegisterBox,
  Logo,
  Title,
  Form,
  Input,
  Button,
  Link,
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

  return (
    <Container>
      <ToastContainer />
      <video autoPlay muted loop id="bgvideo" style={{ width: '100%', maxWidth: '100%', maxHeight: '100%' }}>
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
          <SocialButton href="#">
            <svg aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.305 10.526h-9.33v3.24h5.392c-.234 1.26-1.026 2.328-2.192 2.987v2.48h3.54c2.072-1.91 3.26-4.724 3.26-8.207 0-.697-.07-1.377-.184-2.04h-.488z" fill="#4285F4" />
              <path d="M12.975 22.26c2.61 0 4.795-.873 6.393-2.35l-3.54-2.48c-.97.65-2.17 1.04-3.45 1.04-2.652 0-4.89-1.788-5.692-4.192H3.03v2.63c1.598 3.12 4.99" />
            </svg>
          </SocialButton>
          <SocialButton href="#">
            <svg aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .296c-6.627 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577v-2.172c-3.338.724-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.729.083-.729 1.205.085 1.838 1.238 1.838 1.238 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.76-1.605-2.665-.305-5.467-1.332-5.467-5.93 0-1.31.467-2.381 1.235-3.221-.124-.303-.535-1.527.116-3.18 0 0 1.008-.323 3.3 1.23.96-.267 1.985-.399 3.005-.404 1.02.005 2.045.137 3.006.404 2.29-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.877.118 3.18.77.84 1.233 1.91 1.233 3.221 0 4.61-2.807 5.62-5.479 5.92.43.371.81 1.102.81 2.222v3.293c0 .318.192.694.8.576 4.77-1.587 8.208-6.085 8.208-11.387 0-6.627-5.373-12-12-12z" />
            </svg>
          </SocialButton>
          <SocialButton href="#">
            <svg aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .733.592 1.325 1.325 1.325h11.495v-9.294h-3.125v-3.622h3.125v-2.671c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.794.716-1.794 1.763v2.311h3.587l-.467 3.622h-3.12v9.293h6.116c.733 0 1.325-.592 1.325-1.325v-21.35c0-.733-.592-1.325-1.325-1.325z" />
            </svg>
          </SocialButton>
        </SocialButtons>
        <Link href="/">Already have an account? Login</Link>
      </RegisterBox>
    </Container>
  );
};

export default Register;
