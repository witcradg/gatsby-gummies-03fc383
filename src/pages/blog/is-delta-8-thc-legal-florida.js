import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../../components/layout"
import featuredImage from "../../images/blog-post-most-popular.png"
import { IsDelta8THCLegalState } from "../../components/blog/is-delta-8-thc-legal-state"
import Seo from '../../components/new-seo';

export const Head = ({ location, data }) => {
    const image = location.origin + featuredImage
    const md = data.markdownRemark.frontmatter
    const postTitle = `Is Delta 8 THC Legal in ${md.statename} & Can I buy Delta 8 Gummies in ${md.statename}?`
    const title = `${postTitle} | Delta 8 Gummies`
    const description = postTitle

    return (
        <Seo
            type="page"
            title={title}
            description={description}
            image={image}
            url={location.href}
        />
    );
};
const IsDelta8THCLegalFloridaPage = ({ location, data }) => {
  const md = data.markdownRemark.frontmatter
  const postTitle = `Is Delta 8 THC Legal in ${md.statename} & Can I buy Delta 8 Gummies in ${md.statename}?`

  return (
    <Layout location={location}>

      <IsDelta8THCLegalState title={postTitle} data={data}>
        <section itemProp="articleBody">
          <div>
            <h3>
              Do I have to Have a Florida Medical Card or Cannabis License to
              Buy Delta 8 THC?
            </h3>
            <p>
              Since Delta 8 is 100% legal you do not have to have a medical card
              to buy Delta 8. Delta 8 however, will not be sold in places like
              MÜV, MedMen, Trulieve or there Recreational Dispensaries in FL.
            </p>
            <p>
              You will however find Delta 8 Gummies for sale in just about every
              single smoke shop, vape shop, head shop or even bodega around
              florida. From Miami to Jacksonville and back.{" "}
            </p>
            <p>
              What the youtubers say: So yes, based on personal experience
              alone, I'd say that delta-8 gummies do get you high, and that the
              high is less intense than smoking joints
            </p>
            <p>
              While new products are introduced almost every year, many by
              reputed cannabis stores, it is important to know what the site is
              selling and how it can affect you before consuming it.
            </p>
            <br />
            <h2>
              <strong>Delta 8 Laws in Florida!</strong>
            </h2>
            <p>
              Following the federal enactment of the Farm Bill in 2018, Florida
              passed Senate Bill 1020, a piece of state legislation removing all
              hemp derivatives, cannabinoids, terpenes, flavonoids, and all
              other compounds from its comprehensive Drug Abuse Prevention and
              Control Act.
            </p>
            <p>
              This means hemp-derived delta-8 THC is legal under state law,
              which coincides with federal law.
            </p>
          </div>
        </section>
      </IsDelta8THCLegalState>
    </Layout>
  )
}

export const query = graphql`
  query {
    markdownRemark(frontmatter: { statename: { eq: "Florida" } }) {
      frontmatter {
        slug
        statename
        distribution
        legalvideo
        featuredImage {
          childImageSharp {
            gatsbyImageData
          }
          publicURL
        }

        image2 {
          childImageSharp {
            gatsbyImageData
          }
          publicURL
        }
      }
    }
  }
`

export default IsDelta8THCLegalFloridaPage
