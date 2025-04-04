import * as React from 'react';
import { Layout } from '../../components/layout';
import featuredImage from '../../images/blog-post-most-popular.png';
import { CenterPost } from '../../components/blog/center-post';
import Seo from '../../components/new-seo';

const postTitle = 'Delta 8 Gummies Most Popular New Cannabis Store Product';
const imgAlt = 'most popular product';

const MostPopularNewCannabisStoreProductPage = (location) => {
    return (
        <Layout location={location}>
            <CenterPost
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
        'Delta 8 Gummies are flying off the shelves! Cannabis Stores cannot keep these Edible THC Gummies in Stock.';

    return (
        <Seo
            title={title}
            url={location.href}
            image={featuredImage}
            description={description}
        />
    );
};

export default MostPopularNewCannabisStoreProductPage;
