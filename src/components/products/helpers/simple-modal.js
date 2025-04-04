import React, { useState } from 'react';
import { Modal, ModalBody } from 'reactstrap';

// https://reactstrap.github.io/components/modals/
export const SimpleModal = ({ children, buttonLabel, buttonClass, modalClass }) => {
	const [ modal, setModal ] = useState(false);

	const toggle = () => setModal(!modal);

	const closeBtn = {
		fontFamily: 'MontserratExtraBold',
		fontWeight: '900',
		fontSize: '1.2rem',
		color: 'white',
		textAlign: 'right',
        witdh:'100%',        
		position: 'relative',
		top: '-2rem',
        right: '-2rem'
	};

	const closeButton = (
		<button className="close block w-full" style={closeBtn} onClick={toggle}>
			x
		</button>
	);

	return (
		<div>
			<button onClick={toggle} className={buttonClass}>
				{buttonLabel}
			</button>
			<Modal isOpen={modal} toggle={toggle} className={modalClass} style={{ maxWidth: '60%' }}>
				<div className="p-0">
					{closeButton}
					<ModalBody className="m-auto px-4">{children}</ModalBody>
					<div>&nbsp;</div>
				</div>
			</Modal>
		</div>
	);
};
