import React, { useEffect } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	useLocation
} from "react-router-dom";

import {
	Landing,
	Payments,
	Pricing,
	NotFound
} from './Pages';

import './App.css';
import { LocationObserver } from './Components';

const App: React.FC = () => {

	return (
		<div className="App">

			<Router>


				<LocationObserver>

					<Switch>


						<Route exact path="/">
							<Landing />
						</Route>

						<Route path="/payments">
							<Payments />
						</Route>

						<Route path="/pricing">
							<Pricing />
						</Route>

						<Route path="*">
							<NotFound />
						</Route>

					</Switch>
				</LocationObserver>

			</Router>

		</div>
	);

}

export default App;
