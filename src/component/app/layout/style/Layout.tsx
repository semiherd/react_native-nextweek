import {Dimensions,StyleSheet} from 'react-native'
const {width}= Dimensions.get('window')
import {AlignOptions} from '../../../../type/type.app'

export const stylesCol= (colNr:number,alignOption?:AlignOptions) => StyleSheet.create({
	container:{
		flex:  colNr,
		justifyContent: alignOption || 'center',
		flexDirection: "column",
	}
})

export const stylesRow= (rowWidth:number,alignOption:AlignOptions) => StyleSheet.create({
	container:{
		flexDirection: "row",
		width: width * rowWidth,
		justifyContent: alignOption || 'center',
	}
})