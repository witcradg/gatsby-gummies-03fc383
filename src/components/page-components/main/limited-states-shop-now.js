import React from 'react';
import { CardOverlay } from '../../card-overlay';

export const LimitedStatesShopNow = () => {
    return (
        <div className="text-center mb-3">
            <div className="container-fluid-custom">
                <div className="row">
                    <div className="col-sm-6 col-md-4 col-12-440width relative">
                        <div className="card bg-3-gummy shop-now-card">
                            <CardOverlay
                                title="Delta-8 Edibles"
                                subtitle="UP TO 50% OFF"
                                url="/collections/shop/"
                                label="SHOP NOW!"
                            />
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-12-440width relative">
                        <div className="card bg-2-gummy shop-now-card">
                            <CardOverlay
                                title="SALE"
                                subtitle="50% OFF"
                                url="/collections/shop/"
                                label="SHOP NOW!"
                            />
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-12-440width relative">
                        <div className="card bg-1-gummy shop-now-card">
                            <CardOverlay
                                title="FREE 1000MG"
                                subtitle="BUY 2 GET 1 FREE"
                                url="/collections/shop/"
                                label="SHOP NOW!"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
