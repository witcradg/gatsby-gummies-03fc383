import React from 'react';
import { CardOverlay } from '../../card-overlay';
import product1 from '../../../images/hhc-bears-rings.png';
import product2 from '../../../images/hhc-bears-rings.png';
import product3 from '../../../images/both-thco.png';

const alt1 = 'hhc bears rings gummies';
const alt2 = 'hhc bears rings gummies';
const alt3 = 'thco bears & thco rings';

export const HhcShopNow = ({ url }) => {
    let relativePath = null;
    //url will be null on state_hhc pages
	if (url) {
		let urlArray = url.replace('-hhc-gummies-hhc-gummies', '/').split('/');
		relativePath = `/locations/${urlArray[5]}/${urlArray[6]}/`;
	}

    const url1 = relativePath ? relativePath.replace('-hhc-gummies','') 
                              : '/collections/delta-8-gummies/';

	return (
		<div className="text-center mb-3">
			<div className="container-fluid-custom">
				<div className="row">
					<div className="col-sm-6 col-md-4 col-12-440width relative">
						<div className="card bg-3-gummy shop-now-card">
							<img src={product1} alt={alt1} />
							<CardOverlay
								title="Delta-8 Edibles"
								subtitle="UP TO 50% OFF"
								url={url1}
								label="SHOP NOW!"
							/>
						</div>
					</div>
					<div className="col-sm-6 col-md-4 col-12-440width relative">
						<div className="card bg-2-gummy shop-now-card">
							<img src={product2} alt={alt2} />
							<CardOverlay
								title="HHC Gummies"
								subtitle="UP TO 50% OFF"
								url="/collections/hhc-gummies/"
								label="SHOP NOW!"
							/>
						</div>
					</div>
					<div className="col-sm-6 col-md-4 col-12-440width relative">
						<div className="card bg-1-gummy shop-now-card">
							<img src={product3} alt={alt3} />
							<CardOverlay
								title="FREE 1000MG"
								subtitle="BUY 2 GET 1 FREE"
								url="/collections/thco-gummies/"
								label="SHOP NOW!"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
