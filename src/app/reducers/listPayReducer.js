import { ADD_NEW, LOAD_LIST, DELETE_ITEM } from '../constants/typeListPay';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
	listPay: [],
};

const listPayReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ADD_NEW:
			(async () => {
				await AsyncStorage.setItem(
					'listPay',
					JSON.stringify([payload, ...state.listPay]),
				);
			})();
			return { ...state, listPay: [payload, ...state.listPay] };
		case DELETE_ITEM:
			const listNew = state.listPay.filter(item => item.id !== payload);
			(async () => {
				await AsyncStorage.setItem('listPay', JSON.stringify(listNew));
			})();
			return { ...state, listPay: listNew };
		case LOAD_LIST:
			return { ...state, listPay: payload };
		default:
			return state;
	}
};

export default listPayReducer;
