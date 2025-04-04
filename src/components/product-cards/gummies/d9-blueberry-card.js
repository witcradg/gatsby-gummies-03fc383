import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { CardCore } from '../card-core';

export const D9BlueberryCard = () => {
	const queryResult = useStaticQuery(
		graphql`
			query {
				markdownRemark(frontmatter: { cardName: { eq: "D9Blueberry" } }) {
					frontmatter {
						cardName
						title
						dataItemId
						dataItemDescription
						dataItemName
						yotpoProductId
						discountedPrice
						displayedDiscount
						originalPrice
                        outOfStock
						productLink
						dataItemUrl
						dataItemImage {
							childImageSharp {
								gatsbyImageData
							}
							publicURL
						}
						productCardImage {
							childImageSharp {
								gatsbyImageData
							}
							publicURL
						}
						productCardImageAlt
					}
				}
			}
		`
	);

	return (
		<CardCore data={queryResult.markdownRemark.frontmatter} />
	);
};
