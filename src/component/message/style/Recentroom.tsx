import {StyleSheet,Dimensions} from 'react-native';
const {width,height} = Dimensions.get('window');

const styles= StyleSheet.create({
	imageMessage:{
		width: width * 0.75,
		aspectRatio: 4/3,
		resizeMode:'cover',
	}
})

export {
	styles
}