import { h, Component } from 'preact';
import style from './style';

export default class NoTrips extends Component {

	render() {
		return (<div class={style.NoTrips}>
			<div>
				<img src="/assets/no_trips.png" alt="No trips" width="100" />
				<h3>No trips yet</h3>
				<p>When you start planning, your trips will live here.</p>
			</div>
		</div>);
	}
}
