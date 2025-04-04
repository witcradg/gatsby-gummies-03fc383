import React from "react"
import { Hero } from "./hero"
// import { BlackFriday } from "../../collections/black-friday"
import { FollowUs } from "../../follow-us"
// import { VeganGummies } from "../../collections/vegan-gummies"
// import { GummieRings } from "../../collections/gummie-rings"
// import { HhcRow } from "../../page-components/main/hhc-row"
// import { GummiePouches } from "../../collections/gummie-pouches"
import { AgeGuard } from "./age-guard"
// import { ShopNow } from "./shop-now"
import { Reassurances } from "./reassurances"
import { OnFireTitle } from "../../products/helpers/on-fire-title"
import { QandA } from "./qanda"
import { CitiesList } from "./cities-list"
import { Content2x } from "./content2x"
import { Section } from "./section"
import { BlogRow } from "./blog-row"
// import { NerdClustersCard } from "../../product-cards/gummies/nerd-clusters-card"
// import { GummieBearsCard } from "../../product-cards/gummies/gummie-bears-card"
import { Buy2Get1Card } from "../../product-cards/sample-packs/buy2get1-card"
import { SourSquaresCard } from "../../product-cards/gummies/sour-squares-card"
// import { D9NerdsCard } from "../../product-cards/gummies/d9-nerds-card"
import { D9CubesCard } from "../../product-cards/gummies/d9-cubes-card"
import { D9NerdsPackCard } from "../../product-cards/gummies/d9-nerds-pack-card"
import { D9CubesPackCard } from "../../product-cards/gummies/d9-cubes-pack-card"
// import { CottonCandyCard } from "../../product-cards/gummies/cotton-candy-card"
import { PeachMangoCard } from "../../product-cards/gummies/peach-mango-card"
import { D9WatermelonCard } from "../../product-cards/gummies/d9-watermelon-card"
import { D9StrawberryCard } from "../../product-cards/gummies/d9-strawberry-card"
import { D9BlueberryCard } from "../../product-cards/gummies/d9-blueberry-card"
import { D9GreenAppleCard } from "../../product-cards/gummies/d9-green-apple-card"



export const MainTemplate = ({ frontmatter, cityState, isCity }) => {
  const mainPageTest = false //TODO

  let usState = cityState

  if (!usState) {
    usState =
      frontmatter && frontmatter.statename ? frontmatter.statename : null
  }

  const legalvideo =
    frontmatter && frontmatter.legalvideo ? frontmatter.legalvideo : null

  const conditionalQandA = () => {
    if (isCity || mainPageTest) {
      return <QandA title={"Common Delta 8 Questions"} usCityState={usState} />
    }
  }

  let title = "THE ORIGINAL DELTA 8 GUMMIES"

  return (
    <React.Fragment>
      <AgeGuard />
      <Hero usState={usState} />
      <div className="popular-product text-center my-8">
        {usState && <h1 className="block-title uppercase pb-4">Delta 8 {usState}</h1>}
        <h1 className="block-title uppercase">{title}</h1>
      </div>
      {/* <VeganGummies /> */}
      {/* <ShopNow /> */}
      <OnFireTitle />
      {/*   <OriginalGummies /> */}
      <div className="popular-product text-center mb-3">
        <div className="container">
          <div className="row">
            <SourSquaresCard />
            <D9CubesCard />
            {/* <D9NerdsCard /> */}
            <Buy2Get1Card />
          </div>
        </div>
      </div>
      <div className="popular-product text-center mb-3">
        <div className="container">
          <div className="row">
            <D9WatermelonCard />
            <D9GreenAppleCard />
            <D9StrawberryCard />
          </div>
        </div>
      </div>
      <div className="popular-product text-center mb-3">
        <div className="container">
          <div className="row">
            <D9CubesPackCard />
            <D9NerdsPackCard />
            <PeachMangoCard />
          </div>
        </div>
      </div>

      {/* <GummieRings /> */}
      {/* <Section sectionTitle="HHC Gummie Edibles - 25mg, 100mg, 1000mg">
        <HhcRow />
      </Section>
      <GummiePouches title="200MG DELTA 8 POUCHES"/> */}
      <Reassurances usState={usState} />
      {/* <BlackFriday /> */}
      {conditionalQandA()}
      <Content2x legalvideo={legalvideo} />
      <FollowUs />
      <Section sectionTitle="Blog Posts">
        <BlogRow frontmatter={frontmatter} />
      </Section>
      {usState ? <CitiesList usState={usState} /> : null}
    </React.Fragment>
  )
}
