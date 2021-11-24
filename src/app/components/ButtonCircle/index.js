import React, { useRef, useCallback, memo } from 'react';
import { TouchableOpacity, Animated } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import roots from '../../styles/root';

const ButtonCircle = ({
	onSubmit,
	children,
	colors = ['rgb(0, 203, 255)', 'rgb(0, 123, 255)'],
}) => {
	const scaleBtn = useRef(new Animated.Value(1)).current;

	const handleOnPressIn = useCallback(() => {
		Animated.spring(scaleBtn, {
			toValue: 0.6,
			useNativeDriver: true,
		}).start();
	}, []);

	const handleOnPressOut = useCallback(() => {
		Animated.spring(scaleBtn, {
			toValue: 1,
			friction: 3,
			tension: 40,
			useNativeDriver: true,
		}).start();
	}, []);

	const animatedStyle = {
		transform: [{ scale: scaleBtn }],
	};

	return (
		<TouchableOpacity
			onPressIn={handleOnPressIn}
			onPressOut={handleOnPressOut}
			onPress={onSubmit}
			activeOpacity={1}
		>
			<Animated.View style={animatedStyle}>
				<LinearGradient
					colors={colors}
					style={[roots.btnRound, roots.dFlexCenter]}
				>
					{children}
				</LinearGradient>
			</Animated.View>
		</TouchableOpacity>
	);
};

export default memo(ButtonCircle);
