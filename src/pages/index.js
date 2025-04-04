import React from 'react';
import { Layout } from '../components/layout';
import { MainTemplate } from '../components/page-components/main/main-template';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';
import Seo from '../components/new-seo';

const IndexPage = (location) => {
    return (
        <Layout location={location}>
            <MainTemplate />
        </Layout>
    );
};

export const Head = ({ location }) => {
    return (
        <Seo
            type="page"
            title="Delta 8 THC Gummies | Delta 8 Gummies 1000mg and Delta 9 Gummies"
            description="Buy Delta 8 Gummies Online! Delta 9 THC Gummies Shipped to Your Door. Delta 9 THC Gummies made from Hemp Buy Now with Free Shipping."
            url={location.href}
        />
    );
};

export default IndexPage;
