import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { CardUnderset } from '../card-underset';
import lemongrassImage from "../../images/250-lemongrass-delta8-tincture.png"
import mangoImage from "../../images/250-mango-delta8-tincture.png"
import blueberryImage from "../../images/250-blueberry-delta8-tincture.png"
import lemonImage from "../../images/250-juicylemon-delta8-tincture.png"
import guavaImage from "../../images/250-guavanectar-delta8-tincture.png"
import peppermintImage from "../../images/250-peppermint-delta8-tincture.png"

export const Tincture = () => {
	return (
		<div className="most-edibles text-center my-5">
			<h1 className="my-5">TINCTURES</h1>
			<div className="container">
				<div className="row w-full">
					<div className="col-sm-4">
						<div className="card relative">
							<StaticImage
								className="card-img-top w-full"
								src="../../images/250-lemongrass-delta8-tincture.png"
								alt="Card image"
							/>
							<CardUnderset
								title="250MG Lemongrass Tincture Case/24 Units"
								price="156.00"
								originalPrice="200.00"
							>
								<button
									className="snipcart-add-item btn btn-info"
									style={{ width: '90%' }}
									data-item-id="lemongrass-tincture"
									data-item-price="156.00"
									data-item-url="https://delta8gummies.com"
									data-item-description="250MG Lemongrass Tincture Case"
									data-item-image={lemongrassImage}
									data-item-name="250MG-Lemongrass-Tincture"
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
								src="../../images/250-mango-delta8-tincture.png"
								alt="Card image"
							/>
							<CardUnderset
								title="250MG Mango Tincture Case/24 Units"
								price="156.00"
								originalPrice="200.00"
							>
								<button
									className="snipcart-add-item btn btn-info"
									style={{ width: '90%' }}
									data-item-id="mango-tincture"
									data-item-price="156.00"
									data-item-url="https://delta8gummies.com"
									data-item-description="250MG Mango Tincture Case"
									data-item-image={mangoImage}
									data-item-name="250MG-Mango-Tincture"
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
								src="../../images/250-blueberry-delta8-tincture.png"
								alt="Card image"
							/>
							<CardUnderset
								title="250MG Blueberry Tart Tincture Case/24 Units"
								price="156.00"
								originalPrice="200.00"
							>
								<button
									className="snipcart-add-item btn btn-info"
									style={{ width: '90%' }}
									data-item-id="blueberry-tart-tincture"
									data-item-price="156.00"
									data-item-url="https://delta8gummies.com"
									data-item-description="250MG Blueberry Tart Tincture Case"
									data-item-image={blueberryImage}
									data-item-name="250MG-Blueberry-Tart-Tincture"
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
								src="../../images/250-juicylemon-delta8-tincture.png"
								alt="Card image"
							/>
							<CardUnderset
								title="250MG Juicy Lemon Tincture Case/24 Units"
								price="156.00"
								originalPrice="200.00"
							>
								<button
									className="snipcart-add-item btn btn-info"
									style={{ width: '90%' }}
									data-item-id="juicy-lemon-tincture"
									data-item-price="156.00"
									data-item-url="https://delta8gummies.com"
									data-item-description="250MG Juicy Lemon Tincture Case"
									data-item-image={lemonImage}
									data-item-name="250MG-Juicy-Lemon-Tincture"
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
								src="../../images/250-guavanectar-delta8-tincture.png"
								alt="Card image"
							/>
							<CardUnderset
								title="250MG Guava Nectar Tincture Case/24 Units"
								price="156.00"
								originalPrice="200.00"
							>
								<button
									className="snipcart-add-item btn btn-info"
									style={{ width: '90%' }}
									data-item-id="guava-nectar-tincture"
									data-item-price="156.00"
									data-item-url="https://delta8gummies.com"
									data-item-description="250MG Guava Nectar Tincture Case"
									data-item-image={guavaImage}
									data-item-name="250MG-Guava-Nectar-Tincture"
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
								src="../../images/250-peppermint-delta8-tincture.png"
								alt="Card image"
							/>
							<CardUnderset
								title="250MG Peppermint Tincture Case/24 Units"
								price="156.00"
								originalPrice="200.00"
							>
								<button
									className="snipcart-add-item btn btn-info"
									style={{ width: '90%' }}
									data-item-id="peppermint-tincture"
									data-item-price="156.00"
									data-item-url="https://delta8gummies.com"
									data-item-description="250MG Peppermint Tincture Case"
									data-item-image={peppermintImage}
									data-item-name="250MG-Peppermint-Tincture"
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
