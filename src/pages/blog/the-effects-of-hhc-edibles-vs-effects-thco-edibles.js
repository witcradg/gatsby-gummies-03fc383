import * as React from 'react';
import { Layout } from '../../components/layout';
import featuredImage from '../../images/effects-hhc-gummies-vs-thco-gummies.png';
import { HhcCenterPost } from '../../components/blog/hhc-center-post';
import Seo from '../../components/new-seo';

const postTitle = 'The Effects of HHC Edibles Vs. The Effects of Thc-O Edibles';
const imgAlt = 'most popular product';

const EffectsOfHhcEdiblesVsEffectsThcoEdiblesPage = (location) => {
    return (
        <Layout location={location}>
            <HhcCenterPost
                title={postTitle}
                featuredImage={featuredImage}
                imgAlt={imgAlt}
            />
        </Layout>
    );
};

export const Head = ({ location }) => {
    const title = `${postTitle} | Delta 8 Gummies`;
    const description =
        'HHC Gummies are flying off the shelves! Cannabis Stores cannot keep these Edible HHC Gummies in Stock.';

    return (
        <Seo
            title={title}
            url={location.href}
            image={featuredImage}
            description={description}
        />
    );
};

export default EffectsOfHhcEdiblesVsEffectsThcoEdiblesPage;
