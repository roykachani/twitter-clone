import Twittcoff from 'components/Twittcoff';

const TweetPage = (props) => {
	return (
		<>
			<Twittcoff {...props} />
			<style jsx>{``}</style>
		</>
	);
};

export default TweetPage;

export const getServerSideProps = async (context) => {
	const { params, res } = context;
	const { id } = params;

	const apiResponse = await fetch(`http://localhost:3000/api/tweets/${id}`);
	if (apiResponse.ok) {
		const props = await apiResponse.json();
		return { props };
	}
	if (res) {
		res.writeHead(301, { Location: '/home' }).end();
	}
};
