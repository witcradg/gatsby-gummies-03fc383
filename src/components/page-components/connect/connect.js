import * as React from 'react';
import { Section } from '../main/section';
import { BlogProductsRow } from '../../blog/blog-products-row.js';
import { BlogRow } from '../main/blog-row';
import featuredImage from '../../../images/connect.png';
import image2 from '../../../images/blog-thumb-2.webp';
import { Link } from 'gatsby';

const imgAlt = 'the connect johnny mitchell';

export const Connect = ({ title }) => {

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
                            <h2>THE CONNECT</h2>
                            <p>
                                When reading reviews it is hard to know what you
                                are looking at. So many different products,
                                experiences and opinions.{' '}
                            </p>

                            <br />
                            <h2>
                                <strong>Sales from the connect podcast.</strong>
                            </h2>
                            <div>
                                <div className="iframe-container md:hidden">
                                    <iframe
                                        className="responsive-iframe border-0"
                                        src="https://www.youtube.com/embed/gcInoOShWw0"
                                        title="Sales from the connect podcast"
                                        allowFullScreen
                                    />
                                </div>
                                <iframe
									className="mr-4 md:block hidden border-0"
									width="560"
									height="345"
									align="center"
                                    src="https://www.youtube.com/embed/gcInoOShWw0"
									title="Sales from the connect podcast"
									allowFullScreen
								/>
                            </div>
                            <br />
                            <img
                                src={image2}
                                alt={imgAlt}
                                style={{ float: 'right', margin: '1rem' }}
                            />
                            <br />
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
