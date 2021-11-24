import React, { useState, useCallback, memo } from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, Image, TextInput, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { addNameUser, sign } from '../../actions/actionsAuth';
import ButtonCircle from '../../components/ButtonCircle';
import imgWelcome from '../../assets/bg-native.png';
import { Icon } from 'react-native-elements';
import styles from './styles';
import roots from '../../styles/root';

const Welcome = ({ navigation }) => {
	const dispatch = useDispatch();
	const [nameUser, setNameUser] = useState('');

	const handleSubmit = useCallback(() => {
		if (nameUser.length > 30) {
			Alert.alert('Hi my friend', 'Your entered name is too long!');
			setNameUser('');
		} else if (nameUser !== '') {
			(async () => {
				try {
					await AsyncStorage.setItem('name_user', nameUser);
					setNameUser('');
					dispatch(addNameUser(nameUser));
					dispatch(sign());
					navigation.navigate('Home');
				} catch (err) {
					Alert.alert('Error', "Something isn't wrong!");
				}
			})();
		} else {
			Alert.alert('Hi my friend', 'Please enter your name, thank you!');
		}
	}, [nameUser]);

	return (
		<View style={[roots.mainPage, { display: 'flex' }]}>
			<Image source={imgWelcome} style={styles.imgWelcome} />
			<View style={[roots.dFlexCenter, styles.styleWelcome]}>
				<Text style={styles.styleTextTitle}>Welcome</Text>
				<Text style={{ fontSize: 18 }}>{nameUser}</Text>
			</View>
			<View style={[roots.dFlexCenter, { padding: 10, flex: 1 }]}>
				<TextInput
					style={[styles.styleInput]}
					onChangeText={setNameUser}
					defaultValue={nameUser}
					placeholder="Enter your name"
				/>
				<View style={[{ flex: 1 }, roots.dFlexCenter]}>
					<ButtonCircle onSubmit={handleSubmit}>
						<Icon
							name="arrow-forward-outline"
							type="ionicon"
							color="#fff"
							size={32}
						/>
					</ButtonCircle>
				</View>
			</View>
		</View>
	);
};

export default memo(Welcome);
