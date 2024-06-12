// src/components/Register.jsx
import React from 'react';
import {
  Container,
  RegisterBox,
  Logo,
  Title,
  Form,
  Input,
  Button,
  Link,
} from '../styles/RegisterStyles';

const Register = () => {
  return (
    <Container>
      <RegisterBox>
        <Logo src="/your-logo.png" alt="Your logo" />
        <Title>Register</Title>
        <Form>
          <Input type="text" placeholder="Full name" required />
          <Input type="email" placeholder="Email address" required />
          <Input type="password" placeholder="Password" required />
          <Button type="submit">Register</Button>
        </Form>
        <Link href="/">Already have an account? Login</Link>
      </RegisterBox>
    </Container>
  );
};

export default Register;
