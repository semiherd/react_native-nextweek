import {Dimensions,StyleSheet} from 'react-native'

const {width,height} = Dimensions.get('window')

export const styles= StyleSheet.create({
	flex:{
		display: 'flex',
		flexDirection: 'row',
		marginHorizontal: 0,
		width: width * 0.85,
		transform:[
			{translateX: width*0.075}
		],
	},
	spaceAround:{
		justifyContent: 'space-between',
	},			
})


