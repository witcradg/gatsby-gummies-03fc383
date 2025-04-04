import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { FollowUs } from '../../follow-us';
import { CardUnderset } from '../../card-underset';
import bannerImage7 from '../../../images/gummie-bears-jar.png'

export const Contact = () => {
	return (
		<React.Fragment>
			<div className="popular-product text-center mb-3">
				<h1>Contact</h1>
				<div className="container">
					<div className="row">
						<div className="col-sm-6 col-md-4 col-12-440width  pro-item">
							<div className="card">
								<StaticImage src="../../../images/gummie-bears-jar.png" alt="Card image" />
								<CardUnderset
									title="48 Units Of 1000MG Delta 8 Gummies $30 Each"
									price="840.00"
									originalPrice="1749.75"
								>
									<button
										className="snipcart-add-item btn btn-info"
										style={{ width: '90%' }}
										data-item-id="24 UNITS"
										data-item-price="840.00"
										data-item-url="https://delta8gummies.com"
										data-item-description="24 Units Of 1000MG Delta 8 Gummies"
										data-item-image={bannerImage7}
										data-item-name="24 UNITS/1 CASE $35 Each"
									>
										ADD TO CART
									</button>
								</CardUnderset>
							</div>
						</div>
						<div className="col-sm-6 col-md-4 col-12-440width  pro-item">
							<div className="card">
								<StaticImage src="../../../images/gummie-bears-jar.png" alt="Card image" />
								<CardUnderset
									title="48 Units Of 1000MG Delta 8 Gummies $30 Each"
									price="1440.00"
									originalPrice="3359.52"
								>
									<button
										className="snipcart-add-item btn btn-info"
										style={{ width: '90%' }}
										data-item-id="48 UNITS"
										data-item-price="1440.00"
										data-item-url="https://delta8gummies.com"
										data-item-description="48 UNITS OF 1000MG Delta 8 Gummies"
										data-item-image={bannerImage7}
										data-item-name="48 UNITS/1 CASE $30 Each"
									>
										ADD TO CART
									</button>
								</CardUnderset>
							</div>
						</div>
						<div className="col-sm-6 col-md-4 col-12-440width  pro-item">
							<div className="card">
								<StaticImage src="../../../images/gummie-bears-jar.png" alt="Card image" />
								<CardUnderset
									title="72 Units Of 1000MG Delta 8 Gummies $25 Each"
									price="1800.00"
									originalPrice="5039.28"
									image="banner7"
								>
									<button
										className="snipcart-add-item btn btn-info"
										style={{ width: '90%' }}
										data-item-id="72 UNITS"
										data-item-price="1800.00"
										data-item-url="https://delta8gummies.com"
										data-item-description="72 UNITS OF 1000MG Delta 8 Gummies"
										data-item-image={bannerImage7}
										data-item-name="72 UNITS/1 CASE $25 Each"
									>
										ADD TO CART
									</button>
								</CardUnderset>
							</div>
						</div>
					</div>
				</div>
			</div>
			<FollowUs />
		</React.Fragment>
	);
};
