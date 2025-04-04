import React from 'react';
import { GummieBearsPouchCard } from '../product-cards/gummies/gummie-bears-pouch-card';
import { OrangeSlicesPouchCard } from '../product-cards/gummies/orange-slices-pouch-card';
import { PeachRingsPouchCard } from '../product-cards/gummies/peach-rings-pouch-card';
import { AppleDotsPouchCard } from '../product-cards/gummies/apple-dots-pouch-card';
import { SourApplePouchCard } from '../product-cards/gummies/sour-apple-pouch-card';
import { All5PouchCard } from '../product-cards/gummies/all5-pouch-card';

export const GummiePouches = ({ title, bottom }) => {
    const BottomLine = bottom ? (
        <div className="row" style={{ marginTop: '4rem' }}>
            <OrangeSlicesPouchCard />
            <PeachRingsPouchCard />
            <SourApplePouchCard />
        </div>
    ) : null;

    return (
        <div className="popular-product text-center mb-3">
            <div className="my-8">
                <h1 className="block-title" style={{ margin: '1rem 0' }}>
                    {title ? title : 'NEW TO DELTA 8? START HERE!'}
                </h1>
            </div>
            <div className="container">
                <div className="row">
                    <All5PouchCard />
                    <GummieBearsPouchCard />
                    <AppleDotsPouchCard />
                </div>
                {BottomLine}
            </div>
        </div>
    );
};
