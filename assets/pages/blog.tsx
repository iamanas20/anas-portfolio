import React from 'react';
import posts from '../data/cms';

import {
	NavLink
} from 'react-router-dom';

export function Blog(){
	const blogPosts = React.useMemo(
		() => posts.filter(p => p.released),
		[posts]
	);

	return (
		<div className="blogsPage">
			<div className="topSection">
				<h1>
					Writing
				</h1>
				<p>
					A bunch of thoughts, my journey, and some technology tips.
				</p>
			</div>
			<div className="postsContainer">
				{
					blogPosts.map(
						p => (
							<NavLink to={`/blog/${p.id}`} key={p.id}>
								<div className="postItem">
									<h3>
										{p.title}
									</h3>
									<p>
										{p.description}
									</p>
								</div>
							</NavLink>
						)
					)
				}
			</div>
		</div>
	)
}