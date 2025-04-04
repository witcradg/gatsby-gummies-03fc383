import * as React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../../components/layout';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import { CottonCandyXD } from '../../components/products/extended-distribution/cottoncandy-xd';
import Seo from '../../components/new-seo';
import { prices, formatSeoTitle, formatSeoDescription } from "/src/components/global"

const CottonCandyXDPage = ({
    pageContext: {
        breadcrumb: { crumbs }
    },
    location,
    data
}) => {
    const frontmatter = data.markdownRemark.frontmatter;

    crumbs[1].pathname = frontmatter.crumbsPath;
    crumbs[1].crumbLabel = frontmatter.crumbsLabel;

    return (
        <Layout location={location}>
            <Breadcrumb
                crumbs={crumbs}
                crumbSeparator=" / "
                crumbLabel={frontmatter.dataItemName}
            />
            <CottonCandyXD productData={data} />
        </Layout>
    );
};

export const Head = ({ location, data }) => {
    const frontmatter = data.markdownRemark.frontmatter;
    const formatted = prices(frontmatter);
    const discountedPrice = formatted.discountedPrice;

    // const pageTitle = frontmatter.dataItemName;
    // const metaTitle = `${pageTitle} | Delta 9 Gummies`;
    // const description = `${pageTitle} $29.99 Buy Hemp Derived Cotton Candy Delta 9 thc Edibles made from Hemp in the USA. Shop D9 thc near me.`;

    return (
        <>
            <Seo
                title={formatSeoTitle(frontmatter)}
                url={location.href}
                image={frontmatter.dataItemImage.publicURL}
                description={formatSeoDescription(frontmatter)}
                amount={discountedPrice}
            />
            <meta name="keywords" content="extended-distribution"></meta>
        </>
    );
};

export const query = graphql`
    query {
        markdownRemark(frontmatter: { cardName: { eq: "CottonCandyXD" } }) {
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
                productVideoSrc
                productVideoTitle
                yotpoProductId
                dataItemId
                dataItemUrl
                dataItemDescription
                dataItemName
                dataItemCategory
                descriptionTotalContent
                descriptionPotency
                descriptionCount
                reviewsProductId
                reviewsItemName
                seoTitle
                seoDescription 
            }
        }
    }
`;

export default CottonCandyXDPage;
