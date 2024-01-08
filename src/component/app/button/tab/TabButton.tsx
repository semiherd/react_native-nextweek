import React from 'react'
import { Dimensions, View } from 'react-native'
import { UserButtonType } from '../../../../type/type.app'
import { styles } from './style/TabButton'
import { ButtonStyling, TabItem } from './type.tab'
import { UserButton } from '../index'
import { Color } from '../../../../asset/constant/Color'

const { width } = Dimensions.get('window')

function TabButton<T>(
	props:{
		item: TabItem<T>,
		l: number
		fn: UserButtonType<{value:TabItem<T>}>['onClickFn']
		styling: ButtonStyling
	}):React.ReactElement {
		
	const { item, l, fn, styling }= props
	
	const style={	
		...styling,
		fontSize: width * 0.03,
		backgroundColor: item.state
			? styling.backgroundColor.selected || Color.transparent
			: styling.backgroundColor.default || Color.transparent,
		color:item.state
			? styling.color.selected || Color.transparent
			: styling.color.default || Color.transparent
	}
	return (
		<View style={[styles({state:item.state,l,styling}).tabButton]}>
			<UserButton 
				buttontext={item.text}
				onClickFn={fn}
				onClickParam={{value:item}}
				useBorder={false}
				fontStyles={style}
			/>
		</View>
	)
}
export default TabButton