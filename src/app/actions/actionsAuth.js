import { ADD_USER_NAME, SIGN } from '../constants/typeAuth';

export const addNameUser = nameUser => {
	return { type: ADD_USER_NAME, payload: nameUser };
};

export const sign = () => {
	return { type: SIGN };
};
