import { ADD_NEW, DELETE_ITEM, LOAD_LIST } from '../constants/typeListPay';

export const loadList = list => {
	return { type: LOAD_LIST, payload: list };
};

export const addNew = item => {
	return { type: ADD_NEW, payload: item };
};

export const deleteItem = id => {
	return { type: DELETE_ITEM, payload: id };
};
