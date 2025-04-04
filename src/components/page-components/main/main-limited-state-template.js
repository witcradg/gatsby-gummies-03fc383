import React from 'react';
import { LimitedStatesHero } from './limited-states-hero';
import { FollowUs } from '../../follow-us';
// import { HhcXdRow } from './hhc-xd-row';
// import { SourSquaresCard } from '../../../product-cards/gummies/sour-squares-card';
import { SourSquaresCard } from '../../product-cards/gummies/sour-squares-card';


import { AgeGuard } from './age-guard';
import { Reassurances } from './reassurances';
import { HhcQandA } from './hhcqanda';
import { CitiesList } from './cities-list';
import { Content2x } from './content2x';
import { Section } from './section';
import { Buy2Get1Card } from '../../product-cards/sample-packs/buy2get1-card';




export const MainLimitedStateTemplate = ({ usState, isCity, url }) => {

	const mainPageTest = false; //TODO
	const conditionalQandA = () => {
		if (isCity || mainPageTest) {
			return <HhcQandA title={'Common HHC Questions'} usCityState={usState} />;
		}
	};

	let title = 'MOST POPULAR CBD GUMMIES';
	title = usState ? `${usState}'s ${title}` : title;
	return (
		<React.Fragment>
			<AgeGuard />
			<LimitedStatesHero usState={usState} />
			<div className="popular-product text-center my-8">
				<h1 className="block-title uppercase">{title}</h1>
			</div>
			<Section sectionTitle="Delta 8 Gummies from Hemp">
				{/* <HhcXdRow /> */}
				<SourSquaresCard />
				<Buy2Get1Card />
			</Section>
			<Section sectionTitle="Hemp Edibles Reviews">
			</Section>
			<Reassurances usState={usState} />
			{conditionalQandA()}
			<Content2x />
			<FollowUs />
			{usState ? <CitiesList usState={usState} isHhc={false} /> : null}
		</React.Fragment>
	);
};
