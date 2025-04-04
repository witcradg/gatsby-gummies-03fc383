import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

export const CitiesList = ({ usState, isHhc }) => {
	const data = useStaticQuery(graphql`
		query {
			allUsCitiesCsv {
				edges {
					node {
						state_varchar_20
						city_varchar_25
						stateshort_varchar_2
						county_varchar_21
					}
				}
			}
		}
	`);
	const edges = data.allUsCitiesCsv.edges;

	const cities = edges.filter((edge) => {
		return edge.node.state_varchar_20 === usState
	}).map((aNode) => {
        const city = aNode.node.city_varchar_25
        const st= aNode.node.stateshort_varchar_2
        return {city, st}
    })

	const body = cities.sort(
        (a,b) => (a.city >  b.city) ? 1 : ((b.city > a.city) ? -1 : 0)
    ); 

	function formatCity(node, idx) {
		const UScity = node.city.toLowerCase();
		const USstate = usState.toLowerCase();
		
        let path = isHhc ? `/locations/${USstate}/${UScity}-hhc-gummies/` : `/locations/${USstate}/${UScity}/`;
		let slug = path.replace(/ /g, '-'); //work around
        
		return (
			<div key={idx} className="city-list-element">
				<Link className="text-black" to={slug}>
					<span className="whitespace-nowrap">
						{node.city}, {node.st}
					</span>
				</Link>
			</div>
		);
	}

	return (
		<React.Fragment>
			{body.length > 0 ? <h4 className="text-center pt-8 pb-0">Where to Buy Delta 8 in {usState}</h4> : null}
			<div className="cities-list-wrapper">
				<div className="cities-list">
					<div className="city-list">{body.map((item, index) => formatCity(item, index))}</div>
				</div>
			</div>
		</React.Fragment>
	);
};
