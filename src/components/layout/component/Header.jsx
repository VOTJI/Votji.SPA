import React from "react";
import styled from "styled-components";
import { strings } from "../constants";
import logo from "../../../assets/icons/Group 1524.png";

const { Hire, Apply, Login, Search } = strings;

const Wrapper = styled.div`
    background-color: blue;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .section-one{
        display: flex;
        align-items: center;

        img{
            margin-right: 10px;
        }
    }

    .section-two{

        a{
            margin-right: 20px;
            text-decoration: none;
        }
    }
`;

export const Header = () => {
    return (
        <Wrapper>
            <div className="section-one">
                <img src={logo} alt="bridge" />
                <div>
                    <input type="text" />
                    {Search}
                </div>
            </div>
            <div className="section-two">
                <a href="">{Hire}</a>
                <a href="">{Apply}</a>
                <button>{Login}</button>
            </div>
        </Wrapper>
    );
};
