import React, { Suspense } from 'react';
import './app.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {
	Home,
} from './pages';

import {
	Relay,
} from './data/relay';

// this is where you could have different layers of your app, navbars,
// sidebars, builders, out-of-dashboard pages, middlewares...
export function Container(){
	return (
		<div className="container">
			<Suspense fallback={"loading..."}>
				<Relay>
					<Router>
		        <Switch>
		          <Route path="/" component={Home} />
		        </Switch>
			    </Router>
				</Relay>
			</Suspense>
		</div>
	)
}