import React from "react";
import styled from "styled-components";
import { strings } from "../constants";
import { SignUp } from "./signUp";
import { LogIn } from "./logIn";
import { About } from "./about";

const AuthWrapper = styled.div`

   
`

const { Home_Page_Text } = strings;

export const Auth = () => {
    return (
        <AuthWrapper>
            <SignUp />
            <LogIn />
            <About />
            {Home_Page_Text}
        </AuthWrapper>
    );
};