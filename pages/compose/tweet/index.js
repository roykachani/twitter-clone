import { useState } from 'react';

const { AppLayout } = require('components/AppLayout');
const { Button } = require('components/Button');

const ComposeTweet = () => {
	const [message, setMessage] = useState();
	const user = useUser();

	return (
		<>
			<AppLayout>
				<form>
					<textarea placeholder="¿Que esta pasando?"></textarea>
					<div>
						<Button>Twittear</Button>
					</div>
				</form>
			</AppLayout>
			<style jsx>{`
				div {
					padding: 15px;
				}
				textarea {
					width: 100%;
					min-height: 200px;
					outline: 0;
					font-size: 21px;
					border: 0;
					resize: none;
				}
			`}</style>
		</>
	);
};

export default ComposeTweet;
