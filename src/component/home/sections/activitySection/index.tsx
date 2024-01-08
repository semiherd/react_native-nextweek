import React from "react"
import { Dimensions,View } from 'react-native'
import { Title } from '../../../app/text/index'
import { TabItem } from '../../../app/button/tab/type.tab'
import { fontStyles } from "../../../../asset/constant/FontStyles"
import { handleMP, handleWH } from "../../../../styling"
import { ActivityTabId } from '../../../../type/type.home'
import TabWithContent from '../../../app/button/tab/TabWithContent'
import TabContent from './tab/TabContent'

const { width} = Dimensions.get('window')

const ActivitySection = () => {

	const tabs:TabItem<ActivityTabId>[]=[
		{
			id: 'swap',
			text: 'Swap',
			state: true
		},
		{
			id: 'vacation',
			text: 'Vacations',
			state: false
		},
		{
			id: 'event',
			text: 'Events',
			state: false
		},
	]

	return (
		<View>
			<View style={[
				handleMP(`margin-top-8`),
				handleMP(`margin-bottom-2`),
				handleWH(`width-80`),
				{ 
					transform:[
						{translateX: width*0.1}
					],
				}
			]}>
				<Title titletext="Activity" />
			</View>
			<TabWithContent<ActivityTabId> 
				tabs={tabs}
				content={<TabContent<ActivityTabId> tabs={tabs} />} 
				styling={fontStyles.Home.Activity.tab}
			/>	
		</View>
   )
}

export default ActivitySection
