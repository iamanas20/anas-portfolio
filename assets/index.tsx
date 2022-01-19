import React, { Suspense } from 'react';
import './app.scss';
import history from './data/history';

import {
  Switch,
  Route,
  Link
} from "react-router-dom";

import {
	Home,
	BlogPost,
} from './pages';

// this is where you could have different layers of your app, navbars,
// sidebars, builders, out-of-dashboard pages, middlewares...
export function Container(){
	return (
		<div className="container">
			<Suspense fallback={"loading..."}>
				<Navbar />
        <Switch>
          <Route path="/blog/:id" component={BlogPost} />
          <Route path="/" component={Home} />
        </Switch>
			</Suspense>
		</div>
	)
}

function Navbar(props){
	return (
		<div className="navbar">
			<img className="logo" onClick={() => history.push('/')} src={require('./assets/imgs/anas.svg')}/>
			<div>
				<a href="/blog" children="Blog"/>
				<a href="mailto:anaslatique@gmail.com" target="_blank" children="Contact"/>
			</div>
		</div>
	)
}
