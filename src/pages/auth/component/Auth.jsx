import React, { useState } from "react";
import styled from "styled-components";
import { strings } from "../constants";
import { SignUp } from "./signUp";
import { LogIn } from "./logIn";
import { About } from "./about";

const AuthWrapper = styled.div`

   
`;

const { Home_Page_Text } = strings;

export const Auth = () => {

    const [isLogin, setIsLogin] = useState(false)
    const handleSetIsLogin = () => {
        setIsLogin(!isLogin)
    }
    console.log(isLogin)

    return (
        <AuthWrapper>
            <SignUp
                isLogin={isLogin} />
            <LogIn
                handleSetIsLogin={handleSetIsLogin}
                isLogin={isLogin} />
            <About />
            {Home_Page_Text}
        </AuthWrapper>
    );
};