import React from "react"
import { BlogPostCard } from "./blog-post-card"
import image1 from "../../../images/blog-thumb-1.webp"
import image2 from "../../../images/can-delta-8-gummies-be-shipped-usa.webp"
import image3 from "../../../images/delta-8-gummies-review.webp"

export const BlogRow = ({ frontmatter }) => {
  
  let stateName = frontmatter && frontmatter.statename ? frontmatter.statename : null
  let title = null  
  let excerpt = null
  let slug = null
  let uri = null
 
  if (stateName) {
    excerpt = `<p>Find out if Delta 8 Is Legal in ${stateName}! Delta 8 was legalized federally in 2018 but some states have regulated Delta 8. Find what the StateName Delta 8 Laws are and if delta 8 is legal in ${stateName}.</p>`
    title = `Is Delta 8 Legal in ${stateName}`
    slug = (frontmatter && frontmatter.slug) ? `${frontmatter.slug}/` : null
    uri = (frontmatter && frontmatter.legal_slug) ? `${frontmatter.legal_slug}` : null
  }

  const nodes = [
    {
      node: {
        excerpt:
          "<p>The short answer to this question depends on who you are buying the gummies from. While Delta-8 should have enough of it to be beneficial, Delta 9 THC on the other hand, is considered a psychoactive compound, which is why the FDA mandates not having over 0.03% of Delta 9 THC in a product. That &hellip;</p>",
        slug: "how-much-thc-is-in-delta-8-gummies",
        title: "How Much THC Is In Delta 8 Gummies?",
        uri: "/blog/how-much-thc-is-in-delta-8-gummies/",
      },
    },
    {
      node: {
        excerpt:
          "<p>Delta 8 Gummies Can Be Shipped to Every State in the US that has not banned Hemp Derived Delta-8 THC or other similar compounds. At D8G, we ship Delta 8 gummies diretly to your door in discreete packaging, tracking and required signature. Checkout our comprehensive list of legal-to-ship delta-8 states here!&hellip;</p>",
        slug: "can-delta-8-gummies-be-shipped",
        title: "Can Delta 8 Gummies Be Shipped?",
        uri: "/blog/can-delta-8-gummies-be-shipped/",
      },
    },
    {
      node: {
        excerpt:
          "<p>Delta 8 Gummies Reviews From Real Customers! THC Gumies Reviews by Trust Pilot. &hellip;</p>",
        slug: "reviews",
        title: "Delta 8 Gummies Reviews",
        uri: "/reviews/",
      },
    },
    {
      node: {
        excerpt: excerpt,
        slug: slug,
        title: title,
        uri: uri
      },
    },
  ]
  
  const post1 = nodes[0].node
  const post2 = nodes[1].node
  let post3 = nodes[2].node
  if (frontmatter && frontmatter.statename) {
    post3 = nodes[3].node
  }

  return (
    <React.Fragment>
      <BlogPostCard post={post1} image={image1} imgAlt="gummy jars" />
      <BlogPostCard
        post={post2}
        image={image2}
        imgAlt="Cannabis Store Products"
      />
      <BlogPostCard post={post3} image={image3} imgAlt="gummies" />
    </React.Fragment>
  )
}
