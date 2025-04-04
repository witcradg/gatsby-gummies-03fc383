import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../../components/layout"
import featuredImage from "../../images/legal-montana-delta-8.png"
import { IsDelta8THCLegalState } from "../../components/blog/is-delta-8-thc-legal-state"
import Seo from '../../components/new-seo';

export const Head = ({ location, data }) => {
    const image = location.origin + featuredImage
    const md = data.markdownRemark.frontmatter
    const postTitle = `Is Delta 8 THC Legal in ${md.statename} & Can I buy Delta 8 Gummies in ${md.statename}?`
    const title = `${postTitle} | Delta 8 Gummies`
    const description = postTitle
  
    return (
        <>
            <Seo
                type="page"
                title={title}
                description={description}
                image={image}
                url={location.href}
            />
            <meta name="keywords" content="extended-distribution"></meta>;
        </>
    );
};

const IsDelta8THCLegalMontanaPage = ({ location, data }) => {
  const md = data.markdownRemark.frontmatter
  const postTitle = `Is Delta 8 THC Legal in ${md.statename} & Can I buy Delta 8 Gummies in ${md.statename}?`
  const Answer = `NO, Delta-8 THC is currently illegal in the state of ${md.statename}. ${md.statename} has specific state laws that prohibit the sale of Delta-8 in every day stores. If you are looking for a product that is legal in ${md.statename} that has similar results as Delta 8 try HHC.`

  return (
    <Layout location={location}>
      <IsDelta8THCLegalState title={postTitle} data={data} answer={Answer}>
        <h3>
          What else can I buy in {md.statename} that is similar to Delta 8?
        </h3>
        <p>
          If you are in a state where Delta 8 is illegal and you are looking for
          an alternative you can still purchase from us but you would need to
          purchase our HHC product. Visit your state page and purchase there(
          delta8gummies.com/locations/{md.statename}/ ) and you will be able to
          checkout. If you try to purchase from any other page on the website it
          will not work!
        </p>
        <p>
          What the youtubers say: So yes, based on personal experience alone,
          I'd say that delta-8 gummies do get you high, and that the high is
          less intense than smoking joints
        </p>
        <p>
          While new products are introduced almost every year, many by reputed
          cannabis stores, it is important to know what the site is selling and
          how it can affect you before consuming it.
        </p>
        <br />
        <h2>
          <strong>
            What To Look For When Buying Delta-8 Gummies in {md.statename}
          </strong>
        </h2>
      </IsDelta8THCLegalState>
    </Layout>
  )
}

export const query = graphql`
  query {
    markdownRemark(frontmatter: { statename: { eq: "Montana" } }) {
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
export default IsDelta8THCLegalMontanaPage
