import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { CardUnderset } from '../card-underset';
import productImage from '../../images/cream.png';


export const Cream = ({ title }) => {

        // return (
        //     <div className="popular-product text-center mb-3">
        //         <h1>{title ? title : 'CREAMS'}</h1>
        //         <div className="container">
        //             <div className="row">
        //                 < RosePetalCreamCard />
        //                 < WhiteTeaCreamCard />
        //                 <LavenderCreamCard />
        //             </div>
        //         </div>
        //     </div>
        // );

	return (
		<div className="most-edibles text-center my-5">
			<h1 className="my-5">CREAMS</h1>
			<div className="container">
				<div className="row w-full">
					<div className="col-sm-4">
						<div className="card relative">
							<StaticImage
								className="card-img-top w-full"
								src='../../images/cream.png'
								alt="Card image"
							/>
							<CardUnderset
								title="250MG Rose Pedal CBD Cream Case"
								price="240.00"
								originalPrice="340.00"
							>
								<button
									className="snipcart-add-item btn btn-info"
									style={{ width: '90%' }}
									data-item-id="rose-pedal-cbd-cream"
									data-item-price="240.00"
									data-item-url="https://delta8gummies.com"
									data-item-description="Rose Pedal CBD Cream Case"
									data-item-image={productImage}
									data-item-name="250MG-Rose-Pedal-CBD-Cream"
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
								src='../../images/cream.png'
								alt="Card image"
							/>
							<CardUnderset
								title="250MG White Tea CBD Cream Case"
								price="240.00"
								originalPrice="340.00"
							>
								<button
									className="snipcart-add-item btn btn-info"
									style={{ width: '90%' }}
									data-item-id="white-tea-cbd-cream"
									data-item-price="240.00"
									data-item-url="https://delta8gummies.com"
									data-item-description="Rose Pedal CBD Cream Case"
									data-item-image={productImage}
									data-item-name="250MG-White-Tea-CBD-Cream"
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
								src='../../images/cream.png'
								alt="Card image"
							/>
							<CardUnderset title="250MG Lavender CBD Cream Case" price="240.00" originalPrice="340.00">
								<button
									className="snipcart-add-item btn btn-info"
									style={{ width: '90%' }}
									data-item-id="lavender-cbd-cream"
									data-item-price="240.00"
									data-item-url="https://delta8gummies.com"
									data-item-description="Lavender CBD Cream Case"
									data-item-image={productImage}
									data-item-name="250MG-Lavender-CBD-Cream"
								>
									ADD TO CART
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
								src='../../images/cream.png'
								alt="Card image"
							/>
							<CardUnderset
								title="500MG Rose Pedal CBD Cream Case"
								price="340.00"
								originalPrice="440.00"
							>
								<button
									className="snipcart-add-item btn btn-info"
									style={{ width: '90%' }}
									data-item-id="rose-pedal-cbd-cream-500"
									data-item-price="340.00"
									data-item-url="https://delta8gummies.com"
									data-item-description="500MG Rose Pedal CBD Cream Case"
									data-item-image={productImage}
									data-item-name="500MG-Rose-Pedal-CBD-Cream"
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
								src='../../images/cream.png'
								alt="Card image"
							/>
							<CardUnderset
								title="500MG White Tea CBD Cream Case"
								price="340.00"
								originalPrice="440.00"
							>
								<button
									className="snipcart-add-item btn btn-info"
									style={{ width: '90%' }}
									data-item-id="white-tea-cbd-cream-500"
									data-item-price="340.00"
									data-item-url="https://delta8gummies.com"
									data-item-description="White Tea CBD Cream Case"
									data-item-image={productImage}
									data-item-name="500MG-White-Tea-CBD-Cream"
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
								src='../../images/cream.png'
								alt="Card image"
							/>
							<CardUnderset title="500MG Lavender CBD Cream Case" price="340.00" originalPrice="440.00">
								<button
									className="snipcart-add-item btn btn-info"
									style={{ width: '90%' }}
									data-item-id="lavender-cbd-cream-500"
									data-item-price="340.00"
									data-item-url="https://delta8gummies.com"
									data-item-description="Lavender CBD Cream Case"
									data-item-image={productImage}
									data-item-name="500MG-Lavender-CBD-Cream"
								>
									ADD TO CART
								</button>
							</CardUnderset>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
