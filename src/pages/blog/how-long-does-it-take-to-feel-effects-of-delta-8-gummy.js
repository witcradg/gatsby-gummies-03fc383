import * as React from 'react';
import { Layout } from '../../components/layout';
import featuredImage from '../../images/blog-post-most-popular.png';
import { CenterPost } from '../../components/blog/center-post';
import Seo from '../../components/new-seo';

const postTitle =
    'How long does it take to feel the effects of delta 8 gummy? People Ask, We Answer';
const imgAlt = 'most popular product';

const HowLongDoesItTakeToFeelEffectsPage = (location) => {
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
        'A: Within 30min to an hour you should feel your delta 8 gummies Q: "How long does it take to feel the effects of delta 8 gummy??" Find out now. Then buy some. This is a common question people ask about delta-8 effects. ';

    return (
        <Seo
            title={title}
            url={location.href}
            image={featuredImage}
            description={description}
        />
    );
};

export default HowLongDoesItTakeToFeelEffectsPage;
