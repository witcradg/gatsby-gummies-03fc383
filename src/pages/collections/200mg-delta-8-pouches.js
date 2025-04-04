import * as React from 'react';
import { Layout } from '../../components/layout';
import { GummiePouches } from '../../components/collections/gummie-pouches';
import { FollowUs } from '../../components/follow-us';
import Seo from '../../components/new-seo';

const Delta8PouchesPage = ({ location }) => {
    return (
        <Layout location={location}>
            <GummiePouches title="TRY ALL FLAVORS FOR 65% OFF" bottom />
            <FollowUs />
        </Layout>
    );
};

export const Head = ({ location }) => {
    const title="Delta 8 Sample Packs | Delta 8 Gummies"
    const description="Sample Packs of Delta 8 Gummies. Try all flavors! PLEASE NOTE: We can not ship Delta 8 products to the following states: Alaska, Arizona, Arkansas, Colorado, Delaware"
    const metaUrl = `https://delta8gummies.com/${location.pathname}`;

    return <Seo title={title} url={metaUrl} description={description} />;
};

export default Delta8PouchesPage;
