import React, { useState,useEffect } from 'react'
import { Animated } from 'react-native'
import { ListProps, Option, RenderItem, SelectorProps } from './type.select'
import { fontStyles } from '../../../../asset/constant/FontStyles'
import { stylesAlign } from '../../../../styling'
import { styles } from './style/DaySelector'

const OptionItem= ({item,color,showText,index,activeIndex}:RenderItem) => {
	const distance:number= index - activeIndex
	const [animationOption,setAnimationOption]= useState(new Animated.Value(0))
   
	const optionRotateX = (deg:number) => animationOption.interpolate({
		inputRange: [0, 1],
		outputRange: [`0deg`, `${deg}deg`]
	})
	
	const optionOpacity = animationOption.interpolate({
		inputRange: [0, 1],
		outputRange: [0, 1]
	})

	const optionAnimStyling= {
		transform: [
			{rotateX: optionRotateX(distance*2)},
		]
	}

	useEffect(() => {
		Animated.timing(animationOption, {
			toValue: 1,
			duration: 2000,
			useNativeDriver: true
		 }).start()
	},[])

	return (
		<Animated.Text style={[
			optionAnimStyling,
			fontStyles.Modal.CreateRequest.selector.option.font.style,
			styles.option,
			stylesAlign('alignSelf_center').container,		
		]}>{showText?item.value:''}</Animated.Text>      
	)
}
export default OptionItem