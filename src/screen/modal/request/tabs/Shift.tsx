import React,{ useEffect, useState } from "react"
import SubContainer from '../../../../component/app/layout/SubContainer'
import VectorIcon from '../../../../component/app/icon/VectorIcon'
import Time from './Time'
import TimeLayout from './TimeLayout'
import { Color } from '../../../../asset/constant/Color'
import { Title } from '../../../../component/app/text/index'
import { FontStyling } from '../../../../type/type.app'
import { fontStyles } from '../../../../asset/constant/FontStyles'
import { TabItem } from '../../../../component/app/button/tab/type.tab'
import { useModalDispatch } from '../../../../context/modal/ModalContext'
import { Item } from './Item'
import { Pressable } from 'react-native'
import DateTimePickerModal from 'react-native-modal-datetime-picker'

export type TimeVals= {start:Date,end:Date}
export type StateId='start'|'end'
export type StateType= { id: StateId|null, type:'day'|'time'|null}
const defDates:TimeVals={
	start: new Date(),
	end: new Date(),
}

const ToggleIcon= ({state,onPress}:{state:boolean,onPress:() => void}) => 
	<Pressable onPress={() =>onPress()}>
		<VectorIcon type={"fontawesome"} size={30} name={state?'toggle-on':'toggle-off'} color={Color.gray} />
	</Pressable>

function Shift<TVal>(props:TabItem<TVal>){
	const { insertInput }= useModalDispatch()
	const [allDay,setAllDay]= useState<boolean>(false)
	const [state,setState]= useState<StateType>({id:null,type:null})
	const [selectedDate, setSelectedDate] = useState<TimeVals>(defDates)

	const hideDatePicker = () => {
		setState({id:null,type:null})
	}
	
	const handleConfirm = (date:Date) => {
		if(state.id=='start'){
			setSelectedDate((prev) => ({...prev,start:date}))
		}else if(state.id=='end'){
			setSelectedDate((prev) => ({...prev,end:date}))
		}
		hideDatePicker()
	}

	const containerStyles={
		containerWidth: 0.9,
		containerHeight: state ?1 :0.5,
		borderRadius: 10,
		bgColor: Color.gray4,
		marginV: 0.05,
	}

	function toggleAllDay():void{
		try{
			setAllDay((prev) => !prev)
		}catch(e){
			console.log(e)
		}
	}
	
	const timeFontStyle:FontStyling= fontStyles.Modal.CreateRequest.time.font.style
	const textFontStyle:FontStyling= fontStyles.Modal.CreateRequest.text.font.style
	
	useEffect(() => {
		insertInput<{allDay:boolean}>({allDay})
	},[allDay])

	useEffect(() => {
		insertInput(selectedDate)
	},[selectedDate])

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
				state={state}
				containerStyling={containerStyles}
				left={<Title titletext={"Starting"} fontStyling={textFontStyle} />}
				right={<Time id={`start`} font={timeFontStyle} setState={setState} value={selectedDate.start} />}
				bottom={<DateTimePickerModal 
						date={selectedDate.end}
						isVisible={state.id==='start' ?true :false}
						mode={state.type==='day' ?'date' :'time'}
						onConfirm={handleConfirm}
						onCancel={hideDatePicker}
				/>}
			/>
			<TimeLayout 
					id="end"
					state={state}
					containerStyling={containerStyles}
					left={<Title titletext={"Ending"} fontStyling={textFontStyle} />}
					right={<Time id={`end`} font={timeFontStyle} setState={setState} value={selectedDate.end} />}
					bottom={<DateTimePickerModal
						date={selectedDate.end}
						isVisible={state.id==='end' ?true :false}
						mode={state.type==='day' ?'date' :'time'}
						onConfirm={handleConfirm}
						onCancel={hideDatePicker}
					/>}
			/>		
		</SubContainer>
	)
}

export default Shift
