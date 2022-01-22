import React, { Suspense } from 'react';
import './app.scss';
import history from './data/history';

import {
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

import {
	Home,
	BlogPost,
	Blog,
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
          <Route path="/blog" component={Blog} />
          <Route path="/" component={Home} />
        </Switch>
			</Suspense>
		</div>
	)
}

function Navbar(props){
	return (
		<div className="navbar">
			<NavLink to="/">
				<img className="logo" src={require('./assets/imgs/anas.svg')}/>
			</NavLink>
			<div>
				<NavLink to="/blog" activeClassName="selected">Blog</NavLink>
				<a href="mailto:anaslatique@gmail.com" target="_blank" children="Contact"/>
			</div>
		</div>
	)
}
