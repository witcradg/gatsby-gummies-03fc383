import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { CardUnderset } from '../card-underset';
import swagImage2 from '../../images/2.png'
import swagImage3 from '../../images/3.png'
import swagImage4 from '../../images/4.png'
import swagImage5 from '../../images/5.png'
import swagImage6 from '../../images/6.png'
import swagImage7 from '../../images/7.png'

export const Swag = () => {
	return (
		<div className="most-edibles text-center my-5">
			<h1 className="my-5">SWAG</h1>
			<div className="container">
				<div className="row w-full">
					<div className="col-sm-4">
						<div className="card relative">
							<StaticImage
								className="card-img-top w-full"
								src="../../images/2.png"
								alt="Card image"
							/>
							<CardUnderset title="Delta 8 Sticker #2" price="9.99" originalPrice="14.99">
								<button
									className="snipcart-add-item btn btn-info"
									style={{ width: '90%' }}
									data-item-id="sticker-2"
									data-item-price="9.99"
									data-item-url="https://delta8gummies.com"
									data-item-description="Delta 8 Sticker"
									data-item-image={swagImage2}
									data-item-name="Delta 8 Sticker #2"
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
								src="../../images/3.png"
								alt="Card image"
							/>
							<CardUnderset title="Delta 8 Sticker #3" price="9.99" originalPrice="14.99">
								<button
									className="snipcart-add-item btn btn-info"
									style={{ width: '90%' }}
									data-item-id="sticker-3"
									data-item-price="9.99"
									data-item-url="https://delta8gummies.com"
									data-item-description="Delta 8 Sticker"
									data-item-image={swagImage3}
									data-item-name="Delta 8 Sticker #3"
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
								src="../../images/4.png"
								alt="Card image"
							/>
							<CardUnderset title="Delta 8 Sticker #4" price="9.99" originalPrice="14.99">
								<button
									className="snipcart-add-item btn btn-info"
									style={{ width: '90%' }}
									data-item-id="sticker-4"
									data-item-price="9.99"
									data-item-url="https://delta8gummies.com"
									data-item-description="Delta 8 Sticker"
									data-item-image={swagImage4}
									data-item-name="Delta 8 Sticker #4"
								>
									Buy Now
								</button>
							</CardUnderset>
						</div>
					</div>
				</div>
				<div className="row w-full">
					<div className="col-sm-4">
						<div className="card relative">
							<StaticImage
								className="card-img-top w-full"
								src="../../images/5.png"
								alt="Card image"
							/>
							<CardUnderset title="Delta 8 Cap #5" price="19.99" originalPrice="24.99">
								<button
									className="snipcart-add-item btn btn-info"
									style={{ width: '90%' }}
									data-item-id="cap-5"
									data-item-price="19.99"
									data-item-url="https://delta8gummies.com"
									data-item-description="Delta 8 Cap"
									data-item-image={swagImage5}
									data-item-name="Delta 8 Cap #5"
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
								src="../../images/6.png"
								alt="Card image"
							/>
							<CardUnderset title="Delta 8 Cap #6" price="19.99" originalPrice="24.99">
								<button
									className="snipcart-add-item btn btn-info"
									style={{ width: '90%' }}
									data-item-id="cap-6"
									data-item-price="19.99"
									data-item-url="https://delta8gummies.com"
									data-item-description="Delta 8 Cap"
									data-item-image={swagImage6}
									data-item-name="Delta 8 Cap #6"
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
								src="../../images/7.png"
								alt="Card image"
							/>
							<CardUnderset title="Delta 8 Cap #7" price="19.99" originalPrice="24.99">
								<button
									className="snipcart-add-item btn btn-info"
									style={{ width: '90%' }}
									data-item-id="cap-7"
									data-item-price="19.99"
									data-item-url="https://delta8gummies.com"
									data-item-description="Delta 8 Cap"
									data-item-image={swagImage7}
									data-item-name="Delta 8 Cap #7"
								>
									Buy Now
								</button>
							</CardUnderset>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
