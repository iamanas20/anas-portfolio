import React, { Suspense, Fragment } from 'react';
import './home.scss';

import {
	Card,
	Button,
	Modal,
} from '../components';

export function Home() {
	return (
		<Fragment>
			<div className="homePage">
				<Content />
			</div>
		</Fragment>
	)
}

function Content(props) {
	return (
		<div className="contentGrid">
			<div className="intro card">
				<img src={require('../assets/imgs/anas1.png')}/>
				<p>
					I'm <span>Anas</span>, a software engineer from Morocco. I'm interested in React, GraphQL, Relay, Node, TypeScript, AWS. I love startups, blockchain, NFTs, and podcasts.
				</p>
			</div>
			<div className="card gh">
				<a href="https://github.com/iamanas20" target="_blank" />
				<img className="ghimg" src={require('../assets/imgs/Group 348.svg')} />
				<div className="external">
					<img src={require('../assets/imgs/icons8-external-64 (1).png')} />
				</div>
			</div>
			<div className="card lf">
				<a href="https://lightfunnels.com" />
				<img className="lfbg1" src={require('../assets/imgs/Frame 1339 (1).png')} />
			</div>
			<div className="card map">
				<a href="https://www.google.com/maps/@31.6356391,-8.0121846,13.28z" target="_blank" />
				<img className="mapimg" src={require('../assets/imgs/Frame 1340.png')} />
			</div>
			<div className="card lf2">
				<a href="https://lightfunnels.com" />
				<img src={require('../assets/imgs/Frame 1339 (5).svg')} />
			</div>
			<div className="card lfTime">
				<h4 >
					Doing awesome stuff at Lightfunnels
				</h4>
				<p>
					First hire at Lightfunnels, a crazy big e-commerce platform that helps you create sales funnels. I am a software engineer with a talented and passionate group of people making on crazy solutions that will impact so many folks out there.
				</p>
				<a href="/blog/lf" className="readMore">
					Read More
				</a>
			</div>
			<div className="card map">
				<a href="https://opensea.io/collection/ape-gang" target="_blank" />
				<img className="mapimg" src={require('../assets/imgs/image 35.png')} />
			</div>
			<div className="card princ">
				<h4 >
					What I'm most passionate about?
				</h4>
				<p>
					There are some things that I'm most passionate and excited about, I believe that...
				</p>
				<a href="/blog/passion" className="readMore">
					Read More
				</a>
			</div>
			<div className="card princ">
				<h4 >
					My statement on the Metaverse
				</h4>
				<p>
					This is the most world-changing and extreme usecase for blockchain technologies...
				</p>
				<a href="/blog/meta" className="readMore">
					Read More
				</a>
			</div>
			{/*<div className="card lf">
				<img src={require('../assets/imgs/Frame 1339.svg')} />
			</div>*/}
		</div>
	)
}