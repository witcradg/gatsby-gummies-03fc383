import React, { useState } from 'react';

export const SimpleAccordion = ({ children }) => {
    const arrayOfChildren = React.Children.toArray(children);

    const title = arrayOfChildren[0]
    const content=arrayOfChildren[1]

	const [ expanded, setExpanded ] = useState(false);

	return (
		<div className="expandable">
			<style>
				{`
          .accordion-title {
            margin-top: 20px;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            padding: 5px;
          }

          .content {
            padding: 5px;
          }
        `}
			</style>

			<div>
				<div
					className="accordion-title"
					onClick={() => {
						setExpanded(!expanded)
					}}
					role="presentation"
				>
					<div>
						<b>{title}</b>
					</div>
				</div>
				{expanded && <div className="content">{content}</div>}
			</div>
		</div>
	);
};
