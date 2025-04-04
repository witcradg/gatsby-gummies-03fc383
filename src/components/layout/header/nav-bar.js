import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { LargeFormatMenuBar } from './large-format-menu-bar';
import { StatePicker } from '../state-picker';
import { SidebarLink } from './sidebar-link';
import { MenuLogo } from './menu-logo';
import { NavigationLink } from './navigation-link';

export const NavBar = ({ limited }) => {
    const [side, setSide] = useState('sidenav close-sidebar');

    return (
        <div className="container-fluid my-top-main-nav">
            <div>{limited ? limitedSidebar() : sidebar()}</div>
            <div>
                <LargeFormatMenuBar>
                    {limited ? limitedMenu() : menu()}
                </LargeFormatMenuBar>
                {/* logo and hamburger menu bar */}
                <div id="mobile-top-bar" className="md:hidden">
                    <div
                        className="container-fluid px-0"
                        style={{ margin: '0 0 0 -10px' }}
                    >
                        <div className="flex w-full">
                            <div className="logo">
                                <MenuLogo />
                            </div>
                            <div
                                id="hamburger-menu"
                                className="flex-1 justify-self-end text-right"
                            >
                                <span
                                    style={{
                                        fontSize: '30px',
                                        cursor: 'pointer',
                                        color: 'white'
                                    }}
                                    onClick={openSidebar}
                                    role="presentation"
                                >
                                    &#9776;
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    function openSidebar() {
        setSide('sidenav open-sidebar');
    }

    function closeSidebar() {
        setSide('sidenav close-sidebar');
    }

    function menu() {
        return (
            <div className="flex py-3">
                <NavigationLink to="/" label="Home" />
                <NavigationLink
                    to="/collections/delta-8-gummies/"
                    label="Delta 8 Gummies"
                />
                {/* <NavigationLink
                    to="/collections/delta-8-gummies/"
                    label="Delta 8 Gummies"
                /> */}
                <NavigationLink to="/lab-tests/" label="Lab Tests" />
                <NavigationLink to="/faq/" label="FAQ" />
            </div>
        );
    }

    function limitedMenu() {
        return (
            <div className="flex py-3">
                <NavigationLink to="/" label="Home" />
                <NavigationLink to="/collections/delta-8-gummies/" label="Delta 8 Gummies" />
                <NavigationLink to="/locations/" label="Locations" />
                <NavigationLink to="/lab-tests/" label="Lab Tests" />
            </div>
        );
    }

    function sidebar() {
        return (
            <div className="inline-stuck">
                <div className={side}>
                    <div
                        className="closebtn as-anchor"
                        onClick={closeSidebar}
                        role="presentation"
                    >
                        &times;
                    </div>
                    <SidebarLink to="/" label="Home" />
                    <SidebarLink
                        to="/collections/delta-8-gummies/"
                        label="Delta 8 Gummies"
                    />
                    {/* <SidebarLink
                        to="/collections/hhc-gummies/"
                        label="HHC Gummies"
                    />
                    <SidebarLink
                        to="/collections/wholesale/"
                        label="Wholesale"
                    /> */}
                    <SidebarLink to="/lab-tests/" label="Lab Tests" />
                    <SidebarLink to="/faq/" label="FAQ" />
                    {/* <SidebarLink
                        to="/collections/free-delta-8/"
                        label="Free Delta 8"
                    /> */}
                    {/* {sharedSidebarElements()} */}
                </div>
            </div>
        );
    }

    function limitedSidebar() {
        return (
            <div className="inline-stuck">
                <div className={side}>
                    <div
                        className="closebtn as-anchor"
                        onClick={closeSidebar}
                        role="presentation"
                    >
                        &times;
                    </div>
                    <SidebarLink to="/" label="Home" />
                    <SidebarLink to="/collections/delta-8-gummies/" label="Delta 8 Gummies" />
                    <SidebarLink to="/locations/" label="Locations" />
                    <SidebarLink to="/lab-tests/" label="Lab Tests" />
                    {/* {sharedSidebarElements()} */}
                </div>
            </div>
        );
    }

    function sharedSidebarElements() {
        return (
            <React.Fragment>
                <div className="ml-2">
                    <div className="text-white">Pick State</div>
                    <StatePicker />
                </div>
                <button className="snipcart-checkout white-anchor block py-2">
                    <FontAwesomeIcon
                        className="mr-3 text-white"
                        icon={faShoppingCart}
                    />
                    View Cart
                </button>
            </React.Fragment>
        );
    }
};
