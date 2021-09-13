import Twittcoff from 'components/Twittcoff';

const TweetPage = (props) => {
	return (
		<>
			<Twittcoff {...props} />
		</>
	);
};
export default TweetPage;

export async function getServerSideProps(contex) {
	const { params, res } = contex;
	const { id } = params;
	try {
		const apiResponse = await fetch(`http://localhost:3000/api/tweets/${id}`);
		const props = await apiResponse.json();
		return { props };
	} catch (error) {
		res.writeHead(307, { Location: '/home' }).end();
		return {
			props: {
				ok: false,
				reason:
					'some error description for your own consumption, not for client side',
			},
		};
	}
}
