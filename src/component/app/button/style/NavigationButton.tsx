import { Dimensions,StyleSheet } from 'react-native'
import { Color} from '../../../../asset/constant/Color'
import { BorderStyle, FontStyling } from '../../../../type/type.app'

const { width,height } = Dimensions.get('window')

export const styles= (
	font: FontStyling,
	border: BorderStyle,
	useBorder: boolean,
	w?:number,
	h?:number	
) => StyleSheet.create({	
	text:{
		fontFamily: font.fontFamily? font.fontFamily :'Lato',
		fontSize: font.fontSize ?font.fontSize :15,
		fontWeight: font.fontWeight ?font.fontWeight :'500',
		backgroundColor: font.backgroundColor ?font.backgroundColor :'transparent',
		color: font.color ?font.color :Color.blue,
		lineHeight: font.lineHeight ?font.lineHeight :15,
		overflow: 'hidden',
		textAlign: 'center',	
		alignSelf: 'center',
		justifyContent: 'center',
	},
	container:{
		backgroundColor: font.backgroundColor || 'transparent',
		overflow: 'hidden',
		width: w? width*w : width*0.15,
		height: h 
			?	height*h
			:	w	
				?	width*w*0.35 
				: width*0.05,
	},
	center:{
		justifyContent: 'center',
		alignSelf: 'center',
		marginHorizontal: width*0.02,
		marginVertical: '2%',
	},
	border: useBorder
		? {
			borderColor: border?.borderColor	?border.borderColor :Color.blue,
			borderWidth: border?.borderWidth ?border.borderWidth :1,
			borderRadius: border?.borderRadius ?border.borderRadius :0,
			padding: '2%',
		}
		: {
			borderWidth: 0,
			borderRadius: border?.borderRadius,
			padding: '1%'
		}
})


