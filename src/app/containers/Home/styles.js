import { StyleSheet, Dimensions } from 'react-native';
import colorBase from '../../styles/colorBase';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
	main: {
		position: 'relative',
		display: 'flex',
		backgroundColor: colorBase.light,
	},
	btnAdd: {
		position: 'absolute',
		bottom: 0,
		right: 0,
		borderWidth: 8,
		borderRadius: 50,
		borderColor: colorBase.lightPrimary,
		backgroundColor: colorBase.lightPrimary,
	},
	cardCash: {
		margin: 20,
	},
	listPay: {
		flex: 1,
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		padding: 10,
		backgroundColor: colorBase.lightPrimary,
	},
});

export default styles;
