import { StyleSheet } from 'react-native';
import colorBase from '../../styles/colorBase';

const styles = StyleSheet.create({
	cardItem: {
		backgroundColor: '#fff',
		padding: 10,
		marginBottom: 20,
		borderRadius: 15,
		shadowColor: colorBase.secondary,
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.1,
		shadowRadius: 1,
		elevation: 2,
	},
	textInfo: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	textName: {
		fontSize: 23,
		fontWeight: '700',
		color: colorBase.primary,
	},
	textPrice: {
		fontSize: 18,
		color: colorBase.primary,
	},
	textDate: {
		fontSize: 14,
		color: colorBase.orange,
	},
});

export default styles;
