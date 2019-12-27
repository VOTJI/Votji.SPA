import React from "react";
import { input_fields, strings } from "../constants";
import { LogInWrapper, LogInForm, LogInButton } from "./styles";

const { text1, text2, text3, text4 } = strings;

export const LogIn = ({ handleSetIsLogin }) => {
  return (
    <LogInWrapper onClick={handleSetIsLogin}>
      <LogInForm>
        {input_fields.map(input => {
          const { placeholder, type } = input;
          return <input type={type} placeholder={placeholder} key={placeholder} />;
        })}
        <a href="">{text1}</a>
        <p>{text2} <a> {text3}</a></p>
      </LogInForm>
      <LogInButton>
        {text4}
      </LogInButton>
    </LogInWrapper>
  );
};