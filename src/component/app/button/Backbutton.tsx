import { Pressable,ViewStyle,TextStyle } from 'react-native'
import { AsyncVoid } from '../../../type/type.nav'
import { TextInCircle } from '../text/index'
import { FontStyling } from '../../../type/type.app'
import { Color,ColorValues } from '../../../asset/constant/Color'

type PropType={
	styles?:{
		container?: ViewStyle,
		text?: FontStyling,
		border?:{
			color: ColorValues
		}
	},
	onClickFn: AsyncVoid
}
const Backbutton= (props:PropType) => {

	const defContainerStyle= {

	}
	const border= {
		color: props?.styles?.border?.color ?props.styles.border.color : Color.transparent
	}
	const text={
		weight: props?.styles?.text?.fontWeight ?props.styles.text.fontWeight : '500',
		size: props?.styles?.text?.fontSize ?props.styles.text.fontSize :15,
		color: props?.styles?.text?.color ?props.styles.text.color : Color.black,
		bgColor: props?.styles?.text?.backgroundColor ?props.styles.text.backgroundColor : Color.transparent,
	}

	return (
		<Pressable 
			style={[
				props?.styles?.container? props.styles.container :defContainerStyle
			]}
			onPress={props.onClickFn} 
		>
			<TextInCircle fontWeight={text.weight} fontSize={text.size} size={24} text={`<`} borderWidth={1} borderColor={border.color} color={text.color} backgroundColor={text.bgColor} />
		</Pressable>
	)
}
export default Backbutton