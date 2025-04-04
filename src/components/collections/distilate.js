import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { CardUnderset } from '../card-underset';
import productImage from '../../images/distillate.jpg'

export const Distilate = () => {
	return (
		<div>
			<div className="container">
				<div className="most-edibles text-center my-5">
					<h1 className="my-5">DISTILLATE</h1>
					<div className="container">
						<div className="row w-full">
							<div className="col-sm-4">
								<div className="card relative">
									<StaticImage
										className="card-img-top w-full"
										src="../../images/distillate.jpg"
										alt="Card image"
									/>
									<CardUnderset
										title="1 Liter Delta 8 Distillate"
										price="2299.99"
										originalPrice="3299.99"
									>
										<button
											className="snipcart-add-item btn btn-info"
											style={{ width: '90%' }}
											data-item-id="1-liter-distillate"
											data-item-price="2299.99"
											data-item-url="https://delta8gummies.com"
											data-item-description="1 Liter Delta 8 Distillate. These products are 2018 Federal Farm Bill Legal. These products are 2018 Federal Farm Bill Legal."
											data-item-image={productImage}
											data-item-name="1 Liter Delta 8 Distillate"
										>
											ADD TO CART
										</button>
									</CardUnderset>
								</div>
							</div>
							<div className="col-sm-4">
								<div className="card relative">
									<StaticImage
										className="card-img-top w-full"
										src="../../images/distillate.jpg"
										alt="Card image"
									/>
									<CardUnderset
										title="2 Liter Delta 8 Distillate"
										price="4299.99"
										origininalPrice="5299.99"
									>
										<button
											className="snipcart-add-item btn btn-info"
											style={{ width: '90%' }}
											data-item-id="2-liter-distillate"
											data-item-price="4299.99"
											data-item-url="https://delta8gummies.com"
											data-item-description="2 Liter Delta 8 Distillate. These products are 2018 Federal Farm Bill Legal."
											data-item-image={productImage}
											data-item-name="2 Liter Delta 8 Distillate"
										>
											ADD TO CART
										</button>
									</CardUnderset>
								</div>
							</div>
							<div className="col-sm-4">
								<div className="card relative">
									<StaticImage
										className="card-img-top w-full"
										src="../../images/distillate.jpg"
										alt="Card image"
									/>
									<CardUnderset
										title="3 Liter Delta 8 Distillate"
										price="6,000.00"
										origininalPrice="12,000.00"
									>
										<button
											className="snipcart-add-item btn btn-info"
											style={{ width: '90%' }}
											data-item-id="3-liter-distillate"
											data-item-price="6000.00"
											data-item-url="https://delta8gummies.com"
											data-item-description="3 Liter Delta 8 Distillate. These products are 2018 Federal Farm Bill Legal."
											data-item-image={productImage}
											data-item-name="3 Liter Delta 8 Distillate"
										>
											ADD TO CART
										</button>
									</CardUnderset>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
