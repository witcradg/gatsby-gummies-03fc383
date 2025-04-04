import * as React from 'react';
import { Layout } from '../../components/layout';
import featuredImage from '../../images/blog-post-weed-gummy.png';
import { RightPost } from '../../components/blog/right-post';
import Seo from '../../components/new-seo';

const postTitle = 'Buy Weed Gummy Edibles Online';
const imgAlt = 'weed gummy';

const RightPostPage = (location) => {
    return (
        <Layout location={location}>
            <RightPost
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
        'The Best Weed Gummies – Buy Weed Gummy Edibles Online. these are excellent products manufactured with the highest standard, quality control procedures. That’s why these are the best weed gummies you can buy online today.';

    return (
        <Seo
            title={title}
            url={location.href}
            image={featuredImage}
            description={description}
        />
    );
};

export default RightPostPage;
