import React from "react";
import { strings } from "../constants";
import styled from 'styled-components';

const { SignIn_Page_Text } = strings;

const Wrapper = styled.div`
  position: absolute;
  top: 82px;
  left: 245px;
`

const SignUpWrapper = styled.form`
  width: 280px;
  height: 400px;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 18px 18px 25px #00000040;
  margin-bottom: 40px;

  input{
    display: block;
    border: none;
    border-bottom: 1px solid;
    padding-bottom: 5px;
    margin-bottom: 20px;
    width: 100%;
    background-color: transparent;
    color: #FFDD03;
    outline: none !important;
    opacity: 0.2;

    ::placeholder{
      color: #FFDD03 !important;
    }
  }

  

  p{
    margin-bottom: 20px;
  }

  div{
    margin-bottom: 20px;
  }
`

const SignUpButton = styled.button`
border: none;
  border-radius: 20px;
  box-shadow: 18px 18px 25px #00000040;
  color: #FFDD03;
  width: 280px;
  height: 80px;
  background-color: transparent;
`

export const SignUp = () => {
  return (
    <Wrapper>
      <SignUpWrapper>
        <input type="text" placeholder="NAME" />
        <input type="text" placeholder="EMAIL ADDRESS" />
        <input type="text" placeholder="PASSWORD" />
        <p>Sign up with these platforms to get quick access</p>
        <div>
          <a href="">facebook</a>
          <a href="">twitter</a>
          <a href="">google</a>
        </div>
        <p>By signing up i agree with the <a>privacy policy</a> and <a>terms of service</a></p>
        <a href="">Already have an account?</a>
      </SignUpWrapper>
      <SignUpButton>
        Create account
    </SignUpButton>
    </Wrapper>
  )
};
