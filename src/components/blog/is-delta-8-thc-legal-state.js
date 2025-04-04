import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Section } from "../page-components/main/section"
import { BlogProductsRow } from "./blog-products-row"
import { Link } from "gatsby"
import { HhcXdRow } from "../page-components/main/hhc-xd-row"

const imgAlt = "most popular product"

export const IsDelta8THCLegalState = ({ children, title, data, answer } ) => {
  const md = data.markdownRemark.frontmatter
  const videoTitle = `Is Delta-8 Legal In ${md.statename}`
  const videoSrc = `https://www.youtube.com/embed/${md.legalvideo}`
  const statePageUrl = `https://delta8gummies.com${md.slug}/`

  const featuredImage = getImage(md.featuredImage)
  const image2 = getImage(md.image2)
  const staticImage = image2 ? null : md.image2.publicURL

  return (
    <React.Fragment>
      <GatsbyImage image={featuredImage} alt={imgAlt} />

      <div className="m-8 mt-4 md:m-32 md:mt-8">
        <article
          className="blog-post"
          itemScope
          itemType="https://schema.org/Article"
        >
          <header>
            <h1 className="text-3xl md:text-5xl" itemProp="headline">
              {title}
            </h1>
          </header>

          <section itemProp="articleBody">
            <div>
            {answer 
                ? (<p>{answer}</p>) 
                : (
                <p>
                  YES!!!! Delta-8 THC is 100% Legal in the state of
                  {md.statename}. You can buy Delta-8 anywhere in {md.statename}
                  . Gas Stations, Smoke Shops, Glass Shops & CBD Stores are the
                  most common places you can buy Delta-8 in {md.statename}. You
                  can also buy D8 Online and have it shipped to your house
                  from&nbsp;
                  <Link to={md.slug}>{statePageUrl}</Link>
                </p>
              )}
              <br />
              {image2 ? (
                <GatsbyImage
                  image={image2}
                  alt={imgAlt}
                  style={{ float: "right", margin: "1rem" }}
                />
              ) : (
                <img
                  src={staticImage}
                  alt={imgAlt}
                  style={{ float: "right", margin: "1rem" }}
                />
              )}
              <br />
              {children}
              <br />
              <div>
                <div className="iframe-container md:hidden">
                  <iframe
                    className="responsive-iframe border-0"
                    src={videoSrc}
                    title={videoTitle}
                    allowFullScreen
                  />
                </div>
                <iframe
                  className="mr-4 md:block hidden border-0"
                  width="560"
                  height="345"
                  align="center"
                  src={videoSrc}
                  title={videoTitle}
                  allowFullScreen
                />
              </div> 
            </div>
          </section>
          <section>
            <h2>Find Out if Delta 8 Is Legal In Your State</h2>
            <p>
              <Link to="/blog/is-delta-8-thc-legal-florida/">
                Is Delta 8 THC Legal in Florida?
              </Link>
            </p>
            <p>
              <Link to="/blog/is-delta-8-thc-legal-texas/">
                Is Delta 8 THC Legal in Texas?
              </Link>
            </p>
            <p>
              <Link to="/blog/is-delta-8-thc-legal-alabama/">
                Is Delta 8 THC Legal in Alabama?
              </Link>
            </p>
            <p>
              <Link to="/blog/is-delta-8-thc-legal-new-jersey/">
                Is Delta 8 THC Legal in New Jersey?
              </Link>
            </p>
            <p>
              <Link to="/blog/is-delta-8-thc-legal-louisiana/">
                Is Delta 8 THC Legal in Louisiana?
              </Link>
            </p>
            <p>
              <Link to="/blog/is-delta-8-thc-legal-arkansas/">
                Is Delta 8 THC Legal in Arkansas?
              </Link>
            </p>
            <p>
              <Link to="/blog/is-delta-8-thc-legal-north-carolina/">
                Is Delta 8 THC Legal in North Carolina?
              </Link>
            </p>
            <p>
              <Link to="/blog/is-delta-8-thc-legal-tennessee/">
                Is Delta 8 THC Legal in Tennessee?
              </Link>
            </p>
          </section>

          <hr />

          <footer />
        </article>
      </div>
      <Section sectionTitle="PRODUCTS">
        {
            md.distribution === 'standard' 
            ? <BlogProductsRow />
            : <HhcXdRow />
        }|
      </Section>
    </React.Fragment>
  )
}
