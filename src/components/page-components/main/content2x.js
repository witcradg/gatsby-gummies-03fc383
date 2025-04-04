import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const AboutUs = (videosrc) => {

  const legalvideo = (videosrc && videosrc.legalvideo) 
    ? videosrc.legalvideo 
    : "AU1SRcjxYEA"

const videourl = `https://www.youtube.com/embed/${legalvideo}`

  return (
    <div className="content2x-section-a items-center mt-14">
      <div className="content2x-element">
        <div className="iframe-container-16-9">
          <iframe
            className="responsive-iframe border-0"
            src={videourl}
            title="Delta-8 Gummies what do they do"
            allowFullScreen
          />
        </div>
      </div>
      <div className="content2x-element">
        <div className="fixwidth">
          <h4 className="content2x-section-title text-direction-a mt-1">
            About Us
          </h4>
          <div className="text-direction-a pb-2">
            <p className="content2x-p">
              Delta 8 GummiesOnline provides natural alternatives to help you
              live well and be well. We sell only the highest-quality CBD &amp;
              Delta 8 oils, edibles, creams, and more that offer real results
              for your health. We also strive to provide resources to help you
              make informed decisions about any products and supplements you
              use.
            </p>
            <p className="content2x-p">
              When Delta 8 Gummies Started, we decided we wanted to only serve
              the highest quality and have maintained a level of consistancy and
              potency that has been unmatched in the Hemp Industry. Our Delta 8
              Edibles have been placed against the so called “#1 Edible
              Companies” and crushed them in an landslide with their fading
              quality. But don’t take our word for it. Test it yourself.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const WholesaleForumulation = () => {
  return (
    <div className="content2x-section-b items-center">
      <div className="content2x-element">
        <StaticImage
          src="../../../images/content2x-wholesale.jpeg"
          alt="Card image"
        />
      </div>
      <div className="content2x-element">
        <div className="fixwidth">
          <h4 className="content2x-section-title text-direction-b mt-1">
            Wholesale Bulk Delta 8 &amp; Custom Formulation Services
          </h4>
          <div className="text-direction-b pb-2">
            <p className="content2x-p">
              Based in Miami, Florida, Delta 8 Gummies is a Global CBD solutions
              provider. We offer access to consistent quality bulk cannabinoid
              ingredients. Our extraction facility and lab located in Oregon
              produces a range of US grown and extracted oils. We make several
              premiere flagship oils that are always available through our
              website. We provide full panel third party testing on each product
              and trackable chain of custody.
            </p>
            <p className="content2x-p">
              Still looking for your perfect match? Our lab can provide custom
              cannabinoid formulations to meet your brand needs. Our sales team
              and experienced lab scientists can help you decide what ingredient
              is best for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const LabTesting = () => {
  return (
    <div className="content2x-section-a items-center">
      <div className="content2x-element">
        <StaticImage
          src="../../../images/content2x-lab-testing.jpg"
          alt="Card image"
        />
      </div>
      <div className="content2x-element">
        <div className="fixwidth">
          <h4 className="content2x-section-title text-direction-a mt-1">
            Lab Testing Disclaimer
          </h4>
          <div className="text-direction-a pb-2">
            <p className="content2x-p">
              All Lab Testing is done by 3rd party laboratories to ensure the
              quality, potency and authenticity of our products. Delta 8 Gummies
              is uniquely positioned to deliver superior and consistent results,
              provide unmatched customer service, and stay at the forefront of
              the consistently changing trends in technology and data security.
              Our primary focus is to ensure that only the safest and best
              products reach the hands of consumers.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const GummiesVsGummies = () => {
  return (
    <div className="content2x-section-b items-center">
      <div className="content2x-element">
        <StaticImage src="../../../images/Indoor-Grow.webp" alt="Card image" />
      </div>
      <div className="content2x-element">
        <div className="fixwidth">
          <h4 className="content2x-section-title text-direction-b mt-1">
            Delta 8 Gummies Vs. Delta 9 Gummies
          </h4>
          <div className="text-direction-b pb-2">
            <p className="content2x-p">
              The cannabis industry has grown immensely since its start and more
              people have become aware of what THC and CBD is. If you're an avid
              consumer, you probably know about Delta 9 THC, which is more
              commonly known as THC. But have you heard about Delta 8 THC?
            </p>
            <p className="content2x-p">
              While most people have heard about the main types of cannabinoids,
              such as THC and CBD, there is another upcoming compound in
              cannabis products, Delta 8 THC. Just like Cannabidiol (CBD) and
              Tetrahydrocannabinol (THC) it’s a cannabinoid, but what are the
              similarities and differences? Delta-8 THC Products can be found
              here.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export const Content2x = ({ legalvideo, partial = false }) => {
  return (
    <div>
      {AboutUs({legalvideo})}
      <WholesaleForumulation />
      {partial ? null : (
        <React.Fragment>
          <LabTesting />
          <GummiesVsGummies />
        </React.Fragment>
      )}
    </div>
  )
}

