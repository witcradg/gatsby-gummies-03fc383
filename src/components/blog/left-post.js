import * as React from 'react';
import { Section } from '../page-components/main/section';
import { BlogProductsRow } from './blog-products-row';
import { BlogRow } from '../page-components/main/blog-row';
import image1 from '../../images/blog-thumb-1.webp';

export const LeftPost = ({ title, featuredImage, imgAlt }) => {
	return (
		<React.Fragment>
			<img className="w-full" src={featuredImage} alt={imgAlt} />
			<div className="m-8 mt-4 md:m-32 md:mt-8">
				<article className="blog-post" itemScope itemType="https://schema.org/Article">
					<header>
						<h1 className="text-3xl md:text-5xl" itemProp="headline">
							{title}
						</h1>
					</header>
					<section itemProp="articleBody">
						<p>
							The short answer to this question depends on who you are buying the gummies from. While
							Delta-8 should have enough of it to be beneficial, Delta 9 THC on the other hand, is
							considered a psychoactive compound, which is why the FDA mandates not having over 0.03% of
							Delta 9 THC in a product. That said, some manufacturers may skirt the law and have higher
							levels of THC, content that isn&#8217;t identified or certified by third-party labs.
						</p>
						<p>
							Here is a brief list of our organic hemp gummies/products and the amounts of Delta 8 THC in
							them. Note, that all our products have less than 0.03% Delta 9 THC. Furthermore, these have
							been tested by the finest labs and aren&#8217;t just approximates.
						</p>
						<p>• Gummie Bears &#8211; 25mg Delta 8 THC content</p>
						<p>• Sour worms – 50mg Delta 8 THC content</p>
						<p>• Peach rings – 100mg Delta 8 THC content</p>
						<p>• Apple rings – 100mg Delta 8 THC content</p>
						<p>• Watermelon rings – 100mg Delta 8 THC content</p>
						<p>• Vegan orange slices – 40mg Delta 8 THC content</p>
						<p>• Vegan sour squares – 28.5mg Delta 8 THC content</p>
						<p>• Banana pieces – 40mg Delta 8 THC content</p>
						<p>• Nerds pieces &#8211; 100mg Delta 8 THC content</p>
						<p>
							In other words, our products have the legal amount of Delta 9 THC in them while having
							enough Delta-8 THC to ensure that they are beneficial for anyone taking them for therapeutic
							purposes. Furthermore, these are free from toxic chemicals often a byproduct of insecticide
							use.
						</p>
						<br />
						<img src={image1} alt={imgAlt} style={{ float: 'right', margin: '1rem' }} />
						<br />
						<h2>
							<strong>How Much Delta-8 Should You Consume?</strong>
						</h2>
						<p>
							The Delta 8 THC industry is rapidly evolving, and there are many brands that have begun
							manufacturing and selling D8 products. There are also available in various formats, mainly
							catering to consumers of all types.
						</p>
						<p>
							Research conducted over the years has allowed us to better understand the mechanisms
							involved with terpenes, cannabinoids, and other cannabis plant derivatives. Delta 8 is now a
							major part of many products, including natural fruit flavors gummies, but also vape
							cartridges, capsules, tinctures, etc.
						</p>
						<p>
							That said, the question we often get asked is how much delta 8 should be consumed? Is there
							an unsafe level of delta 8? However, to answer this question, it is important to understand
							that there isn&#8217;t a perfect delta 8 THC dosage meant for everyone. Everybody is
							different, and what may probably work for you may not work for your friend. Also, what is
							defined as &#8220;satisfying results&#8221; may also vary.
						</p>
						<br />
						<h2>
							<strong>Is Delta 8 THC Dosage the Same As CBD Dosage?</strong>
						</h2>
						<div className="md:flex">
							<div className="w-full p-4">
								<div className="iframe-container">
									<iframe
										className="responsive-iframe border-0"
										src="https://youtube.com/embed/OkohgL3qL-Y"
										title="Gummie Bears Video"
										allowFullScreen
									/>
								</div>
							</div>
							<div>
								<p>
									While CBD and Delta 8 THC are both extracted from cannabis, the assumption is that
									CBD dosage and delta 8 THC dosages will be the same. While you can use the same
									dosage, the main question is, does it make sense to do it?
								</p>
								<p>
									While at present, there aren&#8217;t any studies that show a direct relation between
									consuming Delta 8 THC and toxicity levels in humans, generally, the standard used by
									CBD may not apply to THC. While Delta 8 THC can be subtly intoxicating for many
									people, changing their sensory perception brought on by the so-called
									&#8220;high,&#8221; leading to cognitive impairment, CBD isn&#8217;t intoxicating,
									even in the least bit.
								</p>
								<p>
									The effects produced by delta 8 effects the body differently compared to delta 9,
									for instance. That&#8217;s why the action on the brain is very different. So, while
									Delta 8 in enough quantities can get you high, it isn&#8217;t half as strong as
									Delta 9, though users report that psychoactive buzz. So, you shouldn&#8217;t assume
									that using both products will bring about the same effects.
								</p>
								<p>
									If you are highly sensitive to delta 9 THC, start out using a low dose and gradually
									raise it. That way, you can find what approach offers the most benefit minus any
									adverse effects.
								</p>
							</div>
						</div>
						<h2>
							<strong>Overdosing on Delta-8 THC – Is It Possible?</strong>
						</h2>
						<p>
							Generally speaking, cannabinoids aren&#8217;t proven or shown to interact with the brain
							stem responsible for respiratory functions, leading to death. However, for liver toxicity to
							be triggered, around 50 grams of pure THC would need to be injected. That&#8217;s not
							something that most people will do when using cannabis or related products. Nobody, in fact,
							injects weed.
						</p>
						<p>
							However, you can end up with more than enough delta 8 THC in your body, which may cause
							uncomfortable sensations. Though most people report deep relaxation and sedation, with
							others reporting dizziness and confusion, half of what users of Delta 9 THC may experience.
							The feeling of anxiety is also rare amongst delta 8 THC users.
						</p>
						<p>
							There may be some other side effects of cannabis use, such as red eyes, dry mouth, and
							munchies. Assessments of Delta 8 THC use at high doses found that it induces up to just 70%
							of the high caused by Delta 9 THC. Regular use of a gummy here and there, the most you can
							expect to feel is an elevation of mood and relief from pain, vomiting, and nausea.
						</p>
						<p>
							What you feel from consuming delta 8 THC will depend on the dosage. Lower doses will
							increase energy levels, though higher dosages will, for lack of a better word, couch lock
							you! That&#8217;s why the products you use should have the levels of D8 as stated, which is
							only possible via independent lab tests.
						</p>
						<h2>
							<strong>How Does Delta 8 THC Potency Work Based On Independent Lab Testing? </strong>
						</h2>
						<p>
							According to studies, there are two main factors to consider when choosing an optimal delta
							8 dosages. For starters is the product&#8217;s potency, and the second is the amount of D8
							per milligram.
						</p>
						<p>
							It is known that various companies producing Delta 8 provide it in varying strengths, and
							that&#8217;s included in various size products. Take delta 8 tinctures, for instance, which
							are sold in 30 ml bottles, but there are also 60 ml bottles. The same applies to vapes,
							gummies, and various other derivative-based products.
						</p>
						<p>
							The best way to determine the milligram requirement of active delta 8 THC in one serving is
							to divide the total milligram by the product&#8217;s size.
						</p>
						<p>
							For instance, if you have a 1000 mg delta 8 THC tincture in a 60 ml bottle, you divide 1000
							by 60, leaving you with 16.6 mg of delta 8 per 1ml. The quantity is enough to cause a
							moderate high, even in seasoned users. However, be very cautious if you have this tincture
							at home but have previously never consumed delta 8 THC.
						</p>
						<p>
							Our products usually, most of which are comprised of gummies, have a fixed dose of delta 8
							THC per serving. They are also made from 100% organic ingredients. We also don&#8217;t use
							artificial food coloring to ensure that these are the finest gummies. That means there is no
							measuring needed. You just need to consume the gummies you have to, to meet your dosage
							needs.
						</p>
						<h3>Delta 8 General Dosage Guideline Chart</h3>
						<p>
							• Basic Dosage Tier – People who have never taken Delta 8 will want to start with 5mg and
							work their way up to 15 mg per dose.
						</p>
						<p>
							• Secondary Tier – Usually people who have occasionally used Delta 8. Dosages can start at
							15 mg and go up to 45mg per serving.
						</p>
						<p>• Advanced tier – Daily delta 8 users. The dose can be anything up to 150mg per serving.</p>
						<p>
							It is important to outline that the chart above refers to delta 8 dosages of a tincture, but
							it applies across gummies and other products. Think of delta 8 THC as being half as strong
							as Delta 9 THC, which is why you are not going to be hit hard, and it is also why it is
							legal for sale as per federal law. That said, it isn&#8217;t something users should approach
							with a carefree attitude.
						</p>
						<p>
							There is such a thing as too much delta 8 THC, which is why the chart above is a good way to
							figure out your optimal dose. It is also meant to ensure that you don&#8217;t overdose on
							it.
						</p>
						<h3>Delta 8 THC Gummies &#8211; Sour Green Apple Candy Dosage</h3>
						<p>
							When consuming edible gummies imbued with delta 8 THC, the amount of THC in them will vary.
							The majority of gummies have between 10-40mg of delta 8 THC per gummy. Most people will
							consider 10mg a pretty good dose, especially if this is their first time-consuming THD.
							However, 40mg is a good dose for heavyweight or large people. Also, those with high
							tolerances will find that 40mg is a pretty good dose.
						</p>
						<p>
							On the other hand, our gummies have varying amounts of Delta 8 THC, depending on what you
							buy. Take, for instance, our Sour Worms, which have around 25mg of Delta 8 THC. Vegan Sour
							Squares have 40mg per gummy. We added a complete list of the amount of Delta 8 THC for some
							of our most popular gummies at the beginning of the article.
						</p>
						<p>
							We advise that you wait for up to 20 hours after taking a single gummy, giving it enough
							time to work on your body and for the effects of its consumption to surface. Once you feel
							comfortable taking that amount, you can up the dosage slightly by taking another.
						</p>
						<p>
							If you have never consumed delta 8 products we&#8217;d even advise that you start with half
							a gummy. Speaking of which our gummies are made from only natural ingredients, ensuring they
							are beneficial with the lowest probability of adverse effects if any.
						</p>
						<h2>
							<strong>Final Word About Delta 8 THC Consumption </strong>
						</h2>
						<p>
							We know that many people may find that determining the right delta 8 THC dosage challenging
							if this is their first time encountering the product. However, it is important to understand
							how they work in the body, and the bioavailability of various formats like gummies, and the
							duration of their effects.
						</p>
						<p>
							If you want the best dosage precision, then choose tinctures. But it is very easy to go
							wrong with tinctures too and overdose. However, if you want to feel that &#8220;high&#8221;
							sooner rather than later, vapes are the way to go since it injects THC directly into your
							bloodstream. But like all hemp products, we advise caution with every approach.
						</p>
						<p>
							Gummies happen to be the best choice for the majority of people mainly because of the
							consistency and ease at which anybody can get their dose of Delta 8 THC.
						</p>
						<p>
							The dosage patterns and calculations can be used as a guide to ensure that you get the most
							from your use of our THC gummies. That said, our customer service team is here to answer any
							questions you might have.
						</p>
					</section>
					<hr />
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
