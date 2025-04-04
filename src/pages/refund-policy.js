import * as React from 'react';
import { Layout } from '../components/layout';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import { RefundPolicy } from '../components/page-components/refund-policy';
import Seo from '../components/new-seo';

const RefundPolicyPage = ({
    pageContext: {
        breadcrumb: { crumbs }
    },
    location
}) => {
    return (
        <Layout location={location}>
            <Breadcrumb crumbs={crumbs} crumbSeparator=" / " />
            <RefundPolicy />
        </Layout>
    );
};

export const Head = ({ location }) => {
    return (
        <Seo
            type="page"
            title="Refund Policy | Delta 8 Gummies"
            description="Refund Policy for D8G."
            url={location.href}
        />
    );
};

export default RefundPolicyPage;
