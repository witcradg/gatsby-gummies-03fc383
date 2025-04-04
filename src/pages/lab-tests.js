import * as React from 'react';
import { Layout } from '../components/layout';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import { LabTests } from '../components/page-components/lab-tests';
import Seo from '../components/new-seo';

const LabTestsPage = ({
    pageContext: {
        breadcrumb: { crumbs }
    },
    location
}) => {
    return (
        <Layout location={location}>
            <Breadcrumb crumbs={crumbs} crumbSeparator=" / " />
            <LabTests />
        </Layout>
    );
};

export const Head = ({ location }) => {
    return (
        <Seo
            type="page"
            title="Lab Tests | Delta 8 Gummies"
            description="Lab Test for all Delta 8 Gummies Products. $49.99 $59.99 PLEASE NOTE: We can not ship Delta 8 products to the following states: Alaska, Arizona, Arkansas, Colorado, Delaware"
            url={location.href}
        />
    );
};

export default LabTestsPage;
