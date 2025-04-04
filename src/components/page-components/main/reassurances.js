import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export const Reassurances = ({usState}) => {

    const shippingTitle = (usState) 
        ? `SHIPS TO YOUR DOORSTEP IN ${usState}`
        : `SHIPS TO YOUR DOORSTEP`

	return (
		<div className="most-edibles2 text-center mb-5">
			<div className="container">
				<div className="row">
					<div className="col-sm-6 col-md-4 col-12-440width pro-item">
						<div className="card border-0">
							<StaticImage src="../../../images/gummies-together.png" alt="Card image" />
							<div className="card-body">
								<div className="topline">HEMP DERIVED DELTA 8 THC</div>
								<div className="lowerline text-primary">NO MEDICAL CARD</div>
								<div className="lowerline text-primary pb-4"> REQUIRED</div>
							</div>
						</div>
					</div>
					<div className="col-sm-6 col-md-4 col-12-440width pro-item">
						<div className="card border-0">
							<StaticImage src="../../../images/LAB-TESTING2.png" alt="Card image" />
							<div className="card-body border-0">
								<div className="topline">LAB TESTED AND FORMULATED</div>
								<div className="lowerline">ONLY THE HIGHEST</div>
								<div className="lowerline pb-4">
									QUALITY <span className="text-primary whitespace-nowrap">DELTA 8 THC</span>
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-6 col-md-4 col-12-440width pro-item">
						<div className="card border-0">
							<StaticImage src="../../../images/shipping-banner2.png" alt="Card image" />
							<div className="card-body border-0">



								<div className="topline uppercase">{shippingTitle}</div>
								<div className="lowerline">
									SAME DAY
									<span className="text-primary"> SHIPPING AVAILABLE</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
