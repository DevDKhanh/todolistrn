import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CurrentUser from '../helper/CurrentUser';
import Welcome from '../containers/Welcome';
import Home from '../containers/Home';
const Stack = createNativeStackNavigator();

const Navigation = () => {
	const { isSign } = useSelector(state => state.auth);

	return (
		<CurrentUser>
			<NavigationContainer>
				<Stack.Navigator initialRouteName="Welcome">
					{!isSign ? (
						<Stack.Screen
							name="Welcome"
							component={Welcome}
							options={{
								headerShown: false,
							}}
						/>
					) : (
						<>
							<Stack.Screen
								name="Home"
								component={Home}
								options={{
									headerShown: false,
								}}
							/>
						</>
					)}
				</Stack.Navigator>
			</NavigationContainer>
		</CurrentUser>
	);
};

export default Navigation;
