import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { CardCore } from '../card-core';

export const GummieBearsCard = () => {
	const queryResult = useStaticQuery(
		graphql`
			query {
				markdownRemark(frontmatter: { cardName: { eq: "GummieBears" } }) {
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
