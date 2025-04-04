import * as React from 'react';
import { Layout } from '../../components/layout';
import featuredImage from '../../images/blog-post-most-popular.png';
import { WhatDoesADelta8HighFeelLike } from '../../components/blog/what-does-a-delta-8-high-feel-like';
import Seo from '../../components/new-seo';

const postTitle = 'Are Delta 8 gummies legit? People Ask, We Answer';
const imgAlt = 'Delta-8 Feel Like';

const WhatDoesADelta8HighFeelLikePage = (location) => {
    return (
        <Layout location={location}>
            <WhatDoesADelta8HighFeelLike
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
        'EVERYONE WANTS TO KNOW "Are Delta 8 gummies legit?" Find out now. Then buy some. This is a common question people ask about delta-8 effects. ';

    return (
        <Seo
            title={title}
            url={location.href}
            image={featuredImage}
            description={description}
        />
    );
};

export default WhatDoesADelta8HighFeelLikePage;
