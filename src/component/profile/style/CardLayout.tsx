import {Dimensions,StyleSheet} from 'react-native'
const {width}= Dimensions.get('window')

export const styles= StyleSheet.create({
	container:{
		paddingVertical: '4%',
		marginVertical: '2%',
	}
})

export const styleCardWidth= (cardWidth:number) => StyleSheet.create({
	xIcon: {
		justifyContent: 'flex-end',
		top: '0%',
		left: '95%'
	}
})

export const styleBorder= (borderColor:string) => StyleSheet.create({
	border: {
		borderColor: borderColor,
	}
})

export const styleMargin= (useMargin:number,useBottomSeperator:number) => StyleSheet.create({
	useMargin:
		useMargin>0
			? 	{
					borderWidth: 0.5,
					borderRadius: 10,
					marginVertical: width*useMargin,
			}
			:  {
					borderBottomWidth: useBottomSeperator,
			} 
})