import React from "react";
import { Layout } from "../../../components/layout";
import { strings } from "../constants";

const { Home_Page_Text } = strings;

export const Home = () => {
    return (
        <Layout>
            <div>
                {Home_Page_Text}
            </div>
        </Layout>
    );
};