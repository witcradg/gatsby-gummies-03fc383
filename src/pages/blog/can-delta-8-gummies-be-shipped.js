import * as React from 'react';
import { Layout } from '../../components/layout';
import { CanDelta8GummiesBeShipped } from '../../components/blog/can-delta-8-gummies-be-shipped';
import featuredImage from '../../images/can-delta-8-gummies-be-shipped.webp';
import Seo from '../../components/new-seo';

const postTitle = 'Can Delta 8 Gummies Be Shipped? People Ask, We Answer';
const imgAlt = 'most popular product';

const CanDelta8GummiesBeShippedPage = (location) => {
    return (
        <Layout location={location}>
            <CanDelta8GummiesBeShipped
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
        'Can Delta 8 Gummies Be Shipped? That depends which state you live in. Find out now. Then buy some if you can buy them onilne from us. The online delta-8 retailer. ';

    return (
        <Seo
            title={title}
            url={location.href}
            image={featuredImage}
            description={description}
        />
    );
};

export default CanDelta8GummiesBeShippedPage;
