import { useState } from 'react';

import { AppLayout } from 'components/AppLayout';
import { Button } from 'components/Button';
import { useUser } from 'hooks/useUser';
import { addTwitt } from 'firebase/client';
import { useRouter } from 'next/router';

const ComposeTweet = () => {
	const user = useUser();
	const [message, setMessage] = useState();
	const router = useRouter();

	const handleChange = (e) => {
		const { value } = e.target;
		console.log(value);
		setMessage(value);
	};

	const handleSubmit = (e) => {
		try {
			e.preventDefault();
			addTwitt({
				avatar: user.avatar,
				content: message,
				userId: user.uid,
				username: user.username,
			});
			router.push('/home');
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<>
			<AppLayout>
				<form onSubmit={handleSubmit}>
					<textarea
						onChange={handleChange}
						placeholder="¿Que esta pasando?"
					></textarea>
					<div>
						<Button disabled={!message}>Twittear</Button>
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
