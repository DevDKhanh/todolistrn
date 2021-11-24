import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { addNameUser, sign } from '../actions/actionsAuth';
import { loadList } from '../actions/actionsListPay';

const CurrentUser = ({ children }) => {
	const [loading, setLoading] = useState(true);
	const dispatch = useDispatch();
	useEffect(() => {
		(async () => {
			try {
				const value = await AsyncStorage.getItem('name_user');
				const listLoad = await AsyncStorage.getItem('listPay');

				if (value !== null) {
					dispatch(addNameUser(value));
					dispatch(sign());
					setLoading(false);
					if (listLoad !== null) {
						dispatch(loadList(JSON.parse(listLoad)));
					}
				} else {
					setLoading(false);
				}
			} catch (err) {
				setLoading(false);
			}
		})();
	}, []);
	return <>{!loading && children}</>;
};

export default CurrentUser;
