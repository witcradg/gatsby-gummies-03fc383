import React, { useContext } from 'react';
import { MessageBar } from './message-bar';
import { NavBar } from './nav-bar';
import { LayoutContext } from '../../../contexts/layout-context';

const Header = () => {
    const { layout } = useContext(LayoutContext);
    const limited = 'limited' === layout?.distribution;

    return (
        <React.Fragment>
            <MessageBar />
            <div className="sticky-nav">
                <NavBar limited={limited} />
            </div>
        </React.Fragment>
    );
};

export default Header;
