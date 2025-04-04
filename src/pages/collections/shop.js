import * as React from 'react';
import { Layout } from '../../components/layout';
import Seo from '../../components/new-seo';
import { Shop } from '../../components/collections/shop';

//shop collection for limite distribution states
const ShopPage = ({ location }) => {
    location.distribution = 'limited';
    return (
        <Layout location={location}>
            <Shop />
        </Layout>
    );
};

export const Head = ({ location }) => {
    const title = 'HEMP EDIBLES HHC GUMMIES DELTA 9 GUMMIES and CBD PRODUCTS';
    const description =
        'A collecction of hemp edibles, delta 8 edibles, delta 9 edibles and CBD products. Get Free Shipping on all orders over $250.';
    const metaUrl = `https://delta8gummies.com/${location.pathname}`;

    return <Seo title={title} url={metaUrl} description={description} />;
};

export default ShopPage;
