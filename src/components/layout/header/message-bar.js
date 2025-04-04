import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { SocialIcons } from './social-icons';

export const MessageBar = () => {

	const queryResult = useStaticQuery(
		graphql`
			query {
				allMarkdownRemark(filter: { frontmatter: { component: { eq: "hero" } } }) {
					edges {
						node {
							frontmatter {
								component
								date
								text
                                msgbar1
                                msgbar2
							}
						}
					}
				}
			}
		`
	);

    const frontMatter = queryResult.allMarkdownRemark.edges[0].node.frontmatter;

	return (
		<div id="messagebar-wrapper" className="container-fluid">
			<div className="large-messagebar-view">
				<div className="flex flex-wrap content-center text-center justify-between">
					<div className="text-center">
						<span className="whitespace-nowrap mr-2">{frontMatter.msgbar1}</span>
						<span className="whitespace-nowrap" role="img" aria-label="hand pointing right">
						🔥🔥🔥<span className="text-danger font-bold">{frontMatter.msgbar2}</span>
						</span>
					</div>
					<div className="flex-1 text-right">
						<div className="flex-1 inline-block w-2/5 whitespace-nowrap text-center">
							<SocialIcons />
						</div>
					</div>
				</div>
			</div>

			<div className="medium-messagebar-view">
				<div className="flex flex-wrap content-center justify-center">
					<div className="text-center">
						<span className="whitespace-nowrap mr-2">{frontMatter.msgbar1}</span>
						<span className="text-danger" role="img" aria-label="hand pointing right">
							👉👉👉 {frontMatter.msgbar2}
						</span>
						<div className="flex-1 inline-block w-2/5 whitespace-nowrap text-center">
							<SocialIcons />
						</div>
					</div>
				</div>
			</div>

			<div className="small-messagebar-view">
				<div className="text-sm content-center text-center">
					<div>
						<div>{frontMatter.msgbar1}</div>
						<div>
							<span className="text-danger" role="img" aria-label="hand pointing right">
								👉👉👉 {frontMatter.msgbar2}
							</span>
						</div>
					</div>
					<div>
						<div className="flex-1 inline-block w-2/5 whitespace-nowrap text-center">
							<SocialIcons />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
