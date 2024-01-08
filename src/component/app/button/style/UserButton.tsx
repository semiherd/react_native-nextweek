import { Dimensions,StyleSheet } from 'react-native'
import { Color} from '../../../../asset/constant/Color'
import { UserButtonType,BorderStyle, FontStyling } from '../../../../type/type.app'
const { width } = Dimensions.get('window')

export const styles= (
	useBorder:boolean,
	fontStyles: FontStyling,
	borderStyles?: BorderStyle,
	w?:number,
) => StyleSheet.create({	
	text:{
		fontFamily: fontStyles.fontFamily || 'Lato',
		fontSize: fontStyles.fontSize || 15,
		fontWeight: fontStyles.fontWeight || '500',
		backgroundColor: fontStyles.backgroundColor || 'transparent',
		color: fontStyles.color? fontStyles.color:Color.blue,
		lineHeight: fontStyles.lineHeight || 15,
		textAlign: 'center',	
		overflow: 'hidden',
		padding: '1%',
	},
	container:{
		backgroundColor: fontStyles.backgroundColor || 'transparent',
		overflow: 'hidden',
		width: w? width*w : 'auto',
		height: w ?width*w*0.35 : 'auto',
		justifyContent: 'center',
		alignSelf: 'center',
	},
	center:{
		alignSelf: 'center',
		marginHorizontal: width*0.01,
		marginVertical: '0.5%',
	},
	borderStyle: useBorder
		? {
			borderColor: borderStyles?.borderColor	?borderStyles.borderColor :Color.blue,
			borderWidth: borderStyles?.borderWidth ?borderStyles.borderWidth :1,
			borderRadius: borderStyles?.borderRadius ?borderStyles.borderRadius :0,
			padding: '2%',
		}
		: {
			borderWidth: 0,
			borderRadius: borderStyles?.borderRadius,
			padding: '1%'
		}
})


