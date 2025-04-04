import * as React from 'react';
import { Layout } from '../components/layout';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import { Tos } from '../components/page-components/tos';
import Seo from '../components/new-seo';

const TermsOfServicePage = ({
    pageContext: {
        breadcrumb: { crumbs }
    },
    location
}) => {
    return (
        <Layout location={location}>
            <Breadcrumb crumbs={crumbs} crumbSeparator=" / " />
            <Tos />
        </Layout>
    );
};

export const Head = ({ location }) => {
    return (
        <Seo
            type="page"
            title="Terms of Service | Delta 8 Gummies"
            description="Learn about our Terms of Service. "
            url={location.href}
        />
    );
};

export default TermsOfServicePage;
