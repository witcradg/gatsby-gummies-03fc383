import * as React from 'react';
import { graphql } from 'gatsby'
import { Layout } from '../../../components/layout';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
// import productImage from '../../../images/wholesale-blue-raspberry-d8-gummies.png';
import { BlueRaspberryCase } from '../../../components/products/wholesale/1000mg-delta-8-blue-raspberry-case';
import Seo from '../../../components/new-seo';
import { prices, formatSeoTitle, formatSeoDescription } from "/src/components/global"

const BlueRaspberryCasePage = ({ pageContext: { breadcrumb: { crumbs } }, location, data }) => {
	const frontmatter = data.markdownRemark.frontmatter;

	crumbs[1].pathname = frontmatter.crumbsPath
	crumbs[1].crumbLabel = frontmatter.crumbsLabel
    crumbs.splice(2,1)

    return (
		<Layout location={location}>
			<Breadcrumb crumbs={crumbs} crumbSeparator=" / " crumbLabel={frontmatter.dataItemName} />
			<BlueRaspberryCase productData={data}/>
		</Layout>
	);
};

export const Head = ({location, data}) => {

    const frontmatter = data.markdownRemark.frontmatter;
    const formatted = prices(frontmatter)
    const discountedPrice=formatted.discountedPrice

	// const pageTitle = frontmatter.dataItemName
	// const metaTitle = `${pageTitle} | Delta 8 Gummies`;
	// const description = `${pageTitle} PLEASE NOTE: We can not ship Delta 8 products to the following states: Alaska, Arizona, Arkansas, Colorado, Delaware`;

    return (
        <Seo
            title={formatSeoTitle(frontmatter)}
            url={location.href}
            image={frontmatter.dataItemImage.publicURL}
            description={formatSeoDescription(frontmatter)}
            amount={discountedPrice}
        />
    );
};

export const query = graphql`
    query {
        markdownRemark(frontmatter: { cardName: { eq: "BlueRaspberryCase" } }) {
            frontmatter {
				title
				crumbsPath
				crumbsLabel
                discountedPrice
                originalPrice
                outOfStock
                dataItemImage {
                    childImageSharp {
                    gatsbyImageData
                    } 
                    publicURL
                }
                productImage {
                    childImageSharp {
                    gatsbyImageData
                    } 
                    publicURL
                }
                PIalt
                productAlt1Image {
                    childImageSharp {
                    gatsbyImageData
                    } 
                    publicURL
                }
                PI1alt
                productAlt2Image {
                    childImageSharp {
                    gatsbyImageData
                    } 
                    publicURL
                }
                PI2alt
                productAlt3Image {
                    childImageSharp {
                    gatsbyImageData
                    } 
                    publicURL
                }
                PI3alt
                productAlt4Image {
                    childImageSharp {
                    gatsbyImageData
                    } 
                    publicURL
                }
                PI4alt
                yotpoProductId
                dataItemId
                dataItemUrl
                dataItemDescription
                dataItemName
                dataItemCategory
                descriptionTotalContent
                descriptionPotency
                descriptionCount
                descriptionTotalCaseContent
                descriptionCaseCount
                reviewsProductId
                reviewsItemName
                seoTitle
                seoDescription 
            }
        }
    }
`

export default BlueRaspberryCasePage;
