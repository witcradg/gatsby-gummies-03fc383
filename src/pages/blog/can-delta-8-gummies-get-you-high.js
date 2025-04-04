import * as React from 'react';
import { Layout } from '../../components/layout';
import featuredImage from '../../images/can-delta-8-gummies-get-you-high.jpg';
import { CanDelta8GummiesGetYouHigh } from '../../components/blog/can-delta-8-gummies-get-you-high';
import Seo from '../../components/new-seo';

const postTitle = 'Can Delta 8 gummies get you high? People Ask, We Answer';
const imgAlt = 'most popular product';

const CanDelta8GummiesGetYouHighPage = (location) => {
    return (
        <Layout location={location}>
            <CanDelta8GummiesGetYouHigh
                title={postTitle}
                featuredImage={featuredImage}
                imgAlt={imgAlt}
            />
        </Layout>
    );
};

export const Head = ({ location }) => {
    const title = `${postTitle} | Delta 8 Gummies Q&A`;
    const description =
        'When you take Delta 8 Gummies what does it do? This is a common question people ask about delta-8 effects. ';

    return (
        <Seo
            title={title}
            url={location.href}
            image={featuredImage}
            description={description}
        />
    );
};

export default CanDelta8GummiesGetYouHighPage;
