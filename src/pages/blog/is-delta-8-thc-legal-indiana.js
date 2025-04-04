import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../../components/layout"
import featuredImage from "../../images/legal-indiana-delta-8.png"
import { IsDelta8THCLegalState } from "../../components/blog/is-delta-8-thc-legal-state"
import Seo from '../../components/new-seo';

export const Head = ({ location, data }) => {
    const image = location.origin + featuredImage
    const md = data.markdownRemark.frontmatter
    const postTitle = `Is Delta 8 THC Legal in ${md.statename} & Can I buy Delta 8 Gummies in ${md.statename}?`
    const title = `${postTitle} | Delta 8 Gummies`
    const description = `Is Delta 8 THC Legal in ${md.statename} & Can I buy Delta 8 Gummies in ${md.statename}?`
    
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

const IsDelta8THCLegalIndianaPage = ({ location, data }) => {
  const md = data.markdownRemark.frontmatter
  const postTitle = `Is Delta 8 THC Legal in ${md.statename} & Can I buy Delta 8 Gummies in ${md.statename}?`

  return (
    <Layout location={location}>
      <IsDelta8THCLegalState title={postTitle} data={data}>
        <h2>
          <strong>Delta 8 Laws in {md.statename}!</strong>
        </h2>
        <p>
          Following the federal enactment of the Farm Bill in 2018,
          {md.statename} passed Senate Bill 1020, a piece of state legislation
          removing all hemp derivatives, cannabinoids, terpenes, flavonoids, and
          all other compounds from its comprehensive Drug Abuse Prevention and
          Control Act.
        </p>
        <p>
        Is delta-8 THC legal in Indiana?
        </p>
        <p>
Under state and federal law, the purchase, use, and production of delta-8 THC is legal in Indiana.
</p>
        <p>
You can buy delta-8 online or in CBD dispensaries, smoke shops, and vape stores located all across the state.
</p>
        <p>
However, hemp flower and delta-8 flower are not legal in Indiana under state law.
</p>
        <p>
Hemp-derived CBD and delta-10 THC are also legal in Indiana. State and federal law allows you to travel into Indiana with delta-8 products.
</p>
        <p>
The future for delta-8’s legality in Indiana is unknown. The federal government seeks to verify its legal status across the US.
</p>
        <p>
18 states have already restricted or banned delta-8. Four more are currently reviewing its legality.
</p>
        <p>
<h3>Legislation surrounding delta-8 THC in Indiana</h3>
</p>
        <p>
In 2019, Indiana passed Senate Bill 516, a piece of legislation aligning state hemp laws with the federal 2018 Farm Bill and creating a legal regulatory framework for hemp cultivation and production within the state. The bill also legalized hemp-derived compounds such as delta-8 THC and delta-10 THC and removed them from the state’s list of controlled substances. 
        </p>
        <h2>
          <strong>
            What To Look For When Buying Delta-8 Gummies from A Recreational
            Cannabis Dispensary {md.statename}?
          </strong>
        </h2>
      </IsDelta8THCLegalState>
    </Layout>
  )
}

export const query = graphql`
  query {
    markdownRemark(frontmatter: { statename: { eq: "Indiana" } }) {
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

export default IsDelta8THCLegalIndianaPage
