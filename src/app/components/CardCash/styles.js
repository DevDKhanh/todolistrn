import { StyleSheet, Dimensions } from 'react-native';
import colorBase from '../../styles/colorBase';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
	borderCard: {
		width: windowWidth * 0.8,
		height: windowWidth * 0.8,
		borderWidth: windowWidth * 0.04,
		borderColor: colorBase.lightPrimary,
		borderRadius: windowWidth,
		backgroundColor: colorBase.primary,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	mainCard: {
		width: windowWidth * 0.55,
		height: windowWidth * 0.55,
		backgroundColor: colorBase.light,
		borderRadius: windowWidth,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	textCard: {
		fontSize: 40,
	},
});

export default styles;
