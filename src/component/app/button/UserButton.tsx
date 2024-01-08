import React from "react"
import { Pressable,Text } from 'react-native'
import { UserButtonType } from '../../../type/type.app'
import {styles} from './style/UserButton'

const UserButton = <T extends object>( props: UserButtonType<T>) => {
	const { onClickParam,buttontext,onClickFn,useBorder,borderStyles,fontStyles,width}= props
	return (
		<Pressable style={[
			styles(useBorder,fontStyles,borderStyles,width).container,
			styles(useBorder,fontStyles,borderStyles,width).container,
			styles(useBorder,fontStyles,borderStyles,width).center,
			styles(useBorder,fontStyles,borderStyles,width).borderStyle
		]} 
			onPress={() => onClickFn(onClickParam)}
		>
			<Text style={[
				styles(useBorder,fontStyles).text
			]}>{buttontext}</Text>
		</Pressable>
   )
};

export default UserButton;
