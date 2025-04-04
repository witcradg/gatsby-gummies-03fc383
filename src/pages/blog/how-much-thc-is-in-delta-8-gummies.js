import * as React from 'react';
import { Layout } from '../../components/layout';
import featuredImage from '../../images/blog-post-how-much-thc-gummies.png';
import { LeftPost } from '../../components/blog/left-post';
import Seo from '../../components/new-seo';

const postTitle = 'How much THC is in delta 8 gummies?';
const imgAlt = 'how much thc';

const LeftPostPage = (location) => {
    return (
        <Layout location={location}>
            <LeftPost
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
        '1000mg Total Delta 8 THC Per Jar. Delta-8 should have enough of it to be beneficial, Delta 9 THC on the other hand, is considered a psychoactive compound, which is why the FDA mandates not having over 0.03% of Delta 9 THC in a product. ';

    return (
        <Seo
            title={title}
            url={location.href}
            image={featuredImage}
            description={description}
        />
    );
};

export default LeftPostPage;
