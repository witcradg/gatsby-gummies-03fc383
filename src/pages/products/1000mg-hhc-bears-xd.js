import * as React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../../components/layout';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import { HHCBearsXD } from '../../components/products/extended-distribution/hhcbears-xd';
import Seo from '../../components/new-seo';
import { prices, formatSeoTitle, formatSeoDescription } from "/src/components/global"

const HHCBearsXdPage = ({
    pageContext: {
        breadcrumb: { crumbs }
    },
    location,
    data
}) => {
    const frontmatter = data.markdownRemark.frontmatter;

    crumbs[1].pathname = frontmatter.crumbsPath;
    crumbs[1].crumbLabel = frontmatter.crumbsLabel;
    location.distribution = 'limited';

    return (
        <Layout location={location}>
            <Breadcrumb
                crumbs={crumbs}
                crumbSeparator=" / "
                crumbLabel={frontmatter.dataItemName}
            />
            <HHCBearsXD productData={data} />
        </Layout>
    );
};

export const Head = ({ location, data }) => {
    const frontmatter = data.markdownRemark.frontmatter;
    const formatted = prices(frontmatter);
    const discountedPrice = formatted.discountedPrice;

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
        markdownRemark(frontmatter: { cardName: { eq: "HHCBearsXD" } }) {
            frontmatter {
                title
                crumbsPath
                crumbsLabel
                discountedPrice
                originalPrice
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
                reviewsProductId
                reviewsItemName
                seoTitle
                seoDescription 
            }
        }
    }
`;

export default HHCBearsXdPage;
