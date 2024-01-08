import { ViewStyle,TextStyle,Text,View } from 'react-native'
import { FontStyling } from '../../../type/type.app'
import { Color, ColorValues } from '../../../asset/constant/Color'

const TextInCircle= (
	{text,fontSize,fontWeight,size,borderColor,borderWidth,backgroundColor,color}
	:{
		text: string,
		fontWeight?: FontStyling['fontWeight'],
		fontSize?: FontStyling['fontSize'],
		borderWidth?: number,
		borderColor?: string,
		backgroundColor?:string
		size?: number,
		color: ColorValues
	}) => {
	
	const containerStyle:ViewStyle={
		width: size ?size :25,
		height: size ?size :25,
		borderRadius: 30,
		borderColor: borderColor ?borderColor :Color.blue,
		borderWidth: borderWidth ?borderWidth :2,
		backgroundColor: backgroundColor ?backgroundColor :Color.white,
		alignSelf: 'center',
		justifyContent: 'center',
		marginHorizontal: '1%',
	}
	const textStyle:TextStyle={
		color: color ?color :Color.blue,
		fontSize: fontSize ?fontSize :15,
		fontWeight: fontWeight ?fontWeight :'500',
		textAlign: 'center',
		alignSelf: 'center',
		justifyContent:'center'
	}

	return (
		<View style={containerStyle}>
			<Text style={textStyle}>{text}</Text>
		</View>
	)
}

export default TextInCircle