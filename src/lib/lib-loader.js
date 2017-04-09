export default class LibLoader {
	static _isFirebaseReady = 0;

	static incrementFirebaseReady(value) {
		this._isFirebaseReady += 1;
		if (this.isFireBaseReady()) {
			this.startFireBase();
		}
	};

	static isFireBaseReady() {
		return this._isFirebaseReady >= 2;
	};

	static startFireBase() {
		console.log('starting firebase');
		const config = {
			apiKey: "AIzaSyA8xdmK3EOp0IU2b0I8GwPwppq9xEu9mzo",
			authDomain: "nomado-48295.firebaseapp.com",
			databaseURL: "https://nomado-48295.firebaseio.com",
			projectId: "nomado-48295",
			storageBucket: "nomado-48295.appspot.com",
			messagingSenderId: "879469167238"
		};
		firebase.initializeApp(config);
	}
}
