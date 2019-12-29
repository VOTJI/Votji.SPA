import React, { useState } from "react";
import styled from "styled-components";
import { strings } from "../constants";
import { SignUp } from "./signUp";
import { LogIn } from "./logIn";
import { About } from "./about";

const AuthWrapper = styled.div`

   
`;


export const Auth = () => {

    const [isLogin, setIsLogin] = useState(false);
    const handleSetIsLogin = () => {
        setIsLogin(!isLogin);
    };

    return (
        <AuthWrapper>
            <SignUp
                isLogin={isLogin} />
            <LogIn
                handleSetIsLogin={handleSetIsLogin}
                isLogin={isLogin} />
            <About />
        </AuthWrapper>
    );
};