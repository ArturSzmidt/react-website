import React from 'react';
import { Icon } from '../Sidebar/SidebarElements';
import {
  FormContent,
  FormWrap,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
  Container,
} from './SignInElements.jsx';

const SignIn = () => {
  return (
    <Container>
      <FormWrap>
        <Icon to="">dolla</Icon>
        <FormContent>
          <Form action="#">
            <FormH1>Sign in to your account</FormH1>
            <FormLabel htmlFor="for">Email</FormLabel>
            <FormInput type="email" required />
            <FormLabel htmlFor="for">Password</FormLabel>
            <FormInput type="password" required />
            <FormButton type="submit">Continue</FormButton>
            <Text>Forgot Password</Text>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default SignIn;
