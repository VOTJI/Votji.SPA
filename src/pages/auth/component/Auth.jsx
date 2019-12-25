import React from "react";
import { strings } from "../constants";
import { SignUp } from "./signUp";
import { LogIn } from "./logIn";

const { Home_Page_Text } = strings;

export const Auth = () => {
    return (
        <div>
            <SignUp />
            <LogIn />
            {Home_Page_Text}
        </div>
    );
};