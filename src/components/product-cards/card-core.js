import React from 'react';
// import ReactStars from "react-rating-stars-component"
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { CardUnderset } from '../card-underset';
import { prices } from '../global';

export const CardCore = ({ data }) => {
    const displayedDiscount =
        data.outOfStock === 'true' ? 'SOLD OUT' : data.displayedDiscount;

    let image = getImage(data.productCardImage);
    const staticImage = image ? null : data.productCardImage.publicURL;
    const formatted = prices(data);

    // const dataItemUrl = `https://delta8gummies.com${data.productLink}/`;
    const productLink = `${data.productLink}/`;

    return (
        <div className="col-sm-6 col-md-4 col-12-440width pro-item">
            <div className="card">
                <Link to={productLink}>
                    {image ? (
                        <GatsbyImage
                            image={image}
                            alt={data.productCardImageAlt}
                        />
                    ) : (
                        <img src={staticImage} alt={data.productCardImageAlt} />
                    )}
                </Link>
                <CardUnderset
                    title={data.title}
                    price={formatted.discountedPrice}
                    originalPrice={formatted.originalPrice}
                    discount={displayedDiscount}
                    anchor={data.dataItemUrl}
                    yotpoProduct={data.yotpoProductId}
                >
                    {data.outOfStock === 'true' ? (
                        <button
                            className="snipcart-add-item btn btn-info text-white"
                            style={{ width: '90%' }}
                        >
                            OUT OF STOCK
                        </button>
                    ) : (
                        <button
                            className="snipcart-add-item btn btn-info text-white"
                            style={{ width: '90%' }}
                            data-item-id={data.dataItemId}
                            data-item-price={data.discountedPrice}
                            data-item-url={data.dataItemUrl}
                            data-item-description={data.dataItemDescription}
                            data-item-image={data.dataItemImage.publicURL}
                            data-item-name={data.dataItemName}
                            data-item-category={data.dataItemCategory}
                        >
                            ADD TO CART
                        </button>
                    )}
                </CardUnderset>
            </div>
        </div>
    );
};
