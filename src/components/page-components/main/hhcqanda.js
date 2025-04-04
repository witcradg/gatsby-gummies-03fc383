import React from 'react';
import { BasicAccordion } from '../../products/helpers/basic-accordion';

export const HhcQandA = ({ usCityState, title }) => {
	return (
		<div>
			<div
				className="faqs-related js-view-dom-id-d1e03f3f3dc0eb2f68d0877aeda0184fb2b163e9928e863bb4bc5e2913e933da"
				itemScope=""
				itemType="https://schema.org/FAQPage"
			>
				<div className="font-bold text-center text-2xl mt-6">{title}</div>
				<div className="views-row">
					<BasicAccordion>
						<div
							role="article"
							about="/node/1215"
							data-accordion=""
							data-allow-all-closed="true"
							itemScope=""
							itemProp="mainEntity"
							itemType="https://schema.org/Question"
						>
							<div className="font-bold cursor-pointer text-center mt-6" itemProp="name">
								Is HHC Federally Legal?
							</div>

							<div
								className="faq-list__item-answer"
								style={{ width: '70%', margin: '0 auto' }}
								data-tab-content=""
								itemScope=""
								itemProp="acceptedAnswer"
								itemType="https://schema.org/Answer"
							>
								<div itemProp="text">
									<p className="text-lg">
										HHC is a naturally occurring cannabinoid and derived from hemp is legalized
										in the 2018 Farm Bill, as such it is
										<b>&nbsp;not prohibited under federal law</b>. But almost all HHC products
										on the market are processed and are not directly extracted.
									</p>
								</div>
							</div>
						</div>
					</BasicAccordion>
				</div>
				<div className="views-row">
					<BasicAccordion>
						<div
							role="article"
							about="/node/1284"
							data-accordion=""
							data-allow-all-closed="true"
							itemScope=""
							itemProp="mainEntity"
							itemType="https://schema.org/Question"
						>
							<div className="font-bold cursor-pointer text-center mt-6" itemProp="name">
								What Does HHC Make You Feel Like - Psycoactive or Psycotropic?
							</div>

							<div
								className="faq-list__item-answer"
								style={{ width: '70%', margin: '0 auto' }}
								data-tab-content=""
								itemScope=""
								itemProp="acceptedAnswer"
								itemType="https://schema.org/Answer"
							>
								<div itemProp="text">
									<p className="text-lg">
										Most will describe taking HHC as a
										<b>&nbsp;very pleasant and stoney experience</b>. It tends to bring a deep
										feeling of relaxation and peacefulness to its users. Some might even say it gives
										them a floating feeling, as if all of the weight has been taken off of them.
									</p>
								</div>
							</div>
						</div>
					</BasicAccordion>
				</div>
				<div className="views-row">
					<BasicAccordion>
						<div
							role="article"
							about="/node/1253"
							data-accordion=""
							data-allow-all-closed="true"
							itemScope=""
							itemProp="mainEntity"
							itemType="https://schema.org/Question"
						>
							<div className="font-bold cursor-pointer text-center mt-6" itemProp="name">
								Is HHC similar to Delta 8 or CBD?
							</div>
							<div
								className="faq-list__item-answer"
								style={{ width: '70%', margin: '0 auto' }}
								data-tab-content=""
								itemScope=""
								itemProp="acceptedAnswer"
								itemType="https://schema.org/Answer"
							>
								<div itemProp="text">
									<p className="text-lg">
										HHC is a <b>&nbsp;cannabis compound</b>, like Delta-9 (THC) and like
										cannabidiol (CBD). Delta-8 is a hemp-cannabis extract that contains some THC
										(tetrahydrocannabinol, a psychoactive compound), but not enough to legally be
										classified as marijuana.
									</p>
								</div>
							</div>
						</div>
					</BasicAccordion>
				</div>
				<div className="views-row">
					<BasicAccordion>
						<div
							role="article"
							about="/node/1111"
							data-accordion=""
							data-allow-all-closed="true"
							itemScope=""
							itemProp="mainEntity"
							itemType="https://schema.org/Question"
						>
							<div className="font-bold cursor-pointer text-center mt-6" itemProp="name">
								Is HHC Legal in {usCityState}?
							</div>

							<div
								className="faq-list__item-answer"
								style={{ width: '70%', margin: '0 auto' }}
								data-tab-content=""
								itemScope=""
								itemProp="acceptedAnswer"
								itemType="https://schema.org/Answer"
							>
								<div itemProp="text">
									<p className="text-lg">
                                        HHC, 
										<b>
											&nbsp;THC and CBD products are legal because
										</b>. 
                                        of the 2018 Farm Bill, as well as Texas House Bill 1325. You can have and use products that have less than .3 percent of THC
									</p>
								</div>
							</div>
						</div>
					</BasicAccordion>
				</div>
				<div className="views-row">
					<BasicAccordion>
						<div
							role="article"
							about="/node/1260"
							data-accordion=""
							data-allow-all-closed="true"
							itemScope=""
							itemProp="mainEntity"
							itemType="https://schema.org/Question"
						>
							<div className="font-bold cursor-pointer text-center mt-6" itemProp="name">
								Do I need a Cannabis Medical Card to Buy HHC in {usCityState}?
							</div>
							<div
								className="faq-list__item-answer"
								style={{ width: '70%', margin: '0 auto' }}
								data-tab-content=""
								itemScope=""
								itemProp="acceptedAnswer"
								itemType="https://schema.org/Answer"
							>
								<div itemProp="text">
									<p className="text-lg">
										Currently, HHC is legal in {usCityState}, and
										<b>
											&nbsp;you can buy HHC Gummies without a medical card as long as you're over 18 years
											old
										</b>. Moreover, you can find a great variety of HHC products, including
										oils, tinctures, capsules, edibles, vape cartridges, and more.
									</p>
								</div>
							</div>
						</div>
					</BasicAccordion>
				</div>
			</div>
		</div>
	);
};
