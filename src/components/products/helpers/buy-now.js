import React from 'react';

export const BuyNow = ({ data, outOfStock }) => {
    return (
        <div>
            {outOfStock === 'false' ? (
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
                        data-item-description={data.dataItemDescription}
                        data-item-image={data.dataItemImage.publicURL}
                        data-item-name={data.dataItemName}
                        data-item-category={data.dataItemCategory}
                    >
                        BUY NOW!
                    </button>
                </div>
            ) : (
                <br />
            )}
        </div>
    );
};
