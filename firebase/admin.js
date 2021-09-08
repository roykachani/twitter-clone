import * as admin from 'firebase-admin';

const serviceAccount = require(process.env.FIREBASE_KEYS);

try {
	admin.initializeApp({
		credential: admin.credential.cert(serviceAccount),
		databaseURL: process.env.FIREBASE_DATA_BASE,
	});
} catch (e) {
	console.log(e);
}

export const firestore = admin.firestore();
