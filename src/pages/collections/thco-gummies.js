import * as React from 'react';
import { Thco } from '../../components/collections/thco';
import { Layout } from '../../components/layout';
import Seo from '../../components/new-seo';
import { HhcBlogRow } from '../../components/page-components/main//hhc-blog-row';
import { Section } from '../../components/page-components/main/section';

const ThcoPage = ({ location }) => {
    return (
        <Layout location={location}>
            <Thco />
            <Section>
                <HhcBlogRow />
            </Section>
        </Layout>
    );
};

export const Head = ({ location }) => {
    const title = 'THC-O Edibles 1000mg | 1000mg THCO Gummies';
    const description =
        'Buy THC-O Edibles Online. THCO 1000mg Gummies Review, Pricing. Shop Local THCO Stores.';

    const metaUrl = `https://delta8gummies.com/${location.pathname}`;

    return <Seo title={title} url={metaUrl} description={description} />;
};

export default ThcoPage;
