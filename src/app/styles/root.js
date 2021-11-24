import { StyleSheet } from 'react-native';

const roots = StyleSheet.create({
	dFlexCenter: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	mainPage: {
		backgroundColor: '#fff',
		height: '100%',
	},
	btnRound: {
		height: 70,
		width: 70,
		backgroundColor: '#ccc',
		borderRadius: 50,
	},
	positionFull: { position: 'absolute', left: 0, right: 0, top: 0 },
});

export default roots;
