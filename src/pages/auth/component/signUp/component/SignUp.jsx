import React from "react";
import { input_fields } from "../constants";
import { SignUpWrapper, SignUpForm, SignUpButton } from "./styles";



export const SignUp = () => {
  return (
    <SignUpWrapper>
      <SignUpForm id="signUp-form">
        {input_fields.map(input => {
          const { placeholder, type } = input;
          return <input type={type} placeholder={placeholder} key={placeholder} />;
        })}
        <p>Sign up with these platforms to get quick access</p>
        <div className="social-media">
          <a href=""><i className="fab fa-facebook-f"></i></a>
          <a href=""><i className="fab fa-twitter"></i></a>
          <a href=""><i className="fab fa-google"></i></a>
        </div>
        <p className="privacy">By signing up i agree with the <br /><a>privacy policy</a> and <a>terms of service</a></p>
        <a href="" >Already have an account?</a>
      </SignUpForm>
      <SignUpButton form="signUp-form">
        Create account
    </SignUpButton>
    </SignUpWrapper>
  );
};
