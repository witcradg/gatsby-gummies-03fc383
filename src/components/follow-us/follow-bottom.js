import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export const FollowBottom = () => {

	return (
		<div className="container advantage">
            <br />
			<div className="row" style={{position: 'relative', left: '10px'}}>
				<div className="col-xs-12 col-md-6 col-lg-3 ">
					<div className="row">
						<div className="col-sm-2 p-0 m-0">
							<StaticImage alt="" src="../../images/font-1.png" />
						</div>
						<div className="col-sm-9">
							<h1>FREE SHIPPING</h1>
							<p>Free shipping on all US orders above 249</p>
						</div>
					</div>
				</div>
				<div className="col-xs-12 col-md-6 col-lg-3">
					<div className="row">
						<div className="col-sm-2 p-0 m-0">
							<StaticImage alt="" src="../../images/font-2.png" />
						</div>
						<div className="col-sm-9">
							<h1>SUPPORT 24/7</h1>
							<p>Contact us 24 hours a day, 7 days a week</p>
						</div>
					</div>
				</div>
				<div className="col-xs-12 col-md-6 col-lg-3">
					<div className="row">
						<div className="col-sm-2 p-0 m-0">
							<StaticImage alt="" src="../../images/font-3.png" />
						</div>
						<div className="col-sm-9">
							<h1>100% SATISFACTION</h1>
							<p>We Guarantee You'll Love our product</p>
						</div>
					</div>
				</div>
				<div className="col-xs-12 col-md-6 col-lg-3">
					<div className="row">
						<div className="col-sm-2 p-0 m-0">
							<StaticImage alt="" src="../../images/font-4.png" />
						</div>
						<div className="col-sm-9">
							<h1>100% PAYMENT SECURE</h1>
							<p>We ensure secure payment with PEV</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
