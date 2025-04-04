import * as React from 'react';
import { Layout } from '../../components/layout';
import featuredImage from '../../images/hhc-gummies-reviews-benefits-side-effects.png';
import { HhcRightPost } from '../../components/blog/hhc-right-post';
import Seo from '../../components/new-seo';

const postTitle = 'HHC Gummies Reviews, Benefits & Sid Effects';
const imgAlt = 'weed gummy';

const HhcRightPostPage = (location) => {
    return (
        <Layout location={location}>
            <HhcRightPost
                title={postTitle}
                featuredImage={featuredImage}
                imgAlt={imgAlt}
            />
        </Layout>
    );
};

export const Head = ({ location }) => {
    const title = `${postTitle} | HHC Gummies`;
    const description =
        'The Best HHC Gummies – Buy HHC Gummy Edibles Online. these are excellent products manufactured with the highest standard, quality control procedures.HHC Gummies Reviews, Benefits & Sid Effects. That’s why these are the best hhc gummies you can buy online today.';

    return (
        <Seo
            title={title}
            url={location.href}
            image={featuredImage}
            description={description}
        />
    );
};

export default HhcRightPostPage;
