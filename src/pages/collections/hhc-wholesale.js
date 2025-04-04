import * as React from 'react';
import { Layout } from '../../components/layout';
import { HhcWholesale } from '../../components/collections/hhc-wholesale';
import Seo from '../../components/new-seo';

const HhcWholesalePage = ({ location }) => {
    return (
        <Layout location={location}>
            <HhcWholesale />
        </Layout>
    );
};

export const Head = ({ location }) => {
    const title = 'Wholesale HHC Edibles | Bulk Delta 8 Gummies';
    const description =
        'Buy Bulk HHC Edibles at Wholesale Prices. 1000mg Gummies, Distillate, Edibles, Vape, Disposable Vapes Wholesale and White label HHC.';
    const metaUrl = `https://delta8gummies.com/${location.pathname}`;

    return <Seo title={title} url={metaUrl} description={description} />;
};

export default HhcWholesalePage;
