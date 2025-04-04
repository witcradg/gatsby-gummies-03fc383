import React from 'react';

export const CardOverlay = ({ title, subtitle, url, label }) => {
	return (
		<div className="text-center shop-now">
			<div className="shop-now-title bold">{title}</div>
			<div className="shop-now-subtitle">{subtitle}</div>
			<a href={url} className="btn shop-now-btn" rel="noopener noreferrer">
				{label}
			</a>
		</div>
	);
};
