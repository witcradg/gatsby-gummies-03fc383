import React from 'react';

export const Section = ({ sectionTitle, children }) => {
	return (
		<React.Fragment>
			<div className="popular-product text-center my-8">
				<h1 className="block-title uppercase"> {sectionTitle}</h1>
			</div>
			<div className="popular-product text-center mb-3">
				<div className="container">
					<div className="row">
                        {children}
                    </div>
				</div>
			</div>
		</React.Fragment>
	);
};
