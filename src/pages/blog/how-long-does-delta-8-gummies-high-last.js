import * as React from 'react';
import { Layout } from '../../components/layout';
import featuredImage from '../../images/how-long-does-delta-8-gummies-high-last.jpg';
import { HowLongDoesDelta8GummiesHighLast } from '../../components/blog/how-long-does-delta-8-gummies-high-last';
import Seo from '../../components/new-seo';

const postTitle =
    'How Long Does Delta 8 Gummies High Last? People Ask, We Answer';
const imgAlt = 'How Long Does Delta 8 High Last?';

const HowLongDoesDelta8GummiesHighLastPage = (location) => {
    return (
        <Layout location={location}>
            <HowLongDoesDelta8GummiesHighLast
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
        'Find out how long a Delta 8 High will last. Most common question "How Long Does Delta 8 Gummies High Last?" it depends on a lot of things like your tolerance. ';

    return (
        <Seo
            title={title}
            url={location.href}
            image={featuredImage}
            description={description}
        />
    );
};

export default HowLongDoesDelta8GummiesHighLastPage;
