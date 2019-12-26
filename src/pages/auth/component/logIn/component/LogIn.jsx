import React from "react";
import { input_fields } from "../constants";
import { LogInWrapper, LogInForm, LogInButton } from "./styles";



export const LogIn = () => {
  return (
    <LogInWrapper>
      <LogInForm>
        {input_fields.map(input => {
          const { placeholder, type } = input;
          return <input type={type} placeholder={placeholder} key={placeholder} />;
        })}
        <a href="">Forgot Password?</a>
        <p>Don't have an account? <a> Create Account</a></p>
      </LogInForm>
      <LogInButton>
        Login
    </LogInButton>
    </LogInWrapper>
  );
};