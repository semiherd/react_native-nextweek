import React from "react"
import { View } from 'react-native'
import { ShiftType } from '../../../../type/type.shift'
import { WeekDays } from '../../../../type/type.app'
import { TimeTitle } from './index'
import { getWeekDay } from '../../../../service/app/index'
import ShiftPlan from './ShiftPlan'

const ShiftPlanList = ({data,limit}:{data:ShiftType[],limit:number}):React.ReactElement => {
	
	return (
		<View style={{ marginBottom: '10%'}} >
			{data?.map((item:ShiftType,index:number) => {									
				const dayName:WeekDays|null= item.starting? getWeekDay(new Date(item.starting)) :null
				
				return (
					<View key={index.toString()}>					
						<TimeTitle title={dayName}  />
						<ShiftPlan {...item}  />				
					</View>
				)
			})}
		</View>
	)
}

export default ShiftPlanList
