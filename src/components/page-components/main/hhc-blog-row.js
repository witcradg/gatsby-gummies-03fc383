import React from 'react';
import { BlogPostCard } from './blog-post-card';
import image1 from '../../../images/hhc-blog-1.png';
import image2 from '../../../images/hhc-blog-2.png';
import image3 from '../../../images/hhc-blog-3.png';

export const HhcBlogRow = () => {
	const nodes = [
        {
          "node": {
            "excerpt": "<p>The short answer to this question depends on who you are buying the gummies from. While Delta-8 should have enough of it to be beneficial, Delta 9 THC on the other hand, is considered a psychoactive compound, which is why the FDA mandates not having over 0.03% of Delta 9 THC in a product. That &hellip;</p>",
            "slug": "hhc-gummies-vs-delta-8-gummies",
            "title": "What is the difference bentween HHC Gummies & THC-O Gummies",
            "uri": "/blog/hhc-gummies-vs-thco-gummies/"
          }
        },
        {
          "node": {
            "excerpt": "<p>Delta-8-tetrahydrocannabinol, D8, Delta-8 THC, or Marijuana-lite (all common names used by customers and a shop selling Delta 8 products), is a naturally occurring compound of the cannabis plant. It is one of the 113 other compounds or cannabinoids derived from the cannabis plant. Over the years, it has been discovered that each compound interacts with &hellip;</p>",
            "slug": "the-effects-of-hhc-edibles-vs-effects-thco-edibles",
            "title": "The effects of HHC Edibles vs The Effects of THC-O Edibles",
            "uri": "/blog/the-effects-of-hhc-edibles-vs-effects-thco-edibles/"
          }
        },
        {
          "node": {
            "excerpt": "<p>The cannabis industry is arguably one of the fastest evolving industries today along with the organic food industry. While new cannabinoids are being actively studied, isolated, and used to produce edible products, such as delta-8 gummies aka weed gummies, some are better than others. Also, many people now understand that other than THC, perhaps there &hellip;</p>",
            "slug": "hhc-gummies-reviews-benefits-side-effects",
            "title": "HHC Gummies, Reviews, Benefits & Side Effects",
            "uri": "/blog/hhc-gummies-reviews-benefits-side-effects/"
          }
        }
      ]
	const post1 = nodes[0].node;
	const post2 = nodes[1].node;
	const post3 = nodes[2].node;

	return (
		<React.Fragment>
			<BlogPostCard post={post1} image={image1} imgAlt="hhc gummies" />
			<BlogPostCard post={post2} image={image2} imgAlt="hhc edibles"/>
			<BlogPostCard post={post3} image={image3} imgAlt="buy hhc or thco onlines"/>
		</React.Fragment>
	);
};
