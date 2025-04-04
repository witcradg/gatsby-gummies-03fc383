import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { FollowBottom } from './follow-bottom';

export const FollowUs = ({ title }) => {
	return (
		<React.Fragment>
			<div className="instagram text-center">
				<div className="my-8">
					<h1 className="block-title mb-2">{title ? title : 'FOLLOW US ON INSTAGRAM'}</h1>
					<a
						href="https://www.instagram.com/delta8gummiesnow/"
						target="_blank"
						rel="noopener noreferrer"
						style={{ color: '#1dbde0', textDecoration: 'none' }}
					>
						@DELTA8GUMMIESNOW
					</a>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-sm-6 col-md-4 col-12-440width pro-item">
							<StaticImage src="../../images/instagram-3.webp" alt="Card image" />
						</div>
						<div className="col-sm-6 col-md-4 col-12-440width pro-item">
							<StaticImage src="../../images/instagram-2.webp" alt="Card image" />
						</div>
						<div className="col-sm-6 col-md-4 col-12-440width pro-item">
							<StaticImage src="../../images/instagram-1.webp" alt="Card image" />
						</div>
					</div>
				</div>
			</div>
			<FollowBottom />
		</React.Fragment>
	);
};
