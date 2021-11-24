import { StyleSheet } from 'react-native';
import colorBase from '../../styles/colorBase';

const styles = StyleSheet.create({
	header: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		padding: 10,
		paddingLeft: 20,
		backgroundColor: '#fff',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.36,
		shadowRadius: 6.68,
		elevation: 2,
	},
});

export default styles;
