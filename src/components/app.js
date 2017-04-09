import { h, Component } from 'preact';
import { Router } from 'preact-router';
import AsyncRoute from 'preact-async-route';

import Header from './header';
import Home from './home';
import Profile from './profile';
import NewTrip from './new-trip';
import LibLoader from './../lib/lib-loader';

function getNewTrip() {
	return new Promise(resolve => {
		require('./new-trip/index.js');
	});
}

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	componentDidMount() {
		let f = document.createElement('script');
		f.type = 'text/javascript';
		f.async = true;
		f.defer = true;
		f.src = 'https://www.gstatic.com/firebasejs/3.7.4/firebase-app.js';
		f.onload = () => {
			LibLoader.incrementFirebaseReady();
		}
		window.document.body.appendChild(f);

		let d = document.createElement('script');
		d.type = 'text/javascript';
		d.async = true;
		d.defer = true;
		d.src = 'https://www.gstatic.com/firebasejs/3.7.4/firebase-database.js';
		d.onload = () => {
			LibLoader.incrementFirebaseReady();
		}
		window.document.body.appendChild(d);
	}

	render() {
		return (
			<div id="app">
				<Header />
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<Profile path="/profile/" user="me" />
					<Profile path="/profile/:user" />
					<NewTrip path="/new-trip" />
				</Router>
			</div>
		);
	}
}
