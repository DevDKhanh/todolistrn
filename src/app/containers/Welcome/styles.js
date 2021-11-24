import { StyleSheet } from 'react-native';
import colorBase from '../../styles/colorBase';

const styles = StyleSheet.create({
	imgWelcome: { width: '100%', height: 400 },
	styleWelcome: {
		padding: 10,
		fontFamily: 'Roboto Slab',
	},
	styleTextTitle: {
		fontSize: 40,
		color: colorBase.primary,
		fontWeight: '700',
	},
	styleInput: {
		padding: 10,
		width: '80%',
		fontSize: 17,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: colorBase.secondary,
	},
});

export default styles;
