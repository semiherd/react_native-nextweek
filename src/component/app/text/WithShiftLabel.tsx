import { useEffect, useState } from 'react'
import { getWeekDay,getHourMinute,getDMY } from '../../../service/app/index'
import { FontStyling, WeekDays } from '../../../type/type.app'
import { StartEnd } from '../../../type/type.shift'

export type Base= {
	icon?: boolean
	data: StartEnd
	font: FontStyling
	type: 'timeRange' | 'shift' | 'date' | 'weekday'
	text?: string
}

const withShiftLabel= <TProps extends Base>(
	Component:React.ComponentType<TProps>,
) => {
	
	return (props:TProps ) => {
		const [text,setText]= useState<string>('')
		
		const changeFormatWeekDay=  async (param:StartEnd) => {
			const dayName:WeekDays|null=  getWeekDay(new Date(param.starting))
			setText(dayName as string)
		}

		const changeFormatDate=  async (param:StartEnd) => {
			if(param.starting && param.ending){
				const startDate=  getDMY(param.starting)
				.split('.')
				.slice(0,2)
				.join('/')
				.replace('.','/')
				
				const endDate=  getDMY(param.ending)
				const dateParam: string= `${startDate} | ${endDate}`			
				setText(dateParam)
			}
		}
		
		const getHM = (param:StartEnd):{starting:string,ending:string} => {
			try{
				return {
					starting: getHourMinute(param.starting),
					ending: getHourMinute(param.ending)
				}
			}catch(e){
				return {
					starting: '',
					ending: ''
				}
			}
		}
		const changeFormatShift=  async (param:StartEnd) => {
			try{
				const {starting,ending}:{starting:string,ending:string}= getHM(param)
				const formatDMY=  getDMY(param.starting)
				const dateParam: string= `${starting}-${ending} | ${formatDMY}`
				if(dateParam) setText(dateParam)			
			}catch(e){
				setText('')
			}
		}

		const changeTimeRange=(param:StartEnd):void => {
			try{
				const {starting,ending}:{starting:string,ending:string}=  getHM(param)		
				setText(`${starting} - ${ending}`)
			}catch(e){
				setText('')
			}
		}
		useEffect(() => {
			if(props.type==='shift') changeFormatShift(props.data)
			if(props.type==='date') changeFormatDate(props.data)
			if(props.type==='weekday') changeFormatWeekDay(props.data)
			if(props.type==='timeRange') changeTimeRange(props.data)
		},[props.data])

		return <Component text={text} {...props} />

	}
}	
export {
	withShiftLabel 
}