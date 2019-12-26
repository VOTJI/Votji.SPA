import React from "react";
import { input_fields } from "../constants";
import { LogInWrapper, LogInForm, LogInButton } from "./styles";



export const LogIn = () => {
  return (
    <LogInWrapper>
      <LogInForm>
        {input_fields.map(input => {
          const { placeholder, type } = input
          return <input type={type} placeholder={placeholder} key={placeholder} />
        })}
        <p>Sign up with these platforms to get quick access</p>
        <div>
          <a href="">facebook</a>
          <a href="">twitter</a>
          <a href="">google</a>
        </div>
        <p>By signing up i agree with the <a>privacy policy</a> and <a>terms of service</a></p>
        <a href="">Already have an account?</a>
      </LogInForm>
      <LogInButton>
        Create account
    </LogInButton>
    </LogInWrapper>
  )
};