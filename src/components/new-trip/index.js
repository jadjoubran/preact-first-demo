import { h, Component } from 'preact';
import style from './style';

export default class NewTrip extends Component {

	newTrip(event){
		event.preventDefault();
		let value = document.getElementById('trip-name').value;

		if (!value){
			return false;
		}

		let trips = window.localStorage.getItem('trips') || "[]";

		trips = JSON.parse(trips);
		trips.push({name: value});
		window.localStorage.setItem('trips', JSON.stringify(trips));
		window.location.href = "/";
	}

	render() {
		return (<form onSubmit={this.newTrip}>
			<input type="text" id="trip-name" class={style.newTrip} placeholder="Trip destination" />
			<input type="submit" style="opacity:0;"/>
		</form>);
	}
}
