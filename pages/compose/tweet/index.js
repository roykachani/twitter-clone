import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { AppLayout } from 'components/AppLayout';
import { Button } from 'components/Button';
import { useUser } from 'hooks/useUser';
import { addTwitt, upLoadImage } from 'firebase/client';
import { Avatar } from 'components/Avatar';

const COMPOSE_STATES = {
	USER_NOT_KNOWN: 0,
	LOADING: 1,
	SUCCESS: 2,
	ERROR: -1,
};

const DRAG_IMAGE_STATES = {
	ERROR: -1,
	NONE: 0,
	DRAG_OVER: 1,
	UPLOADING: 2,
	COMPLETE: 3,
};

const ComposeTweet = () => {
	const [message, setMessage] = useState();
	const [status, setStatus] = useState(COMPOSE_STATES.USER_NOT_KNOWN);

	const [drag, setDrag] = useState(DRAG_IMAGE_STATES.NONE);
	const [task, setTask] = useState(null);
	const [imgURL, setImageURL] = useState(null);

	const user = useUser();
	const router = useRouter();

	useEffect(() => {
		if (!!task) {
			const onProgress = () => {};
			const onError = () => {};
			const onComplete = () => {
				console.log('onComplete');
				task.snapshot.ref.getDownloadURL().then(setImageURL);
			};
			task.on('state_changed', onProgress, onError, onComplete);
		}
	}, [task]);

	//TextArea
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
				img: imgURL,
				userId: user.uid,
				username: user.username,
			});
			!!twit && (router.push('/home'), setStatus(COMPOSE_STATES.SUCCESS));
		} catch (e) {
			console.log(e);
			setStatus(COMPOSE_STATES.ERROR);
		}
	};

	//DragAndDrop
	const handleDragEnter = (e) => {
		e.preventDefault();
		setDrag(DRAG_IMAGE_STATES.DRAG_OVER);
	};

	const handleDragLeave = (e) => {
		e.preventDefault();
		setDrag(DRAG_IMAGE_STATES.NONE);
	};

	const handleDrop = (e) => {
		e.preventDefault();
		setDrag(DRAG_IMAGE_STATES.NONE);
		const file = e.dataTransfer.files[0];

		const task = upLoadImage(file);
		setTask(task);
	};
	//video 1:14
	const isButtonDisabled = !message || status === COMPOSE_STATES.LOADING;

	return (
		<>
			<AppLayout>
				<Head>
					<title>Crear un Twit / TwittCoff</title>
					<meta name="description" content="Crea tu twittCoff" />
				</Head>
				<section className="form-container">
					<section className="avatar-container">
						{!!user && <Avatar alt={user.avatar} src={user.avatar} />}{' '}
					</section>
					<form onSubmit={handleSubmit}>
						<textarea
							onChange={handleChange}
							onDragEnter={handleDragEnter}
							onDragLeave={handleDragLeave}
							onDrop={handleDrop}
							placeholder="¿Que esta pasando?"
						></textarea>
						{!!imgURL && (
							<section className="remove-img">
								<button onClick={() => setImageURL(null)}>X</button>
								<img src={imgURL} />
							</section>
						)}
						<div>
							<Button disabled={isButtonDisabled}>Twittear</Button>
						</div>
					</form>
				</section>
			</AppLayout>
			<style jsx>{`
				div {
					padding: 15px;
				}
				img {
					border-radius: 10px;
					height: auto;
					width: 100%;
				}
				.form-container {
					display: flex;
					align-items: flex-start;
				}
				.avatar-container {
					padding-top: 20px;
					padding-left: 10px;
				}
				.remove-img {
					position: relative;
				}
				button {
					background: rgba(0, 0, 0, 0.3);
					border: 0;
					border-radius: 999px;
					width: 39px;
					height: 39px;
					top: 15px;
					position: absolute;
					right: 15px;
				}
				form {
					padding: 10px;
				}
				textarea {
					border: ${drag === DRAG_IMAGE_STATES.DRAG_OVER
						? '3px dashed #09f'
						: '3px solid transparent'};
					border-radius: 10px;
					width: 100%;
					min-height: 200px;
					outline: 0;
					font-size: 21px;
					resize: none;
				}
			`}</style>
		</>
	);
};

export default ComposeTweet;
