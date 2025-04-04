import React from 'react';
import { MenuLogo } from './menu-logo';
import { PickerDropdown } from './picker-dropdown';

export const LargeFormatMenuBar = ({children}) => {
    return (
        <div id="LargeFormatMenuBar" className="hidden md:flex justify-between">
            <div className="pt-1">
                <MenuLogo />
            </div>
            <div id="lg-menu-navigation-links">
                {children}
            </div>
            <PickerDropdown header='true' />
        </div>
    );
};
