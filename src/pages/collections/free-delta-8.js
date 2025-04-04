import * as React from 'react';
import { Layout } from '../../components/layout';
import { FreeDelta8 } from '../../components/collections/free-delta-8';
import Seo from '../../components/new-seo';

const FreeDelta8Page = ({ location }) => {
    return (
        <Layout location={location}>
            <FreeDelta8 />
        </Layout>
    );
};

export const Head = ({ location }) => {
    const title = 'FREE DELTA 8 FREE SHIPPING | Delta 8 Gummies';
    const description =
        'FREE DELTA 8 FREE SHIPPING on all flavors of our delta 8 gummies. Buy 2 Get 1 Free Delta 8 Gummies and Free Shipping over $250 on all orders.';
    const metaUrl = `https://delta8gummies.com/${location.pathname}`;

    return <Seo title={title} url={metaUrl} description={description} />;
};

export default FreeDelta8Page;
