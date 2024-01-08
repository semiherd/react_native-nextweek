import React, { useEffect,useState } from "react"
import { Text } from 'react-native'
import { ShiftType } from '../../../type/type.shift'
import { withShiftLabel } from '../../app/text/WithShiftLabel'
import { fontStyles } from '../../../asset/constant/FontStyles'
import { FontStyling } from "../../../type/type.app"
import { getWeekDay } from '../../../service/app/index'
import { capitalizeFirstCh } from '../../../service/app/index'
import { useShift } from '../../../service/hook/UseShift'
import { ProfileSection, CardContent } from '../../../type/type.profile'
import { StartEnd } from '../../../type/type.shift'
import TimeItem from '../../home/TimeItem'
import ContentLayout from  './ContentLayout'

const TimeComponent = withShiftLabel(TimeItem)

type ParamStyling={
	[T in ProfileSection]:{
		type: 'timeRange' | 'shift' | 'date' | 'weekday',
		first: FontStyling,
		second: FontStyling,
		label: string
	}
}

const Content = ({item,id}:{item: CardContent,id: ProfileSection}) => {
	
	const [data,setData]= useState<StartEnd>({starting:'',ending:''})
	const { readShift }= useShift()
	
	const params:ParamStyling={
		"absence": {
			type: 'timeRange',
			first:	fontStyles.Profile.Absence.time.style,
			second:	fontStyles.Profile.Absence.day.style,
			label: id,
			
		},
		"blocker": {
			type: 'date',
			label: getWeekDay(new Date(item.starting)),
			first:	fontStyles.Profile.Blocker.date.style,
			second:	fontStyles.Profile.Blocker.day.style
		},
		"swap-in": {
			type: 'date',
			label: 'Request',
			first:	fontStyles.Profile.RequestIn.time.font.style,
			second:	fontStyles.Profile.RequestIn.time.font.style
		},
		"swap-out": {
			type: 'date',
			label: 'Request',
			first: fontStyles.Profile.RequestOut.time.font.style,
			second:	fontStyles.Profile.RequestOut.type.font.style
		}
	}

	async function handleShift(id:ShiftType['_id']):Promise<StartEnd>{
		try{
				const data:ShiftType[]|null= await readShift({_id:id})
				if(data===null) return {starting:'',ending:''}
				if(data.length){
					return {
						starting: data[0].starting,
						ending: data[0].ending
					}
				}else return { starting: '', ending: ''}			
		}catch(e){
			return {
				starting: '',
				ending: ''
			}
		}
	}

	async function handleData(){
		try{						
			switch(id){
				case 'swap-in':
				case 'swap-out':
					const shiftData= await handleShift(item._id)
					setData({
						starting: shiftData?.starting,
						ending: shiftData?.ending,
					})
				case 'absence':
				case 'blocker':
					setData({ starting: item.starting , ending: item.ending})
				default:
					setData({ starting: item.starting, ending: item.ending})
			}		
		}catch(e){
			console.log(e)
		}
	}
	
	useEffect(() => {
		handleData()
	},[item])

	return <>
		{ data 
			?	<ContentLayout 
					{...item} 
					first={<TimeComponent type={params[id].type} data={data} font={params[id].first} />} 
					second={<Text style={[{marginTop:'5%',marginLeft:'3%'},params[id].second]}>{capitalizeFirstCh(params[id].label)}</Text>}
				/>
			:	null
		}
	</>
}

export default Content
