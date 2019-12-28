//packages
import React, { Fragment, Children } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

//files
import { Header } from "./Header";
import { SideBar } from "./Sidebar";
import { Footer } from "./Footer";

const Wrapper = styled.div`

`;

const Content = styled.div`
    
`;




const Layout = ({ isFooterPresent }) => {
    return (
        <Fragment>
            <Wrapper>
                <Header />
                <SideBar />
                <Content>
                    {Children}
                </Content>
            </Wrapper>
            {isFooterPresent && <Footer />}
        </Fragment>
    );
};

Layout.propTypes = {
    isFooterPresent: PropTypes.bool,
};

Layout.defaultProps = {
    isFooterPresent: true,
};


export default Layout;