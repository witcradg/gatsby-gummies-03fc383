import React, { useState } from 'react';

import { sliderSettings } from '../../global.js';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../../styles/slick-override.css';

export const ProductImageDisplay = ({ data }) => {
	const productImage = data.productImage.publicURL;
	const productAlt1Image = data.productAlt1Image ? data.productAlt1Image.publicURL : null;
	const productAlt2Image = data.productAlt2Image ? data.productAlt2Image.publicURL : null;
	const productAlt3Image = data.productAlt3Image ? data.productAlt3Image.publicURL : null;
	const productAlt4Image = data.productAlt4Image ? data.productAlt4Image.publicURL : null;

	const [ imageToSwap, setImageToSwap ] = useState(productImage);
	let swapableImage = imageToSwap;

	if (!productAlt1Image) {
		return (
			<React.Fragment>
				<div className="side1_mobile">
					<Slider {...sliderSettings} className="overflow-hidden">
						<img src={productImage} alt={data.PIalt} />
					</Slider>
				</div>
				<div className="flex-1 side1_desktop">
					<div>
						<img src={productImage} alt={data.PIalt} className="m-auto w-4/5" />
					</div>
				</div>
			</React.Fragment>
		);
	}

    function show(img,alt) {
        if (img) return (<img src={img} alt={alt} />)
    }

	return (
		<React.Fragment>
			<div className="side1_mobile">
				<Slider {...sliderSettings} className="overflow-hidden">
					{show(productImage,data.PIalt)}
					{show(productAlt1Image,data.PI1alt)}
					{show(productAlt2Image,data.PI2alt)}
					{show(productAlt3Image,data.PI3alt)}
					{show(productAlt4Image,data.PI4alt)}
				</Slider>
			</div>
			<div className="flex-1 side1_desktop">
				<div>
					<img src={swapableImage} alt={data.PIalt} className="m-auto w-4/5" />
				</div>
				<div className="py-4">
					<div className="inline-block w-1/5">
						<button onClick={() => setImageToSwap(productImage)}>
							<img src={productImage} alt={data.PIalt} />
						</button>
					</div>
					<div className="inline-block w-1/5">
						<button onClick={() => setImageToSwap(productAlt1Image)}>
							<img src={productAlt1Image} alt={data.PI1alt} />
						</button>
					</div>
					<div className="inline-block w-1/5">
						<button onClick={() => setImageToSwap(productAlt2Image)}>
							<img src={productAlt2Image} alt={data.PI2alt} />
						</button>
					</div>
					<div className="inline-block w-1/5">
						<button onClick={() => setImageToSwap(productAlt3Image)}>
							<img src={productAlt3Image} alt={data.PI3alt} />
						</button>
					</div>
					<div className="inline-block w-1/5">
						<button onClick={() => setImageToSwap(productAlt4Image)}>
							<img src={productAlt4Image} alt={data.PI4alt} />
						</button>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};
