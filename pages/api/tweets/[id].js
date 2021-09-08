import { firestore } from 'firebase/admin';

export default async (req, res) => {
	try {
		const { query } = req;
		const { id } = query;

		const doc = await firestore.collection('twits').doc(id).get();
		const data = doc.data();
		const { createdAt } = data;

		res.status(200).json({
			...data,
			id,
			createdAt: +createdAt.toDate(), //operador unitario
		});
	} catch (e) {
		res.status(404).end();
	}
};
