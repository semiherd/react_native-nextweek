import React,{ useEffect, useState } from "react"
import SubContainer from '../../../../component/app/layout/SubContainer'
import VectorIcon from '../../../../component/app/icon/VectorIcon'
import Time from './Time'
import TimeLayout from './TimeLayout'
import DaySelect from '../../../../component/app/select/spinselector/DaySelect'
import { Color } from '../../../../asset/constant/Color'
import { Title } from '../../../../component/app/text/index'
import { FontStyling } from '../../../../type/type.app'
import { fontStyles } from '../../../../asset/constant/FontStyles'
import { TabItem } from '../../../../component/app/button/tab/type.tab'
import { useModalDispatch } from '../../../../context/modal/ModalContext'
import { Item } from './Item'
import { Pressable } from 'react-native'

const ToggleIcon= ({state,onPress}:{state:boolean,onPress:() => void}) => 
	<Pressable onPress={() =>onPress()}>
		<VectorIcon type={"fontawesome"} size={30} name={state?'toggle-on':'toggle-off'} color={Color.gray} />
	</Pressable>


function Shift<TVal>(props:TabItem<TVal>){
	const { insertInput }= useModalDispatch()
	const [allDay,setAllDay]= useState<boolean>(false)
	const [state,setState]= useState<boolean>(false)
	
	const containerStyles={
		containerWidth: 0.9,
		containerHeight: 1.25,
		borderRadius: 10,
		bgColor: Color.gray4,
		marginV: 0.05
	}
	const dateOptions:{id:number,value:string}[]=[
		{ id:0, value: 'January'},
		{ id:1, value: 'February'},
		{ id:2, value: 'March'},
		{ id:3, value: 'April'},
		{ id:4, value: 'May'},
		{ id:5, value: 'June'},
		{ id:6, value: 'July'},
		{ id:7, value: 'August'},
		{ id:8, value: 'September'},
		{ id:9, value: 'October'},
		{ id:10, value: 'November'},
		{ id:11, value: 'December'},
	]
	function toggleAllDay():void{
		try{
			setAllDay((prev) => !prev)
		}catch(e){
			console.log(e)
		}
	}
	
	function onChange(item:{id:number,value:string}){
		try{
			console.log('dateselect onchange called',item)
		}catch(e){
			console.log(e)
		}
	}
	const timeFontStyle:FontStyling= fontStyles.Modal.CreateRequest.time.font.style
	const textFontStyle:FontStyling= fontStyles.Modal.CreateRequest.text.font.style
	
	useEffect(() => {
		insertInput<{allDay:boolean}>({allDay})
	},[allDay])

	return (
		<SubContainer styles={containerStyles}>
			<Item 
				id="allDay"
				containerStyling={containerStyles}
				left={<Title titletext={"All Day"} fontStyling={textFontStyle} />}
				right={<ToggleIcon onPress={toggleAllDay} state={allDay} />}
			/>			
			<TimeLayout 
					id="start"
					containerStyling={containerStyles}
					left={<Title titletext={"Starting"} fontStyling={textFontStyle} />}
					right={<Time font={timeFontStyle} />}
					bottom={<DaySelect 
						id="start"
						selected={{id:1,value:"February"}}
						handleChange={(item) => onChange(item)}
						options={dateOptions}
					/>}
			/>
			
		</SubContainer>
	)
}

export default Shift;

/*
	<DaySelect 
		id="start"
		selected={{id:1,value:"February"}}
		handleChange={(item) => onChange(item)}
		options={dateOptions}
	/>
*/