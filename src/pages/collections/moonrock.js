import * as React from 'react';
import { Layout } from '../../components/layout';
import { MoonrockPrerollRow } from '../../components/page-components/main/moonrock-preroll-row';
import { Section } from '../../components/page-components/main/section';
import Seo from '../../components/new-seo';

const MoonrockPage = ({ location }) => {
    return (
        <Layout location={location}>
            <Section sectionTitle="1.5G MOONROCK PRE-ROLL">
                <MoonrockPrerollRow />
            </Section>
        </Layout>
    );
};

export const Head = ({ location }) => {
    const title = 'Buy HHC Gummies Online | 1000mg HHC Edibles';
    const description =
        'Buy HHC Edibles Online! 1000mg Gummies, Distillate, Edibles, Vape, Disposable Vapes Wholesale and White label.';
    const metaUrl = `https://delta8gummies.com/${location.pathname}`;

    return <Seo title={title} url={metaUrl} description={description} />;
};

export default MoonrockPage;
