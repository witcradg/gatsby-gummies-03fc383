import React from 'react';
import { Link } from 'gatsby';

export const BlogPostCard = ({ post, image, imgAlt }) => {

	const excerpt = post.excerpt.replace(/<p>/g, '<p class="font-bold text-center">');

	//const uri = `/blog/${post.uri.split('/')[4]}/`;
	return (
		<div className="col-sm-6 col-md-4 col-12-440width pro-item">
			<div className="card">
				<Link to={post.uri}>
                    <img src={image} alt={imgAlt} />
					<div className="m-auto p-4">
						<h2>{post.title}</h2>
						<div dangerouslySetInnerHTML={{ __html: excerpt }} />
					</div>
				</Link>
			</div>
		</div>
	);
};
