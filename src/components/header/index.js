import { h, Component } from 'preact';
import { Link } from 'preact-router';
import style from './style';

export default class Header extends Component {
	render() {
		let title = "My trips";

		return (
			<div>
				<header class={style.header}>
					<h1>{title}</h1>
					{/*<nav>
					<Link href="/">Home</Link>
					<Link href="/profile">Me</Link>
					<Link href="/profile/john">John</Link>
				</nav>*/}
				</header>
				<div class={style.blindHeader}></div>
			</div>
		);
	}
}
