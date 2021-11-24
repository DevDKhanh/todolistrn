import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, TouchableWithoutFeedback } from 'react-native';

import { deleteItem } from '../../actions/actionsListPay';
import styles from './styles';

const CardItemPay = ({ namePay, price, date, id }) => {
	const dispatch = useDispatch();
	const handleDelete = () => {
		dispatch(deleteItem(id));
	};

	return (
		<TouchableWithoutFeedback
			delayLongPress={1000}
			onLongPress={handleDelete}
		>
			<View style={styles.cardItem}>
				<Text style={styles.textName}>{namePay}</Text>
				<View style={styles.textInfo}>
					<Text style={styles.textPrice}>{price} VND</Text>
					<Text style={styles.textDate}>{date}</Text>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default memo(CardItemPay);
