import * as React from 'react';
import { Section } from '../page-components/main/section';
import { BlogProductsRow } from './blog-products-row';
import { BlogRow } from '../page-components/main/blog-row';
import image2 from '../../images/blog-thumb-2.webp';
import { Link } from 'gatsby';

export const CanDelta8GummiesBeShipped = ({ title, featuredImage, imgAlt }) => {
    return (
        <React.Fragment>
            <img src={featuredImage} alt={imgAlt} />
            <div className="m-8 mt-4 md:m-32 md:mt-8">
                <article
                    className="blog-post"
                    itemScope
                    itemType="https://schema.org/Article"
                >
                    <header>
                        <h1
                            className="text-3xl md:text-5xl"
                            itemProp="headline"
                        >
                            {title}
                        </h1>
                    </header>
                    <section itemProp="articleBody">
                        <div>
                            <p>
                                One of the most confusing questions regarding
                                Delta-8 Gummies is can it be shipped and to
                                where.
                            </p>
                            <p>
                                We have put together a comprehensive list of
                                States that will allow you to ship your delta 8
                                edible products.
                            </p>
                            <p>
                                List to state pages:
                                https://delta8gummies.com/locations/
                            </p>
                            <p>
                                You might have also heard about the usps
                                stopping shipment of all vape products. The Vape
                                Ban was a big deal in 2021. This is completely
                                unrelated since we do not sell delta 8 vape
                                products.
                            </p>
                            <p>
                                If you do purchase delta 8 gummies from us
                                online and get them shipped. Your order is
                                shipped with tracking and a signature through
                                ups ground. Your discreet shipment will arrive
                                in 3-5 business days plus any shipping and
                                handling time.
                            </p>
                            <p>
                                In short, delta-8 THC gummies can give you a bit
                                of a “high” or “euphoric” feeling, even though
                                the experience is not going to be the same as it
                                would be with delta-9 THC. The consensus among
                                most users is that the euphoric feelings
                                produced by delta-8 are much less intense, and
                                much more enjoyable.
                            </p>
                            <br />
                            <img
                                src={image2}
                                alt={imgAlt}
                                style={{ float: 'right', margin: '1rem' }}
                            />
                            <br />
                            <h3>How do Delta 8 Gummies make you feel?</h3>
                            <p>
                                Delta 8 THC in low doses is more energizing and
                                uplifting, while it is more sedating and
                                relaxing in higher amounts.
                            </p>
                            <p>
                                What the youtubers say: So yes, based on
                                personal experience alone, I'd say that delta-8
                                gummies do get you high, and that the high is
                                less intense than smoking joints
                            </p>
                            <p>
                                While new products are introduced almost every
                                year, many by reputed cannabis stores, it is
                                important to know what the site is selling and
                                how it can affect you before consuming it.
                            </p>
                            <br />
                            <h2>
                                <strong>
                                    Can Delta-8 Gummies Be Shipped by USPS, UPS
                                    or Other Mail Services
                                </strong>
                            </h2>
                            <div>
                                <div className="iframe-container md:hidden">
                                    <iframe
                                        className="responsive-iframe border-0"
                                        src="https://www.youtube.com/embed/xjpgIenBAFY"
                                        title="Can Delta-8 Gummeis Be Shipped To My Home?"
                                        allowFullScreen
                                    />
                                </div>
                                <iframe
                                    className="mr-4 md:block hidden border-0"
                                    width="560"
                                    height="345"
                                    align="center"
                                    src="https://www.youtube.com/embed/xjpgIenBAFY"
                                    title="Can Delta 8 Edibles Get You High?"
                                    allowFullScreen
                                />
                            </div>
                            <div>
                                <h2>
                                    List of States We Might Ship Delta 8 Gummies
                                    To
                                </h2>
                                <p>
                                    Alabama, Alaska, Arizona, Arkansas,
                                    California, Colorado, Connecticut, Delaware,
                                    Florida, Georgia, Hawaii, Idaho, Illinois,
                                    Indiana, Iowa, Kansas, Kentucky, Louisiana,
                                    Maine, Maryland, Massachusetts, Michigan,
                                    Minnesota, Mississippi, Missouri, Montana,
                                    Nebraska, Nevada, New Hampshire, New Jersey,
                                    New Mexico, New York, North Carolina, North
                                    Dakota, Ohio, Oklahoma, Oregon,
                                    Pennsylvania, Rhode Island, South Carolina,
                                    South Dakota, Tennessee, Texas, Utah,
                                    Vermont, Virginia, Washington, West
                                    Virginia, Wisconsin, Wyoming,
                                </p>
                                <h3>
                                    How Does Delta 8 Gummies Track Shipments?
                                </h3>
                                <p>
                                    At Delta 8 Gummies we have a system that
                                    allows us to track your shipment from the
                                    second you order it to the minute it gets to
                                    your door. The great thing about this
                                    shipping system is that you, as the customer
                                    will get an email every step of the way.
                                    These are the emails you get during your
                                    delta 8 shipment process. The great thing
                                    is, all of this shipment tracking can be
                                    seen from our aftership page and also via
                                    your order tracking link. Make sure you
                                    white list info@delta8gummies.com and
                                    favorite it so you receive all of your
                                    tracking emails and they never end up in
                                    junk or e-mail spam.
                                </p>
                                <ol>
                                    <li>
                                        Email Notification When Your Label is
                                        Printed
                                    </li>
                                    <li>
                                        Email Notification when your Order has
                                        been picked up by UPS, USPS or FEDEX
                                    </li>
                                    <li>
                                        Email Notification when your order is
                                        loaded for delivery
                                    </li>
                                    <li>
                                        Email notification when your order is
                                        delivered
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </section>
                    <section>
                        <h2>People Also Ask</h2>
                        <p>
                            <Link to="/blog/can-u-buy-delta-8-gummies-online/">
                                Can u buy Delta 8 gummies online?
                            </Link>
                        </p>
                        <p>
                            <Link to="/blog/what-does-delta-8-gummies-do/">
                                What does Delta-8 Gummies Do?
                            </Link>
                        </p>
                        <p>
                            <Link to="/blog/can-delta-8-gummies-be-shipped/">
                                Can Delta 8 Gummies Be Shipped?
                            </Link>
                        </p>
                        <p>
                            <Link to="/blog/can-delta-8-gummies-get-you-high/">
                                Can Delta 8 gummies get you high?
                            </Link>
                        </p>
                        <p>
                            <Link to="/blog/do-delta-8-gummies-do-anything/">
                                Do Delta 8 Gummies Do Anything?
                            </Link>
                        </p>
                        <p>
                            <Link to="/blog/how-long-does-delta-8-gummies-high-last/">
                                How Long Does Delta 8 Gummies High Last?
                            </Link>
                        </p>
                        <p>
                            <Link to="/blog/how-long-does-it-take-to-feel-effects-of-delta-8-gummy/">
                                How long does it take to feel the effects of
                                delta 8 gummy?
                            </Link>
                        </p>
                        <p>
                            <Link to="/blog/what-is-the-strongest-delta-8-edibles/">
                                What is the Strongest Delta 8 Edibles?
                            </Link>
                        </p>
                    </section>

                    <hr />

                    <footer />
                </article>
            </div>
            <Section sectionTitle="PRODUCTS">
                <BlogProductsRow />
            </Section>
            <Section sectionTitle="Blog Posts">
                <BlogRow />
            </Section>
        </React.Fragment>
    );
};
