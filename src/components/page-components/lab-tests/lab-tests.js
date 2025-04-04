import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FollowUs } from "../../follow-us/follow-us"
import { OriginalSamplePacks } from "../../collections/original-sample-packs"

export const LabTests = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { eq: "pdf" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `)

  return (
    <React.Fragment>
      <div className="popular-product text-center">
        <h1>LAB TESTS</h1>
      </div>
      {data.allFile.edges.map((edge, index) => {
        return (
          <div key={index} className="m-auto w-5/6 p-8">
            <h1>{edge.node.name}</h1>
            <embed
              type="application/pdf"
              src={edge.node.publicURL}
              width="1000"
              height="800"
            ></embed>
          </div>
        )
      })}
      <OriginalSamplePacks />
      <FollowUs />
    </React.Fragment>
  )
}
