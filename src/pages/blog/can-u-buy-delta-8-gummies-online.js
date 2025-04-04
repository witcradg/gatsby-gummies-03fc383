import * as React from 'react';
import { Layout } from '../../components/layout';
import featuredImage from '../../images/can-u-buy-delta-8-gummies-online.jpg';
import { CanUBuyDelta8GummiesOnline } from '../../components/blog/can-u-buy-delta-8-gummies-online.js';
import Seo from '../../components/new-seo';

const postTitle = 'Can u buy Delta 8 gummies online? People Ask, We Answer';
const imgAlt = 'most popular product';

const CanUBuyDelta8GummiesOnlinePage = (location) => {
    return (
        <Layout location={location}>
            <CanUBuyDelta8GummiesOnline
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
        'Can u buy Delta 8 gummies online? You can buy delta 8 gummies online if you live in a legal delta 8 state. Find out now. Then buy some if you can buy them onilne from us. The online delta-8 retailer. ';

    return (
        <Seo
            title={title}
            url={location.href}
            image={featuredImage}
            description={description}
        />
    );
};

export default CanUBuyDelta8GummiesOnlinePage;
