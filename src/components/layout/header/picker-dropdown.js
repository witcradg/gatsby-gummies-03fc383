import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { StatePicker } from '../state-picker';

export const PickerDropdown = ({ header }) => {
    return (
        <div id="picker-dropdown" className="text-white">
            <div className="block md:flex md:justify-between">
                <div
                    className="text-black p-3 relative"
                    style={{
                        backgroundColor: '#1DBDE0'
                    }}
                >
                    <StatePicker />
                </div>
                {header === 'true' ? (
                    <div className="p-3">
                        <button className="snipcart-checkout">
                            <FontAwesomeIcon
                                className="mr-0 text-white"
                                icon={faShoppingCart}
                            />
                        </button>
                    </div>
                ) : null}
            </div>
        </div>
    );
};
