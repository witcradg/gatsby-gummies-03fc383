import * as React from 'react';
import { Layout } from '../../components/layout';
import featuredImage from '../../images/what-does-delta-8-gummies-do.jpg';
import { WhatDoesDelta8GummiesDo } from '../../components/blog/what-does-delta-8-gummies-do';
import Seo from '../../components/new-seo';

const postTitle = 'What does Delta 8 gummies do? People Ask, We Answer';
const imgAlt = 'what does it do';

const WhatDoesDelta8GummiesDoPage = (location) => {
	return (
		<Layout location={location}>
            <WhatDoesDelta8GummiesDo 
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

export default WhatDoesDelta8GummiesDoPage;
