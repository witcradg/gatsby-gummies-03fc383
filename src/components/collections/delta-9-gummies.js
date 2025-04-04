import React from 'react';
// import { PeachMangoCard } from '../product-cards/gummies/peach-mango-card';
// import { GrapeSodaCard } from '../product-cards/gummies/grape-soda-card';
// import { CottonCandyCard } from '../product-cards/gummies/cotton-candy-card';
// import { ZkittlesCard } from '../product-cards/gummies/zkittles-card';
import { D9NerdsCard } from "../product-cards/gummies/d9-nerds-card"
import { D9CubesCard } from "../product-cards/gummies/d9-cubes-card"
import { D9WatermelonCard } from "../product-cards/gummies/d9-watermelon-card"
import { D9StrawberryCard } from "../product-cards/gummies/d9-strawberry-card"
import { D9GreenAppleCard } from "../product-cards/gummies/d9-green-apple-card"
import { D9BlueberryCard } from "../product-cards/gummies/d9-blueberry-card"


export const Delta9Gummies = ({children, title}) => {
    const sectionTitle = children || (
		<div className="my-8">
			<h1 className="block-title" style={{ margin: '1rem 0' }}>
				{title ? title : 'Buy Delta 9 Gummies Online'}
			</h1>
			<h2 className="block-title" style={{ margin: '1rem 0' }}>
				{'Delta 9 Gummies Made From Hemp Buy Online'}
			</h2>
		</div>
	);
	return (
		<div className="popular-product text-center mb-3">
			{sectionTitle}
			<div className="container">
				<div className="row">
                 		        <D9NerdsCard />
					<D9CubesCard />
					<D9WatermelonCard />
					<D9StrawberryCard />
					<D9GreenAppleCard />
					 <D9BlueberryCard/>
				
					
				</div>
			
			</div>
		</div>
	);
};
