import * as React from 'react';
import { Layout } from '../../components/layout';
import { VeganGummies } from '../../components/collections/vegan-gummies';
import Seo from '../../components/new-seo';

const VeganGummiesPage = ({ location }) => {
    return (
        <Layout location={location}>
            <VeganGummies row2 />
        </Layout>
    );
};

export const Head = ({ location }) => {
    const title = 'Vegan Delta 8 Gummies | Delta 8 Gummies';
    const description =
        'Real Vegan Delta 8 THC Gummies Gelatin-Free Shipped Directly to your Door. Ethical and 100% Vegan';
    const metaUrl = `https://delta8gummies.com/${location.pathname}`;

    return <Seo title={title} url={metaUrl} description={description} />;
};

export default VeganGummiesPage;
