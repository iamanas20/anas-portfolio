import React, { Suspense, Fragment } from 'react';
import './home.scss';

import {
	Card,
	Button,
	Modal,
} from '../components';

export function Home() {
	const [showScroll, setShowScroll] = React.useState(true);
	return (
		<Fragment>
			<div className="homePage">
				<div className="contentGrid">
					<div className="intro card">
						<img src={require('../assets/imgs/anas1.png')}/>
						<p>
							I'm <span>Anas</span>, a software engineer from Morocco. I'm interested in React, GraphQL, Relay, Node, TypeScript, AWS. I love books, articles, space exploration, startups, blockchains, NFTs, and podcasts.
						</p>
					</div>
					<div className="card gh">
						<a href="https://github.com/iamanas20" target="_blank" />
						<img className="ghimg" src={require('../assets/imgs/Group 348.svg')} />
						<div className="external">
							<img src={require('../assets/imgs/icons8-external-64 (1).png')} />
						</div>
					</div>
					<div
						className="card lf"
						id="scroll"
						onScroll={
							function(e: React.UIEvent<HTMLElement>) {
								const el = e.currentTarget;
								setShowScroll(el.scrollTop < 100);
							}
						}
					>
						<h4>
							{'<MyTechStack />'}
						</h4>
						{
							stack.map(
								s => (
									<Fragment key={s.name}>
										<h5>
											{s.name}
										</h5>
										<ul>
											{
												s.items.map(
													it => (
														<li key={it}>
															- {it}
														</li>
													)
												)
											}
										</ul>
									</Fragment>
								)
							)
						}
						{
							showScroll && (
								<div className="fixedContainer">
									<div
										className="scroll"
										onClick={
											function() {
												const objDiv = document.getElementById("scroll") as HTMLElement;
												objDiv.scrollTop = objDiv.scrollHeight;
											}
										}
									>
										Scroll down
									</div>
								</div>
							)
						}
					</div>
					<div className="card map">
						<a href="https://www.google.com/maps/@31.6356391,-8.0121846,13.28z" target="_blank" />
						<img className="mapimg" src={require('../assets/imgs/Frame 1340.png')} />
					</div>
					<div className="card lf2">
						<a href="https://lightfunnels.com" />
						<img src={require('../assets/imgs/Frame 1339 (5).svg')} />
						<div className="lfBanner">
							Sr. Software Engineer at Lightfunnels
						</div>
					</div>
					{/*<div className="card lfTime">
						<h4 >
							Doing awesome stuff at Lightfunnels
						</h4>
						<p>
							First hire at Lightfunnels, a crazy big e-commerce platform that helps you create sales funnels. I am a software engineer with a talented and passionate group of people making on crazy solutions that will impact so many folks out there.
						</p>
						<a href="/blog/lf" className="readMore">
							Read More
						</a>
					</div>*/}
					{/*<div className="card map">
						<a href="https://opensea.io/collection/ape-gang" target="_blank" />
						<img className="mapimg" src={require('../assets/imgs/image 35.png')} />
					</div>*/}
					{/*<div className="card princ">
						<h4 >
							Moving to the Netherlands
						</h4>
						<p>
							The most unexpected thing that ever happened to me, was moving to Amsterdam.
						</p>
						<a href="/blog/amsterdam-eagle" className="readMore">
							Read More
						</a>
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
					</div>*/}
					{/*<div className="card lf">
						<img src={require('../assets/imgs/Frame 1339.svg')} />
					</div>*/}
				</div>
			</div>
		</Fragment>
	)
}

const stack = [
	{
		name: 'Frontend:',
		items: [
			'React',
			'GraphQL',
			'TypeScript',
			'Relay',
			'REST APIs',
			'CSS (& preprocessors)',
			'HTML',
			'Vue',
			'Webpack',
			'Babel',
		],
	},
	{
		name: 'Backend:',
		items: [
			'Node',
			'Express',
			'TypeScript',
			'GraphQL',
			'Relay',
			'Knex',
		],
	},
	{
		name: 'Data:',
		items: [
			'JSON',
			'GeoJSON',
			'MySQL DB',
		],
	},
	{
		name: 'Cloud:',
		items: [
			'AWS',
			'DigitalOcean',
			'CI/CD',
		],
	},
	{
		name: 'Tools:',
		items: [
			'Sublime Text 3',
			'Figma',
			'Jira',
			'Slack',
			'Notion',
			'Chrome',
			'TickTick',
			'G Suite',
		],
	},
]