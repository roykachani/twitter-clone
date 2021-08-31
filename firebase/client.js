import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyCnqgjGYcoif4SIFCjxQHbZTXuP-0u_uxE',
	authDomain: 'twittcoff.firebaseapp.com',
	projectId: 'twittcoff',
	storageBucket: 'twittcoff.appspot.com',
	messagingSenderId: '707157040578',
	appId: '1:707157040578:web:071c05bd51dd13a9100a5b',
	measurementId: 'G-F4M38F6Z9W',
};

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

const mapUserAuth = (user) => {
	const { displayName, email, photoURL } = user;

	return {
		avatar: photoURL,
		username: displayName,
		email,
	};
};

export const onAuthStateChanged = (onChange) => {
	return firebase.auth().onAuthStateChanged((user) => {
		const normalizeUser = user ? mapUserAuth(user) : null;
		// console.log('efect');
		onChange(normalizeUser);
	});
};

export const loginGitHub = () => {
	// console.log('clik');
	const githubProvider = new firebase.auth.GithubAuthProvider();
	return firebase.auth().signInWithPopup(githubProvider);
};
