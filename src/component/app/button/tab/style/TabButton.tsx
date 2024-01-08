import {Dimensions,StyleSheet} from 'react-native'
import { ColorValues } from '../../../../../asset/constant/Color'
import { ButtonStyling } from '../type.tab'

const {width,height} = Dimensions.get('window')

export const styles= ({state,l,styling}:
	{state:boolean,l:number,styling:ButtonStyling}
) => StyleSheet.create({
	tabButton:{
		backgroundColor: state
			?	styling.backgroundColor.selected
			:	styling.backgroundColor.default,
		height: height * 0.1,
		paddingHorizontal: 0,
		marginVertical: 0,
		borderRadius: state?5:0,
		width: (width/l) * 0.85,
		justifyContent: 'space-around'
	},
})


