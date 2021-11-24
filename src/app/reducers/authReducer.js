import { ADD_USER_NAME, SIGN } from '../constants/typeAuth';

const initialState = {
	nameUser: '',
	isSign: false,
};

const authReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ADD_USER_NAME:
			return { ...state, nameUser: payload };
		case SIGN:
			return { ...state, isSign: true };

		default:
			return state;
	}
};

export default authReducer;
