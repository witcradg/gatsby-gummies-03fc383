import React, { useState } from 'react';
import { AddToCart } from '../helpers/add-to-cart';
import { Legalq } from '../helpers/legalQ';
import { ShippingDetails } from '../helpers/shipping-details';
import { TermsCheckbox } from '../helpers/terms-checkbox';
import { GummiesDescription } from '../helpers/gummies-description';
import { Section } from '../../page-components/main/section';
import { ProductImageDisplay } from '../helpers/product-image-display';
import { Vendor } from '../helpers/vendor';
import { prices, formatDescription, noticeXd } from '../../global';
import { HhcXdRow } from '../../page-components/main/hhc-xd-row';
import * as styles from '../helpers/product.module.css';

export const HHCRingsXD = ({ productData }) => {
    const data = productData.markdownRemark.frontmatter;
    const pageTitle = data.dataItemName;
    const productImage = data.productImage.publicURL;

    const formatted = prices(data);

    const [numberOrdered, setNumberOrdered] = useState(1);

    function handleChange(newValue) {
        setNumberOrdered(newValue);
    }

    return (
        <React.Fragment>
            <div>
                <div className="product-page page-padding pb-0">
                    {noticeXd()}
                </div>
                <div className="product-page page-padding">
                    <ProductImageDisplay data={data} />
                    <div className="flex-1 mt-2">
                        <div>
                            <h1 className={styles.page_title}>{pageTitle}</h1>
                            {/* GoldStars */}
                            <div
                                className="yotpo bottomLine"
                                data-yotpo-product-id={data.yotpoProductId}
                            />
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
                            <AddToCart onChange={handleChange}>
                                <button
                                    className="snipcart-add-item btn btn-lg text-lg text-white w-full"
                                    data-item-id={data.dataItemId}
                                    data-item-price={data.discountedPrice}
                                    data-item-quantity={numberOrdered}
                                    data-item-url={data.dataItemUrl}
                                    data-item-description={formatDescription(
                                        data
                                    )}
                                    data-item-image={
                                        data.dataItemImage.publicURL
                                    }
                                    data-item-name={data.dataItemName}
                                    data-item-category={data.dataItemCategory}
                                >
                                    ADD TO CART
                                </button>
                            </AddToCart>
                            <TermsCheckbox />
                            {/* BUY NOW */}
                            <div className="mb-8">
                                <button
                                    className="snipcart-add-item btn btn-lg text-lg w-full rounded-none"
                                    style={{
                                        fontFamily: 'MontserratExtraBold',
                                        backgroundColor: '#ffc520',
                                        color: '#2879fe',
                                        borderRadius: '0'
                                    }}
                                    data-item-id={data.dataItemId}
                                    data-item-price={data.discountedPrice}
                                    data-item-url={data.dataItemUrl}
                                    data-item-description={formatDescription(
                                        data
                                    )}
                                    data-item-image={
                                        data.dataItemImage.publicURL
                                    }
                                    data-item-name={data.dataItemName}
                                    data-item-category={data.dataItemCategory}
                                >
                                    BUY NOW!
                                </button>
                            </div>
                        </div>
                        <Vendor />
                        <div>
                            <GummiesDescription
                                totalContent={data.descriptionTotalContent}
                                potency={data.descriptionPotency}
                                count={data.descriptionCount}
                            />
                        </div>
                    </div>
                </div>
                <Section sectionTitle="PRODUCTS">
                    <HhcXdRow />
                </Section>
                <div
                    className="yotpo yotpo-main-widget"
                    data-product-id={data.reviewsProductId}
                    data-price={data.discountedPrice}
                    data-currency="USD"
                    data-name={data.reviewsItemName}
                    data-url={data.dataItemUrl}
                    data-image-url={productImage}
                />
            </div>
        </React.Fragment>
    );
};
