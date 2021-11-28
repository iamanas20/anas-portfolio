import React from 'react';
import {posts} from '../data/cms';
import './blog.scss';
import ReactMarkdown from 'react-markdown'

export function BlogPost(props){
	const blog = React.useMemo(
		() => posts.find(p => p.id === props.match.params.id)!,
		[props.match.params.id]
	);
	return(
		<div className="blogsPage">
			<ReactMarkdown>{blog.text}</ReactMarkdown>
		</div>
	)
}
