import React from 'react';
import image from"../../../images/hemp.png";
import { SimpleModal } from './simple-modal';

export const Legalq = ({ product }) => {
	const content = `The 2018 Farm Bill Legalized all Hemp Derived Products that contain less then .03% Delta 9 THC. This means
    ${product} are legal to sell, possess & consume on a Federal Level.`;

    

    const btnlbl = 
        (<div className="col-sm-3 m-0 whitespace-nowrap">
            <img src={image} width="18" height="18" alt="hemp leaf"
                 className="inline mx-1 p-0 relative bottom-1" />
            Is Delta 8 Legal?
        </div>)


	return (
		<SimpleModal buttonLabel={btnlbl} buttonClass="modal-button" modalClass="modal-class">
			<h5 className="modal-body-title text-center pb-2">Is Delta 8 Legal?</h5>
			{content}
		</SimpleModal>
	);
};
