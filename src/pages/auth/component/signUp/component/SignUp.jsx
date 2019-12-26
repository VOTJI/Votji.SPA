import React from "react";
import { input_fields } from "../constants";
import { SignUpWrapper, SignUpForm, SignUpButton } from "./styles";



export const SignUp = () => {
  return (
    <SignUpWrapper>
      <SignUpForm>
        {input_fields.map(input => {
          const { placeholder, type } = input;
          return <input type={type} placeholder={placeholder} key={placeholder} />;
        })}
        <p>Sign up with these platforms to get quick access</p>
        <div>
          <a href="">facebook</a>
          <a href="">twitter</a>
          <a href="">google</a>
        </div>
        <p className="privacy">By signing up i agree with the <br /><a>privacy policy</a> and <a>terms of service</a></p>
        <a href="" >Already have an account?</a>
      </SignUpForm>
      <SignUpButton>
        Create account
    </SignUpButton>
    </SignUpWrapper>
  );
};
