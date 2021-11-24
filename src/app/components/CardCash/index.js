import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const CardCash = ({ cash = 0 }) => {
	return (
		<View style={styles.borderCard}>
			<View style={styles.mainCard}>
				<Text style={styles.textCard}>{cash} VND</Text>
			</View>
		</View>
	);
};

export default CardCash;
