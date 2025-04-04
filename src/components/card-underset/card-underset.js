import React from 'react';
import { Link } from 'gatsby';

export const CardUnderset = ({ children, title, price, originalPrice, discount, anchor, yotpoProduct }) => {

    React.useEffect(() => {
        if (typeof window.yotpo !== "undefined") {
            window.yotpo.initWidgets(); 
            //consider trying with refreshWidgets()
        }
    }, [yotpoProduct])
    
    let titleBlock;
	if (anchor) {
		titleBlock = (
			<Link to={`${anchor}`} className="product-title-anchor">
				<h2 className="product-title font-bold w-full">{title}</h2>
			</Link>
		);
	} else {
		titleBlock = <h2 className="product-title font-bold w-full">{title}</h2>;
	}

    const dis = discount || ''

	return (
		<React.Fragment>
			<span
				className="badge badge-pill badge-danger"
				style={{
					position: 'absolute',
					left: '5px',
					top: '5px',
					backgroundColor: '#f25c3f'
				}}
			>
				{dis}
			</span>
			<div className="card-body" style={{ borderTop: '1px solid rgba(0, 0, 0, .125)' }}>
				{titleBlock}
				{yotpoProduct && (
					<div style={{ textAlign: 'center' }}>
						<div
							className="yotpo bottomLine"
							style={{ display: 'inline-block' }}
							data-yotpo-product-id={yotpoProduct}
						/>
					</div>
				)}
				<div>
					<p className="card-text inline-block new-price my-2">{price}</p>
					&nbsp;
					{originalPrice ? 
						<span className="inline-block text-red-500 font-bold my-2 text-2xl">
							<del>{originalPrice}</del>
						</span>
					: null }
				</div>
				{children}
			</div>
		</React.Fragment>
	);
};
