import React from "react"
import { View } from 'react-native'
import { TitleWithButtonProps } from '../../../type/type.app'
import { styles } from './style/TitleWithButton'
import Title from './Title'
import UserButton from '../button/UserButton'

function TitleWithButton <T extends object>(props:TitleWithButtonProps<T>) {
  	
	return (
	 	<View style={[styles.flex,styles.spaceAround]}>
			<Title titletext={props.titletext} fontStyling={props.fontStyles} />
			<UserButton<T>
				buttontext={props.buttontext}
				onClickFn={props.onClickFn}
				onClickParam={props.onClickParam}
				useBorder={props.useBorder}
				fontStyles={{fontSize:13,fontWeight:'500'}}
			/>	
	 	</View>
  	)
};

export default TitleWithButton;
