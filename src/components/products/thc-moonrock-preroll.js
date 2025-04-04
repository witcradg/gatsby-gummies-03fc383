import React, { useState } from 'react';
import { AddToCart } from './helpers/add-to-cart';
import { BuyNow } from './helpers/buy-now';
import { Legalq } from './helpers/legalQ';
import { ShippingDetails } from './helpers/shipping-details';
import { OnFireTitle } from './helpers/on-fire-title';
import { VeganGummies } from '../collections/vegan-gummies';
import * as styles from './helpers/product.module.css';
import { ProductImageDisplay } from './helpers/product-image-display';
import { Vendor } from './helpers/vendor';
import { ProductVideo } from './helpers/product-video';
import { prices } from '../global';

export const THCMoonrockPreroll = ({ productData }) => {
    const data = productData.markdownRemark.frontmatter;
    const pageTitle = data.dataItemName;

    const formatted = prices(data);

    const [numberOrdered, setNumberOrdered] = useState(1);

    function handleChange(newValue) {
        setNumberOrdered(newValue);
    }

    return (
        <React.Fragment>
            <div>
                <div className="product-page page-padding">
                    <ProductImageDisplay data={data} />
                    <div className="flex-1 mt-2">
                        <div>
                            <h1 className={styles.page_title}>{pageTitle}</h1>
                            {/* GoldStars */}
                            <div
                                className="big-text"
                                style={{ color: '#f8353e' }}
                            >
                                ${data.discountedPrice}
                            </div>
                            &nbsp;
                            <div
                                className="big-text"
                                style={{
                                    color: '#2879fe',
                                    textDecoration: 'line-through'
                                }}
                            >
                                {formatted.originalPrice}
                            </div>
                            <div className="flex justify-start text-sm my-10 color-red space-x-8">
                                <Legalq product={pageTitle} />
                                <ShippingDetails />
                            </div>
                            <AddToCart
                                outOfStock={data.outOfStock}
                                onChange={handleChange}
                            >
                                <button
                                    className="snipcart-add-item btn btn-lg text-lg text-white w-full"
                                    data-item-id={data.dataItemId}
                                    data-item-price={data.discountedPrice}
                                    data-item-quantity={numberOrdered}
                                    data-item-url={data.dataItemUrl}
                                    data-item-description={
                                        data.dataItemDescription
                                    }
                                    data-item-image={
                                        data.dataItemImage.publicURL
                                    }
                                    data-item-name={data.dataItemName}
                                    data-item-category={data.dataItemCategory}
                                >
                                    ADD TO CART
                                </button>
                            </AddToCart>
                            <BuyNow data={data} outOfStock={data.outOfStock} />
                        </div>
                        <Vendor />
                        <ProductVideo
                            src={data.productVideoSrc}
                            title={data.productVideoTitle}
                        />
                        <h6
                            className={styles.description_title}
                            style={{
                                bottomMargin: '0px',
                                bottomPadding: '0px'
                            }}
                        >
                            About Delta 8 THC Prerolls
                        </h6>
                        <p style={{ marginTop: '0px' }}>
                            A perfectly rolled delta 8 THC flower joint rolled
                            in kief! Enjoy our famous Bubba Kush strain in this
                            elegant preroll.
                        </p>
                        <p>
                            <strong>Total ∆8THC Content Per Preroll:</strong>
                            <span>&nbsp;{data.descriptionTotalContent}</span>
                        </p>
                        <p>
                            This product contains below 0.03% Delta 9 THC on a
                            dry weight basis
                        </p>
                    </div>
                </div>
                <VeganGummies title="">
                    <OnFireTitle />
                </VeganGummies>
            </div>
        </React.Fragment>
    );
};
