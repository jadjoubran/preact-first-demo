import { h, Component } from 'preact';
import style from './style';
import NoTrips from './../no-trips';
import { Link } from 'preact-router';

export default class Home extends Component {

	constructor(props) {
		super(props);

		let trips = window.localStorage.getItem('trips') || "[]";

		this.state.trips = JSON.parse(trips);
	}

	render() {
		console.log(this.state.trips);
		if (!this.state.trips.length) {
			return (<div>
				<NoTrips />
				<Link href="/new-trip" class={style.fab}>
					<svg fill="#ffffff" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
						<path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
						<path d="M0 0h24v24H0z" fill="none" />
					</svg>
				</Link>
			</div>);
		}

		return (
			<div class={style.home}>
				{this.state.trips.map((trip) => (
					<li>
						{trip.name}
					</li>
				))}
			</div>
		);
	}
}
