import {Dimensions,StyleSheet} from 'react-native'
const {height}= Dimensions.get('window')

export const styles= (top:number) => StyleSheet.create({
	container:{
		flex: 1, 
		position:'absolute',
		top: height*top,left:0,bottom:0,right:0,
	}
})