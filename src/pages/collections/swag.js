import * as React from 'react';
import { Layout } from '../../components/layout';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import { Swag } from '../../components/collections/swag';
import Seo from '../../components/new-seo';

const SwagPage = ({
    pageContext: {
        breadcrumb: { crumbs }
    },
    location
}) => {
    return (
        <Layout location={location}>
            <Breadcrumb crumbs={crumbs} crumbSeparator=" / " />
            <Swag />
        </Layout>
    );
};

export const Head = ({ location }) => {
    const title = 'Swag | Delta 8 Gummies';
    const description =
        'Delta 8 Gummie Bears 1000MG $49.99 $59.99 PLEASE NOTE: We can not ship Delta 8 products to the following states: Alaska, Arizona, Arkansas, Colorado, Delaware';

    const metaUrl = `https://delta8gummies.com/${location.pathname}`;

    return <Seo title={title} url={metaUrl} description={description} />;
};

export default SwagPage;
