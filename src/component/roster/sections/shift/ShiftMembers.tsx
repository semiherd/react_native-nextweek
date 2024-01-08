import React from "react"
import { Text,View } from 'react-native'
import { fontStyles } from '../../../../asset/constant/FontStyles'
import { ActivityView } from '../activity/index'
import { UserAvatar } from "../../../app/image/type.image"
import { withShiftLabel } from '../../../app/text/index'
import { ShiftType } from "../../../../type/type.shift"
import AvatarImage from '../../../app/image/AvatarImage'
import TimeItem from '../../../home/TimeItem'

const FormattedLabel= withShiftLabel(TimeItem)

const ShiftMembers = ({data,shift}:{data:UserAvatar[],shift:ShiftType}) => {
	
	return (
		<View>
			{data.map((u:UserAvatar) => 
				<View key={u._id} style={{marginBottom:'5%'}}>
					<ActivityView 
						alignOption="space-around"
						image={<AvatarImage data={{_id: u._id,name:u.name,image:u.image}} styling={fontStyles.Roster.Activity.avatar.style} />}	
						content={<Text style={[fontStyles.Roster.Shift.content.name.font.style,{alignSelf: 'flex-start'}]}>{u.name}</Text>}	
						time={<FormattedLabel type="shift" data={{starting:shift.starting,ending: shift.ending}} font={fontStyles.Roster.MyShiftItem.timeFont} />}
					/>
				</View>							
			)}
		</View>
	)
}
export default ShiftMembers