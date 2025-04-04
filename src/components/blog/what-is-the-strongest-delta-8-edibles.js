import * as React from 'react';
import { Section } from '../page-components/main/section';
import { BlogProductsRow } from './blog-products-row';
import { BlogRow } from '../page-components/main/blog-row';
import image2 from '../../images/blog-thumb-2.webp';
import { Link } from 'gatsby';

export const WhatIsTheStrongestDelta8Edibles = ({ title, featuredImage, imgAlt }) => {
	return (
		<React.Fragment>
			<img src={featuredImage} alt={imgAlt} />
			<div className="m-8 mt-4 md:m-32 md:mt-8">
				<article className="blog-post" itemScope itemType="https://schema.org/Article">
					<header>
						<h1 className="text-3xl md:text-5xl" itemProp="headline">
							{title}
						</h1>
					</header>

					<section itemProp="articleBody">
						<div>
							<h1>What are the Strongest Delta 8 Edibles I can Buy</h1>
							<p>
                                In short, delta-8 THC gummies can give you a bit of a “high” or “euphoric” feeling, even though the experience is not going to be the same as it would be with delta-9 THC. The consensus among most users is that the euphoric feelings produced by delta-8 are much less intense, and much more enjoyable.
                            </p>
							<br />
							<img src={image2} alt={imgAlt} style={{ float: 'right', margin: '1rem' }} />
							<br />
							<h3>How do Delta 8 Gummies make you feel?</h3>
							<p>
                                Delta 8 THC in low doses is more energizing and uplifting, while it is more sedating and relaxing in higher amounts.
                            </p>
							<p>
                                 What the youtubers say: So yes, based on personal experience alone, I'd say that delta-8 gummies do get you high, and that the high is less intense than smoking joints
                            </p>
							<p>
								While new products are introduced almost every year, many by reputed cannabis stores, it
								is important to know what the site is selling and how it can affect you before consuming
								it.
							</p>
							<br />
							<h2>
								<strong>
									What To Look For When Buying Delta-8 Gummies from A Recreational Cannabis
									Dispensary?
								</strong>
							</h2>
							<div>
								<div className="iframe-container md:hidden  border-0">
									<iframe
										className="responsive-iframe border-0"
										src="https://www.youtube.com/embed/2c4b3VwxIeM"
										title="Where to Buy the Strongest Delta 8 Edible?"
										allowFullScreen
									/>
								</div>
								<iframe
									className="mr-4 md:block hidden border-0"
									width="560"
									height="345"
									align="center"
									src="https://www.youtube.com/embed/2c4b3VwxIeM"
									title="What is the Strongest Delta 8 Edibles"
									allowFullScreen
								/>
								
                            </div> 
						</div>
						</section>
						<section>
							<h2>
								People Also Ask
							</h2>
						<p>
						
					<Link to='/blog/can-u-buy-delta-8-gummies-online/'>Can u buy Delta 8 gummies online?</Link>
					</p><p>	
					<Link to='/blog/what-does-delta-8-gummies-do/'>What does Delta-8 Gummies Do?</Link>
					</p><p>	
						<Link to='/blog/can-delta-8-gummies-be-shipped/'>Can Delta 8 Gummies Be Shipped?</Link>
						</p><p>	
						<Link to='/blog/can-delta-8-gummies-get-you-high/'>Can Delta 8 gummies get you high?</Link>
						</p><p>	
						<Link to='/blog/do-delta-8-gummies-do-anything/'>Do Delta 8 Gummies Do Anything?</Link>
						</p><p>	
						<Link to='/blog/how-long-does-delta-8-gummies-high-last/'>How Long Does Delta 8 Gummies High Last?</Link>
						</p><p>	
						<Link to='/blog/how-long-does-it-take-to-feel-effects-of-delta-8-gummy/'>How long does it take to feel the effects of delta 8 gummy?</Link>
						</p><p>	
						<Link to='/blog/what-is-the-strongest-delta-8-edibles/'>What is the Strongest Delta 8 Edibles?</Link>
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
