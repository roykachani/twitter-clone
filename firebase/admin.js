import * as admin from 'firebase-admin';

const serviceAccount = require('./firebase-keys.json');

try {
	admin.initializeApp({
		credential: admin.credential.cert(serviceAccount),
		databaseURL: 'https://twittcoff-default-rtdb.firebaseio.com',
	});
} catch (e) {
	console.log(e);
}

export const firestore = admin.firestore();
