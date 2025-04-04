import React from 'react';
import { ThcaSmallsCard } from '../product-cards/gummies/thca-smalls-card';
import { ThcaKombuchaCard } from '../product-cards/gummies/kombucha-card';
import { ThcaDonnieBurgerCard } from '../product-cards/gummies/donnie-burger-card';
import { ThcaJealousyMintzCard } from '../product-cards/gummies/jealousy-mintz-card';
import { ThcaQuarterSamplerCard } from '../product-cards/gummies/quarter-sampler-card';
import { ThcaPermanentMarkerCard } from '../product-cards/gummies/permanent-marker-card';
import { ThcaGelato33Card } from '../product-cards/gummies/gelato-33-card';


export const Thca = ({ children, title }) => {
    const sectionTitle = children || (
        <div className="my-8">
            <h1 className="block-title" style={{ margin: '1rem 0' }}>
                {title ? title : 'Buy THCA Online'}
            </h1>
            <h2 className="block-title" style={{ margin: '1rem 0' }}>
                {'$99 THCA Ounces'}
            </h2>
        </div>
    );
    return (
        <div className="popular-product text-center mb-3">
            {sectionTitle}
            <div className="container">
                <div className="row">
                    <ThcaQuarterSamplerCard/>
                    <ThcaKombuchaCard />
                    <ThcaDonnieBurgerCard />
                    <ThcaJealousyMintzCard />
                    < ThcaPermanentMarkerCard />
                    <ThcaSmallsCard />
                    <ThcaGelato33Card/>
                </div>
            </div>
        </div>
    );
};
