import { h, Component } from 'preact';
import style from './style';
import NoTrips from './../no-trips';
import NewTripFab from './../new-trip-fab';
import LibLoader from './../../lib/lib-loader';

export default class Home extends Component {

	constructor(props) {
		super(props);

		const has_trips = window.localStorage.getItem('has_trips') || false;

		this.state.has_trips = !!has_trips;
		if (!this.state.trips) {
			this.state.trips = [];
		}
	}

	componentDidMount() {
		if (LibLoader.isFireBaseReady()){
			return this.getTrips();
		}
		const firebaseInterval = setInterval(() => {
			if (LibLoader.isFireBaseReady()) {
				clearInterval(firebaseInterval);
				this.getTrips();
			}
		}, 300);
	}

	getTrips() {
		const tripsRef = firebase.database().ref('trips');

		tripsRef.on('value', (response) => {
			let trips = response.val();
			if (trips) {
				this.setState({ trips });
			}
		});
	}

	render() {
		if (!this.state.has_trips) {
			return (<div>
				<NoTrips />
				<NewTripFab />
			</div>);
		}

		return (
			<div>
				<div class={style.home}>
					{this.state.trips.map((trip) => (
						<li>{trip.name}</li>
					))}
				</div>
				<NewTripFab />
			</div>
		);
	}
}
