import * as React from 'react';
import { Layout } from '../../components/layout';
import { OriginalGummies } from '../../components/collections/original-gummies';
import { VeganGummies } from '../../components/collections/vegan-gummies';
import { OriginalSamplePacks } from '../../components/collections/original-sample-packs';
import { OnFireTitle } from '../../components/products/helpers/on-fire-title';
import { FollowUs } from '../../components/follow-us';
import { AllDelta8Gummies } from '../../components/collections/all-delta-8-gummies';
import Seo from '../../components/new-seo';

const GummiesPage = ({ location }) => {
    return (
        <Layout location={location}>
            <OnFireTitle />
            <OriginalGummies />
            <VeganGummies row2 />
            <AllDelta8Gummies />
            <OriginalSamplePacks />
            <FollowUs />
        </Layout>
    );
};
export const Head = ({ location }) => {
    const title = 'Shop ALL Delta 8 Edible Candy | Delta 8 Gummies';
    const description =
        'Delta 8 Edibles 1000MG Each. 6 Awesome flavors to choose from. PLEASE NOTE: We can not ship Delta 8 products to the following states: Alaska, Arizona, Arkansas, Colorado, Delaware';
    const metaUrl = `https://delta8gummies.com/${location.pathname}`;

    return <Seo title={title} url={metaUrl} description={description} />;
};

export default GummiesPage;
