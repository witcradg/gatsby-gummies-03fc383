import * as React from 'react';
import { Layout } from '../../components/layout';
import { Thca } from '../../components/collections/thca';
import Seo from '../../components/new-seo';

const ThcaPage = ({ location }) => {
    return (
        <Layout location={location}>
            <Thca />
        </Layout>
    );
};
export const Head = ({ location }) => {
    const title = 'THCA Flower | Buy THCA Flower';
    const description =
        'THCA FLOWER FREE SHIPPING on all flavors of our DELTA 9 GUMMIES. The Best Online THCA and Free Shipping over $250 on all orders.';
    const metaUrl = `https://delta8gummies.com/${location.pathname}`;

    return <Seo title={title} url={metaUrl} description={description} />;
};

export default ThcaPage;
