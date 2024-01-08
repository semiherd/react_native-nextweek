import React from "react"
import { View } from 'react-native'
import { Absence, Swap, Blocker } from '../../../../type/type.request'
import ActivityCard from './ActivityCard'

type ActivityTypeUnion= Absence | Swap | Blocker

const ActivityList = ({data,limit}:{data: ActivityTypeUnion[],limit:number}):React.ReactElement => {	
	
	return (
		<>
			{data?.map((item: ActivityTypeUnion,index:number) => {
				if(index<limit){
					return (
						<View key={index.toString()}>
							<ActivityCard<typeof item> data={item} />
						</View>
					)
				}									
			})}
		</>
	)
}

export default ActivityList
