import React from 'react';
import posts from '../data/cms';
import './blog.scss';
import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom'
import { BiArrowBack } from "react-icons/bi";

export function BlogPost(props){
	const blog = React.useMemo(
		() => posts.find(p => p.id === props.match.params.id)!,
		[props.match.params.id]
	);

	return(
		<div className="blogsPage blog">
			<Link to="/blog" className="backLink">
				<BiArrowBack size={18} />
				<span>
					Back to posts
				</span>
			</Link>
			<ReactMarkdown>{blog.text}</ReactMarkdown>
		</div>
	)
}
