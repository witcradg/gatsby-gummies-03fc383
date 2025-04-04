import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { CardUnderset } from '../card-underset';
import bannerImage7 from '../../images/gummie-bears-jar.png'
import bannerImage8 from '../../images/sour-worms-jar.png'
import bannerImage9 from '../../images/peach-rings-jar.png'

export const WholesaleCbd = () => {
	return (
		<React.Fragment>
			<div className="most-edibles text-center my-5">
				<h1 className="my-5">WHOLESALE CBD PRODUCTS</h1>
				<div className="container">
					<div className="row w-full">
						<div className="col-sm-4">
							<div className="card relative">
								<StaticImage
									className="card-img-top w-full"
									src="../../images/gummie-bears-jar.png"
									alt="Card image"
								/>
								<CardUnderset
									title="125MG CBD Gummie Bears 24 Units/1 Case $15 Each"
									price="360.00"
									originalPrice="720.00"
								>
									<button
										className="snipcart-add-item btn btn-info"
										style={{ width: '90%' }}
										data-item-id="125MG CBD Gummie Bears"
										data-item-price="360.00"
										data-item-url="https://delta8gummies.com"
										data-item-description="24 Units Of CBD Gummie Bears"
										data-item-image={bannerImage7}
										data-item-name="125MG CBD Gummie Bears 24 Units/1 Case $15 Each"
									>
										Buy Now
									</button>
								</CardUnderset>
							</div>
						</div>
						<div className="col-sm-4">
							<div className="card relative">
								<StaticImage
									className="card-img-top w-full"
									src="../../images/sour-worms-jar.png"
									alt="Card image"
								/>
								<CardUnderset
									title="125MG CBD Gummie Apple 24 Units/1 Case $15 Each"
									price="360.00"
									originalPrice="720.00"
								>
									<button
										className="snipcart-add-item btn btn-info"
										style={{ width: '90%' }}
										data-item-id="125MG CBD GUMMIE apple"
										data-item-price="360.00"
										data-item-url="https://delta8gummies.com"
										data-item-description="24 Units Of CBD GUMMIE apple"
										data-item-image={bannerImage8}
										data-item-name="125MG CBD GUMMIE apple 24 Units/1 Case $15 Each"
									>
										Buy Now
									</button>
								</CardUnderset>
							</div>
						</div>
						<div className="col-sm-4">
							<div className="card relative">
								<StaticImage
									className="card-img-top w-full"
									src="../../images/peach-rings-jar.png"
									alt="Card image"
								/>
								<CardUnderset
									title="125MG CBD Gummie Peach Rings 24 Units/1 Case $15 Each"
									price="360.00"
									originalPrice="720.00"
								>
									<button
										className="snipcart-add-item btn btn-info"
										style={{ width: '90%' }}
										data-item-id="125MG CBD PEACH RINGS"
										data-item-price="360.00"
										data-item-url="https://delta8gummies.com"
										data-item-description="24 Units Of CBD PEACH RINGS"
										data-item-image={bannerImage9}
										data-item-name="125MG CBD GUMMIE PEACH RINGS 24 Units/1 Case $15 Each"
									>
										Buy Now
									</button>
								</CardUnderset>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row w-full">
					<div className="col-sm-4">
						<div className="card relative">
							<StaticImage
								className="card-img-top w-full"
								src="../../images/gummie-bears-jar.png"
								alt="Card image"
							/>
							<CardUnderset
								title="250MG CBD Gummie Bears 24 Units/1 Case $19.99 Each"
								price="479.76"
								originalPrice="959.52"
							>
								<button
									className="snipcart-add-item btn btn-info"
									style={{ width: '90%' }}
									data-item-id="250MG CBD Gummie Bears"
									data-item-price="479.76"
									data-item-url="https://delta8gummies.com"
									data-item-description="24 Units Of 250MG CBD Gummie Bears"
									data-item-image={bannerImage7}
									data-item-name="250MG CBD Gummie Bears 24 Units/1 Case $19.99 Each"
								>
									Buy Now
								</button>
							</CardUnderset>
						</div>
					</div>
					<div className="col-sm-4">
						<div className="card relative">
							<StaticImage
								className="card-img-top w-full"
								src="../../images/sour-worms-jar.png"
								alt="Card image"
							/>
							<CardUnderset
								title="250MG CBD Gummie Apple 24 Units/1 Case $19.99 Each"
								price="479.76"
								originalPrice="959.52"
							>
								<button
									className="snipcart-add-item btn btn-info"
									style={{ width: '90%' }}
									data-item-id="250MG CBD GUMMIE apple"
									data-item-price="479.76"
									data-item-url="https://delta8gummies.com"
									data-item-description="24 Units Of 250MG CBD GUMMIE apple"
									data-item-image={bannerImage8}
									data-item-name="250MG CBD GUMMIE apple 24 Units/1 Case $19.99 Each"
								>
									Buy Now
								</button>
							</CardUnderset>
						</div>
					</div>
					<div className="col-sm-4">
						<div className="card relative">
							<StaticImage
								className="card-img-top w-full"
								src="../../images/peach-rings-jar.png"
								alt="Card image"
							/>
							<CardUnderset
								title="250MG CBD Gummie Peach Rings 24 Units/1 Case $19.99 Each"
								price="479.76"
								originalPrice="959.52"
							>
								<button
									className="snipcart-add-item btn btn-info"
									style={{ width: '90%' }}
									data-item-id="250MG CBD PEACH RINGS"
									data-item-price="479.76"
									data-item-url="https://delta8gummies.com"
									data-item-description="24 Units Of 250MG CBD PEACH RINGS"
									data-item-image={bannerImage9}
									data-item-name="250MG CBD GUMMIE PEACH RINGS 24 Units/1 Case $19.99 Each"
								>
									Buy Now
								</button>
							</CardUnderset>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};
