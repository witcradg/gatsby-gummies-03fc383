import React from "react"
import { FollowUs } from "../follow-us"
import { Section } from "../page-components/main/section"

import { HhcBearsCaseCard } from "../product-cards/wholesale/hhc-bears-case-card"
import { HhcRingsCaseCard } from "../product-cards/wholesale/hhc-rings-case-card"
import { Content2x } from "../page-components/main/content2x"

export const HhcWholesale = () => {
  return (
    <React.Fragment>
      <div className="popular-product text-center mb-3">
        <h1 className="my-5">
          WHOLESALE HHC GUMMIES SHOP ONLINE Hexahydrocannabinol Wholesale
        </h1>
        <div className="popular-product text-center mb-12">
          <div className="container">
            <div className="row">
              <HhcBearsCaseCard />
              <HhcRingsCaseCard />
            </div>
          </div>
        </div>
        <Content2x partial={true} />
        <Section sectionTitle="HHC Gummies Bulk HHC Distillate">
          <div className="popular-product text-center mb-3">
            <p>
              Buy High Quality Bulk HHC Products from D8G. D8G is the top
              wholesale supplier, dealer + manufacturer for Hexahydrocannabinol,
              a hydrogenated derivative of tetrahydrocannabinol.
            </p>
          </div>
        </Section>
        <FollowUs />
      </div>
    </React.Fragment>
  )
}
