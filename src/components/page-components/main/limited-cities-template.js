import React from 'react';
import { FollowUs } from '../../follow-us';
import { HhcXdRow } from './hhc-xd-row';
import { D9XdRow } from './d9-xd-row';
import { ChiRow } from './chi-row';
import { AgeGuard } from './age-guard';
import { Reassurances } from './reassurances';
import { HhcQandA } from './hhcqanda';
import { Content2x } from './content2x';
import { Section } from './section';
import { HhcBlogRow } from './hhc-blog-row';
import { LimitedStatesShopNow } from './limited-states-shop-now';
import { LimitedStatesHero } from './limited-states-hero';

export const LimitedCitiesTemplate = ({ usState, isCity, url }) => {
    
	const mainPageTest = false; //TODO
	const conditionalQandA = () => {
		if (isCity || mainPageTest) {
			return <HhcQandA title={'Common HHC Questions'} usCityState={usState} />;
		}
	};

	let title = 'HEMP DERIVED CBD, DELTA 8 & DELTA 9 GUMMIES FOR PEACE AND RELAXATION';
	title = usState ? `${usState}'s ${title}` : title;

	return (
		<React.Fragment>
			<AgeGuard />
			<LimitedStatesHero usState={usState} />
			<div className="popular-product text-center my-8">
				<h1 className="block-title uppercase">{title}</h1>
			</div>
			<LimitedStatesShopNow url={url} />
			<Section sectionTitle="Buy HHC Gummies 25mg Bears and 100mg Rings Online">
				<HhcXdRow />
			</Section>
			<Section sectionTitle="3Chi Delta 8 Gummies Made with Hemp Derived D8 THC">
				<D9XdRow />
			</Section>
			<Section sectionTitle="3Chi Delta 8 Gummies Made with Hemp Derived D8 THC">
				<ChiRow />
			</Section>
		
			<Section sectionTitle="NEW TO HHC? START SMALL! 10-25MG FOR A FIRST TIMER.">
				<HhcBlogRow />
			</Section>
			<Reassurances usState={usState} />
			{conditionalQandA()}
			<Content2x />
			<FollowUs />
		</React.Fragment>
	);
};
