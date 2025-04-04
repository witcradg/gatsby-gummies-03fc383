import * as React from 'react';
import { Layout } from '../../components/layout';
import featuredImage from '../../images/what-is-the-strongest-delta-8-edibles.jpg';
import { WhatIsTheStrongestDelta8Edibles } from '../../components/blog/what-is-the-strongest-delta-8-edibles';
import Seo from '../../components/new-seo';

const postTitle =
    'What is the Strongest Delta 8 Edibles? People Ask, We Answer';
const imgAlt = 'what is the strongest product';

const WhatIsTheStrongestDelta8EdiblesPage = (location) => {
    return (
        <Layout location={location}>
            <WhatIsTheStrongestDelta8Edibles
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
        'The Strongest Delta 8 Edibles are sold here! Find out now. Then buy some if you can buy them onilne from us. The online delta-8 retailer. ';

    return (
        <Seo
            title={title}
            url={location.href}
            image={featuredImage}
            description={description}
        />
    );
};

export default WhatIsTheStrongestDelta8EdiblesPage;
