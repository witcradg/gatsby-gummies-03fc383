import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export const HhcHero = ({ usState }) => {
	const queryResult = useStaticQuery(
		graphql`
			query {
				markdownRemark(frontmatter: { component: { eq: "hhc-hero" } }) {
					frontmatter {
						component
						date
						text
                        textColor
						featuredImage {
							childImageSharp {
								gatsbyImageData(layout: FULL_WIDTH, quality: 50, webpOptions: { quality: 70 })
							}
						}
					}
				}
			}
		`
	);
	const data = queryResult.markdownRemark.frontmatter;
	const image = getImage(data.featuredImage.childImageSharp.gatsbyImageData)

	return (
		<div className="w-[100%] relative">
			<GatsbyImage className="relative z-0" alt="" image={image} />
			<div className="z-20 absolute top-0 tp-caption l-0 lg:ml-20">
				<div className="tp-caption1-wd-2 page-indent uppercase whitespace-nowrap"
					style={{ color: data.textColor }}
				>
			 		{usState} HHC
					<br />
					<span className="big-blue-text">GUMMIES</span>
				</div>
				<div className="small-white-text page-indent" style={{ color: data.textColor }}>
					{data.text}
				</div>
				<Link to="/collections/delta-8-gummies/" className="btn-xl btn-info hero-shop-now-btn page-indent">
					SHOP NOW!
				</Link>
				<br />
			</div>				
		</div>	);
};
