import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faTwitter,
  faGoogle,
  faInstagram,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons"

export const CategoriesSocial = () => {
  const styl = {
    fontSize: "1.25rem",
    lineHeight: "1.75rem",
    borderWidth: "0",
    borderStyle: "solid",
    boxSizing: "border-box",
    textDecoration: "none",
    color: "777777",
  }

	return (
		<div className="mb-8 ml-2 pr-14">
			<div className="flex self-stretch justify-between text-xl">
				<div style={styl}>
					<FontAwesomeIcon className="colord8d8d8" icon={faFacebook} />
				</div>
				<div style={styl}>
					<FontAwesomeIcon className="colord8d8d8" icon={faTwitter} />
				</div>
				<div style={styl}>
					<FontAwesomeIcon className="colord8d8d8" icon={faGoogle} />
				</div>
				<div style={styl}>
					<FontAwesomeIcon className="colord8d8d8" icon={faInstagram} />
				</div>
				<div style={styl}>
					<FontAwesomeIcon className="colord8d8d8" icon={faPinterest} />
				</div>
			</div>
		</div>
	);
};
