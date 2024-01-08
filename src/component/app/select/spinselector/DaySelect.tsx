import React, { useState, useEffect , useRef } from "react"
import { Animated, Dimensions, View, FlatList } from 'react-native'
import { Color } from '../../../../asset/constant/Color'
import { Option, SelectorProps } from './type.select'
import OptionItem from './OptionItem'

const {width,height}= Dimensions.get('window')

const DaySelect = (props:SelectorProps) => {
	// const { selected,handleChange,options,id}=props
	const [activeIndex,setActiveIndex]= useState<number>(props.selected.id);
	
	const [animation,setAnimation]= useState(new Animated.Value(0));
  const lightRef= useRef<FlatList>(null)
  const darkRef= useRef<FlatList>(null)
	
	const itemWidth= width * 0.3
	const itemHeight= height * 0.25

	const scrollY = React.useRef(new Animated.Value(0)).current
	const onScroll = Animated.event(
		[{ nativeEvent: { contentOffset: { y: scrollY } } }],
		{ useNativeDriver: true }
	)
	const onItemIndexChange = React.useCallback(setActiveIndex, [])
	
	useEffect(() => {
		scrollY.addListener((v) => {
		  if (darkRef?.current) {
			 darkRef.current.scrollToOffset({
				offset: v.value,
				animated: false,
			 })
		  }
		})
	})
	
	useEffect(() => {
		Animated.timing(animation, {
			toValue: 1,
			duration: 2000,
			useNativeDriver: true
		 }).start()
	},[])

	const animationStyling = {
      opacity: 1,     
      transform: [        
         {     
            translateY: 
               animation.interpolate({
                  inputRange: [0,1,2],
                  outputRange: [-itemHeight/4,0,itemHeight/4],
               }),
         },   
      ],
   }

	async function onSelect(item:Option){
		try{
			props.handleChange(item)
		}catch(e){
			console.log(e)
		}
	}
	
	
	
	const containerStyling={
		paddingTop: height / 2 - itemHeight / 2,
		paddingBottom: height / 2 - itemHeight / 2,
		paddingHorizontal: '2%',
	}

	

	useEffect(() => {
		console.log('activeIndex updated',activeIndex)
	},[])
	
	return (		
		<View style={{height:height * 0.5}}>		
			<Animated.FlatList
			  	ref={lightRef}
			  	data={props.options}
				renderItem={({item,index}) => <OptionItem activeIndex={activeIndex} index={index} item={item} color={Color.black} showText={false} />}
			  	style={[
					  	animationStyling,
					{	
						position: 'absolute',
						backgroundColor: 'transparent',
						width: itemWidth,
						alignSelf: 'center',
						height: itemHeight,
						top: height / 10 - itemHeight / 2,
				}]}
				bounces={false}
				scrollEnabled={true}
				scrollEventThrottle={16}
				onScroll={onScroll}
			  	decelerationRate='fast'
			  	snapToInterval={itemHeight}
			  	showsVerticalScrollIndicator={false}
			  	renderToHardwareTextureAndroid
			  	contentContainerStyle={{
					paddingTop: 0,
					paddingBottom: height / 2 - itemHeight / 2,
					paddingHorizontal: '2%',
				}}
			  	
			/>
			<Animated.FlatList
			  	ref={darkRef}
			  	data={props.options}
				renderItem={({item,index}) => <OptionItem activeIndex={activeIndex} index={index} item={item} color={Color.gray1} showText={true} />}
			  	style={[
					animationStyling,
					{
					position: 'absolute',
					backgroundColor: 'transparent',
					alignSelf: 'center',
					width: itemWidth,
					height: itemHeight,
					top: height / 10 - itemHeight / 2,
				}]}
				bounces={false}
				scrollEnabled={true}
				scrollEventThrottle={16}
				onScroll={onScroll}
			  	decelerationRate='fast'
			  	snapToInterval={itemHeight}
			  	showsVerticalScrollIndicator={false}
			  	renderToHardwareTextureAndroid
			  	contentContainerStyle={{
					paddingTop: height / 5 - itemHeight / 2,
					paddingBottom: height / 2 - itemHeight / 2,
					paddingHorizontal: '2%',
				}}
				onMomentumScrollEnd={(ev) => {
					const newIndex = Math.round(
						ev.nativeEvent.contentOffset.y / itemHeight*2
					)
 
					if (onItemIndexChange) {
						onItemIndexChange(newIndex);
					}
			  }}
			/>
		</View>
		
	)
};

export default DaySelect;