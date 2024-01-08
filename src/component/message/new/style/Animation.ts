import { Dimensions } from 'react-native'
const { width}= Dimensions.get('window')

export const interpolationOpacity={
	inputRange: [0, 1],
	outputRange: [0,1],
}
export const interpolationX={
	inputRange: [0, 1],
	outputRange: [0,0],
}
export const interpolationY={
	inputRange: [0, 1],
	outputRange: [30,0],
}
export const interpolationReverseX={
	inputRange: [0, 1],
	outputRange: [-10,0],
}
export const interpolationReverseY={
	inputRange: [0, 1],
	outputRange: [-10,0],
}

