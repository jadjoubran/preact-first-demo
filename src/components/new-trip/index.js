import { h, Component } from 'preact';
import { route } from 'preact-router';
import style from './style';
import LibLoader from './../../lib/lib-loader';

export default class NewTrip extends Component {

	newTrip(event) {
		event.preventDefault();

		if (!window.firebase || !window.firebase.database) {
			return false;
		}

		let value = document.getElementById('trip-name').value;

		if (!value) {
			return false;
		}

		if (LibLoader.isFireBaseReady()) {
			this.save();
		} else {
			setInterval(() => {
				if (LibLoader.isFireBaseReady()) {
					console.log('ready');
					this.save();
				}
			}, 500);
		}
	}

	save() {
		let value = document.getElementById('trip-name').value;
		firebase.database().ref('trips').once('value').then((response) => {
			let trips = response.val() || [];
			trips.push({ name: value });
			firebase.database().ref('trips').set(trips);
			window.localStorage.setItem('has_trips', true);
			route('/');
		});
	}

	render() {
		return (<form onSubmit={this.newTrip.bind(this)}>
			<input type="text" id="trip-name" class={style.newTrip} placeholder="Trip destination" />
			<input type="submit" style="opacity:0;" />
		</form>);
	}
}
