import React from "react"
import { ScrollView } from 'react-native'
import UpdateSection from './updateSection/index'
import ShiftSection from './shiftSection/index'
import ActivitySection from './activitySection/index'
import UpdateTitle from './updateSection/UpdateTitle'
import UpdateItemlist from './updateSection/UpdateItemlist'
import ShiftItemList from './shiftSection/ShiftItemList'
import ShiftTitle from './shiftSection/ShiftTitle'

const Sections = () => {

	return (
		<ScrollView 
			contentContainerStyle={{
				paddingBottom: 150
			}}
		>
			<UpdateSection 
				title={<UpdateTitle />}
				content={<UpdateItemlist />}
			/>
			<ShiftSection 
				title={<ShiftTitle />}
				content={<ShiftItemList />}
			/>
			<ActivitySection />
		</ScrollView>
	)
};

export default Sections;
