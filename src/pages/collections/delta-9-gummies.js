import * as React from 'react';
import { Layout } from '../../components/layout';
import { Delta9Gummies } from '../../components/collections/delta-9-gummies';
import Seo from '../../components/new-seo';

const Delta9GummiesPage = ({ location }) => {
    return (
        <Layout location={location}>
            <Delta9Gummies />
        </Layout>
    );
};
export const Head = ({ location }) => {
    const title = 'DELTA 9 GUMMIES | Delta 9 THC Gummie EDIBLES';
    const description =
        'DELTA 9 GUMMIES FREE SHIPPING on all flavors of our DELTA 9 GUMMIES. Buy 2 Get 1 Free Delta 8 Gummies and Free Shipping over $250 on all orders.';
    const metaUrl = `https://delta8gummies.com/${location.pathname}`;

    return <Seo title={title} url={metaUrl} description={description} />;
};

export default Delta9GummiesPage;
