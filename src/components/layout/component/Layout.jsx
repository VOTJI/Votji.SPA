//packages
import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

//files
import { Header } from "./Header";
import { SideBar } from "./SideBar";
import { Footer } from "./Footer";

const Wrapper = styled.div`
    padding: 40px;
`;

const Content = styled.div`

`;




export const Layout = ({ isFooterPresent, children }) => {
    return (
        <Fragment>
            <Wrapper>
                <Header />
                <SideBar />
                <Content>
                    {children}
                </Content>
            </Wrapper>
            {isFooterPresent && <Footer />}
        </Fragment>
    );
};

Layout.propTypes = {
    isFooterPresent: PropTypes.bool,
    children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
    isFooterPresent: true,
};

