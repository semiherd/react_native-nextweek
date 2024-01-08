import { Pressable,GestureResponderEvent } from 'react-native'
import { ColorValues } from '../../../asset/constant/Color'

type OnPressEvent= {
	e: GestureResponderEvent
}
type LikeState= {
	like: boolean
}
type OnClickParam= {
	id: string
}

const PressIcon= <T extends OnClickParam,S extends LikeState> (
	{icon,bg,item,state,onPress}:
	{	
		icon: React.ReactElement,
		bg: ColorValues
		item: T,
		state: S,
		onPress: (item:T,state:S) => void
	}) => {

	return (
		<Pressable 
			onPress={() => onPress(item,state)}	
			style={{
				alignSelf:'center',
				backgroundColor: bg,
				padding: '2%',
				marginHorizontal: '2%',
				borderRadius: 5
			}}
		>
			{icon}
		</Pressable>
	)
}

export default PressIcon