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

const db = firebase.firestore();

const mapUserAuth = (user) => {
	const { displayName, email, photoURL, uid } = user;

	return {
		avatar: photoURL,
		username: displayName,
		email,
		uid,
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

export const addTwitt = ({ avatar, content, img, userId, username }) => {
	return db.collection('twits').add({
		avatar,
		content,
		img,
		userId,
		username,
		createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
		likesCount: 0,
		sharedCount: 0,
	});
};
const mapTeewtFromFirebaseToObjet = (doc) => {
	const data = doc.data();
	const id = doc.id;
	const { createdAt } = data;

	return {
		...data,
		id,
		createdAt: +createdAt.toDate(), //operador unitario
	};
};

export const listenlatestTwitts = (callback) => {
	return db
		.collection('twits')
		.orderBy('createdAt', 'desc')
		.limit(25)
		.onSnapshot(({ docs }) => {
			const newTweets = docs.map(mapTeewtFromFirebaseToObjet);
			callback(newTweets);
		});
};

export const upLoadImage = (file) => {
	const ref = firebase.storage().ref(`images/${file.name}`);
	const task = ref.put(file);
	return task;
};
