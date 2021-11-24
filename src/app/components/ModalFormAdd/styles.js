import { StyleSheet, Dimensions } from 'react-native';
import colorBase from '../../styles/colorBase';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
	modalAdd: {
		backgroundColor: colorBase.light,
		height: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	formAdd: {
		width: windowWidth * 0.85,
	},
	input: {
		borderColor: colorBase.secondary,
		borderWidth: 1,
		padding: 10,
		marginBottom: 10,
	},
	groupBtn: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
});

export default styles;
