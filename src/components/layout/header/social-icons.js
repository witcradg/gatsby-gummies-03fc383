import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGoogle, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';

export const SocialIcons = () => {
	return (
		<div>
			<a target="_blank" rel="noopener noreferrer" href="https://facebook.com/">
				<FontAwesomeIcon className="mr-3 text-white" icon={faFacebook} />
			</a>
			<a target="_blank" rel="noopener noreferrer" href="https://twitter.com/">
				<FontAwesomeIcon className="mr-3 text-white" icon={faTwitter} />
			</a>
			<a target="_blank" rel="noopener noreferrer" href="https://google.com/">
				<FontAwesomeIcon className="mr-3 text-white" icon={faGoogle} />
			</a>
			<a target="_blank" rel="noopener noreferrer" href="https://instagram.com/">
				<FontAwesomeIcon className="mr-3 text-white" icon={faInstagram} />
			</a>
			<a target="_blank" rel="noopener noreferrer" href="https://pinterest.com/">
				<FontAwesomeIcon className="mr-3 text-white" icon={faPinterest} />
			</a>
		</div>
	);
};
