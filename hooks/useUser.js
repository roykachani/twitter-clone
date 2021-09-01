import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import { onAuthStateChanged } from 'firebase/client';

export const USER_STATES = {
	NOT_LOGGED: null,
	NOT_KNOWN: undefined,
};

export const useUser = () => {
	const [user, setUser] = useState(USER_STATES.NOT_KNOWN);
	const router = useRouter();

	useEffect(() => {
		onAuthStateChanged(setUser);
	}, []);

	useEffect(() => {
		user === USER_STATES.NOT_LOGGED && router.push('/');
	}, []);

	return user;
};
