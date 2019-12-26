import React from "react";
import { input_fields, strings } from "../constants";
import { SignUpWrapper, SignUpForm, SignUpButton } from "./styles";

const { text1, text2, text3, text4, text5, text6, text7 } = strings;

export const SignUp = () => {
  return (
    <SignUpWrapper>
      <SignUpForm id="signUp-form">
        {input_fields.map(input => {
          const { placeholder, type } = input;
          return <input type={type} placeholder={placeholder} key={placeholder} />;
        })}
        <p>{text1}</p>
        <div className="social-media">
          <a href=""><i className="fab fa-facebook-f"></i></a>
          <a href=""><i className="fab fa-twitter"></i></a>
          <a href=""><i className="fab fa-google"></i></a>
        </div>
        <p className="privacy">{text2} <br /><a>{text3} </a>{text4}<a> {text5}</a></p>
        <a href="" >{text6}</a>
      </SignUpForm>
      <SignUpButton form="signUp-form">
        {text7}
      </SignUpButton>
    </SignUpWrapper>
  );
};
