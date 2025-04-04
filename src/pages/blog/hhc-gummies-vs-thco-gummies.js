import * as React from 'react';
import { Layout } from '../../components/layout';
import featuredImage from '../../images/difference-between-hhc-thco-gummies.png';
import { HhcLeftPost } from '../../components/blog/hhc-left-post';
import Seo from '../../components/new-seo';

const postTitle =
    'What is the difference Between HHC Gummies and THC-O Gummies?';
const imgAlt = 'how much thc';

const HhcLeftPostPage = (location) => {
    return (
        <Layout location={location}>
            <HhcLeftPost
                title={postTitle}
                featuredImage={featuredImage}
                imgAlt={imgAlt}
            />
        </Layout>
    );
};

export const Head = ({ location }) => {
    const title = `${postTitle} | HHC Edible Reviews`;
    const description =
        '1000mg Total HHC THC Per Jar. HHC should have enough of it to be beneficial, Delta 9 THC on the other hand, is considered a psychoactive compound, which is why the FDA mandates not having over 0.03% of Delta 9 THC in a product. ';

    return (
        <Seo
            title={title}
            url={location.href}
            image={featuredImage}
            description={description}
        />
    );
};

export default HhcLeftPostPage;
