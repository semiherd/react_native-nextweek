import React, { useState,useEffect } from "react"
import { Dimensions, Text } from 'react-native'
import { ActivityItem } from "../../../../type/type.roster"
import { fontStyles } from "../../../../asset/constant/FontStyles"
import { IconText } from "../../../../component/app/text"
import { timePng } from '../../../../asset/image/home/index'
import { handleTimePassed } from '../../../../service/app/PassedTime'
import ImageItem from '../../../app/image/ImageItem'
import { Absence, Swap, Blocker } from '../../../../type/type.request'

const { width } = Dimensions.get('window')
type ActivityTypeUnion= Absence | Swap | Blocker

const imageItem= (image:React.HtmlHTMLAttributes<HTMLImageElement>) => <ImageItem width={width*0.05} height={width*0.05} image={image} />

const TimePassed= ({text}:{text:string}) => <Text style={fontStyles.Roster.Activity.time.style}>{text} ago</Text>
	
const ActivityTime = ({ data }:{ data: ActivityTypeUnion }) => {
	
	const [timePassed,setTimePassed]= useState<string>('')
	
	const getTimeData = (item: ActivityTypeUnion):Date => {
		try{
			return new Date(item.date)	
		}catch(e){
			return new Date()
		}
	}
	
	useEffect(() => {
		handleTimePassed(getTimeData(data)).then(time => setTimePassed(time))
	},[data])

	return <IconText
				text={<TimePassed text={timePassed}/>}
				icon={imageItem(timePng)}
				direction="row"
				align="flex-start"
			/>
}

export default ActivityTime
