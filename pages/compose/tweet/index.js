import { useState } from 'react';

import { AppLayout } from 'components/AppLayout';
import { Button } from 'components/Button';
import { useUser } from 'hooks/useUser';
import { addTwitt } from 'firebase/client';
import { useRouter } from 'next/router';

const COMPOSE_STATES = {
	USER_NOT_KNOWN: 0,
	LOADING: 1,
	SUCCESS: 2,
	ERROR: -1,
};

const ComposeTweet = () => {
	const user = useUser();
	const [message, setMessage] = useState();
	const [status, setStatus] = useState(COMPOSE_STATES.USER_NOT_KNOWN);
	const router = useRouter();

	const handleChange = (e) => {
		const { value } = e.target;
		console.log(value);
		setMessage(value);
	};

	const handleSubmit = (e) => {
		try {
			e.preventDefault();
			setStatus(COMPOSE_STATES.LOADING);

			const twit = addTwitt({
				avatar: user.avatar,
				content: message,
				userId: user.uid,
				username: user.username,
			});
			!!twit && (router.push('/home'), setStatus(COMPOSE_STATES.SUCCESS));
		} catch (e) {
			console.log(e);
			setStatus(COMPOSE_STATES.ERROR);
		}
	};

	const isButtonDisabled = !message || status === COMPOSE_STATES.LOADING;

	return (
		<>
			<AppLayout>
				<form onSubmit={handleSubmit}>
					<textarea
						onChange={handleChange}
						placeholder="¿Que esta pasando?"
					></textarea>
					<div>
						<Button disabled={isButtonDisabled}>Twittear</Button>
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
